from rest_framework import serializers
from credentials.models import CredentialURL, Credentials


class CredentialsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Credentials
    fields = '__all__'



class CredentialURLSerializer(serializers.ModelSerializer):
  credentials = CredentialsSerializer(many=True, read_only=True)

  class Meta:
    model = CredentialURL
    fields = '__all__'
    extra_kwargs = {
      'user': {'write_only': True}
    }
