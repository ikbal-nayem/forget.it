from rest_framework import serializers
from django.contrib.auth import get_user_model


class RegisterSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True, min_length=8)
  conf_password = serializers.CharField(write_only=True, min_length=8)

  class Meta:
    model = get_user_model()
    fields = ['first_name', 'last_name', 'username', 'email', 'email_verified', 'encrypt_pswds', 'password', 'conf_password']
    read_only_fields = ['email_verified']
  
  def create(self, validated_data):
    if validated_data['password'] == validated_data['conf_password']:
      validated_data.pop('conf_password')
      password = validated_data.pop('password')
      instance = self.Meta.model(**validated_data)
      instance.set_password(password)
      instance.save()
      return instance
    else:
      raise serializers.ValidationError({'password': ('Password does not match!')})



class LoginSerializer(serializers.ModelSerializer):
  password = serializers.CharField(min_length=8, write_only=True)

  class Meta:
    model = get_user_model()
    fields = ('email', 'username', 'password', 'token')
    read_only_fields = ['token']