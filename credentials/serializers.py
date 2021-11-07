import base64
from rest_framework import serializers
from credentials.models import CredentialURL, Credentials


class CredentialsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Credentials
    fields = '__all__'
    read_only_fields = ('added_on', 'edited_on')




class CredentialURLSerializer(serializers.ModelSerializer):
  credentials = CredentialsSerializer(many=True, read_only=True)

  class Meta:
    model = CredentialURL
    fields = '__all__'
    extra_kwargs = {
      'user': {'write_only': True}
    }


  def create(self, validated_data):
    c_url = self.Meta.model.objects.create(**validated_data)
    request = self.context.get('request', None)
    pswd = self.initial_data.get('pswd')
    if request and request.user.encrypt_pswds:
      pswd = str(base64.b64encode(pswd.encode()), 'utf-8')

    Credentials.objects.create(
      credential_url=c_url,
      username=self.initial_data.get('username'),
      pswd=pswd
    )
    return c_url
