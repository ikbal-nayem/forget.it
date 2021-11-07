import base64
from rest_framework import viewsets
from .serializers import CredentialURLSerializer, CredentialsSerializer
from .models import CredentialURL, Credentials


class CredentialURLViewset(viewsets.ModelViewSet):
  queryset = CredentialURL.objects.all()
  serializer_class = CredentialURLSerializer

  def get_queryset(self):
    credential_url = CredentialURL.objects.filter(user = self.request.user)
    return credential_url
  
  def create(self, request, *args, **kwargs):
    request.data['user'] = request.user
    return super().create(request, *args, **kwargs)

  def update(self, request, *args, **kwargs):
    request.data['user'] = request.user
    return super().update(request, *args, **kwargs)



class CredentialsViewset(viewsets.ModelViewSet):
  queryset = Credentials.objects.all()
  serializer_class = CredentialsSerializer

  def get_queryset(self):
    url_id = self.request.query_params.get('url_id')
    user_credentials = Credentials.objects.filter(credential_url__user = self.request.user)
    user_credentials = user_credentials.filter(credential_url=url_id) if url_id else user_credentials
    return user_credentials
  
  def create(self, request, *args, **kwargs):
    if request.user.encrypt_pswds:
      request.data['pswd'] = str(base64.b64encode(request.data.get('pswd').encode()), 'utf-8')
    return super().create(request, *args, **kwargs)
  
  def update(self, request, *args, **kwargs):
    if request.user.encrypt_pswds:
      request.data['pswd'] = str(base64.b64encode(request.data.get('pswd').encode()), 'utf-8')
    return super().update(request, *args, **kwargs)