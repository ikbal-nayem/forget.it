from rest_framework import viewsets
from .serializers import CredentialSerializer
from .models import Credentials


class CredentialsViewset(viewsets.ModelViewSet):
  queryset = Credentials.objects.all()
  serializer_class = CredentialSerializer

  def get_queryset(self):
    user_credential = Credentials.objects.filter(user = self.request.user)
    return user_credential
  
  def create(self, request, *args, **kwargs):
    request.data['user'] = request.user
    return super().create(request, *args, **kwargs)

  def update(self, request, *args, **kwargs):
    request.data['user'] = request.user
    return super().update(request, *args, **kwargs)