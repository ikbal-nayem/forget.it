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
    Credentials.objects.create(
      credential_url=c_url,
      username=self.initial_data.get('username'),
      pswd=self.initial_data.get('pswd')
    )
    return c_url
