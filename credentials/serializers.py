from rest_framework import serializers
from credentials.models import Credentials


class CredentialSerializer(serializers.ModelSerializer):
  class Meta:
    model = Credentials
    fields = '__all__'
    extra_kwargs = {
      'user': {'write_only': True}
    }