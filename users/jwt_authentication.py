from rest_framework.authentication import BaseAuthentication, get_authorization_header
from rest_framework import exceptions
import jwt
from django.conf import settings
from django.contrib.auth import get_user_model


class JWTAuthentication(BaseAuthentication):
  def authenticate(self, request):
    auth_header = get_authorization_header(request)
    auth_token = auth_header.decode('utf-8').split(" ")
    if len(auth_token)!=2:
      raise exceptions.AuthenticationFailed('No valid token found!')

    try:
      payload = jwt.decode(auth_token[1], settings.SECRET_KEY, algorithms='HS256')
      user = get_user_model().objects.get(username=payload['username'])
      return (user, auth_token[1])
    except jwt.ExpiredSignatureError as e:
      raise exceptions.AuthenticationFailed('Token is expired!')
    except jwt.DecodeError as e:
      raise exceptions.AuthenticationFailed('Invalid token')
    except get_user_model().DoesNotExist as no_user:
      raise exceptions.NotFound('No user found!')
