from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _
from django.conf import settings
import jwt, datetime



class CustomUserManager(BaseUserManager):
  def create_user(self, username, email, password, **other_fields):
    if not email:
      raise ValueError('Email is required!')
    elif not username:
      raise ValueError('Username is required!')

    email = self.normalize_email(email)
    username = self.model.normalize_username(username)
    user = self.model(username=username, email=email, **other_fields)
    user.set_password(password)
    user.save()
    return user
  
  def create_superuser(self, username, email, password, **other_fields):
    other_fields.setdefault('is_staff', True)
    other_fields.setdefault('is_admin', True)
    other_fields.setdefault('is_superuser', True)
    return self.create_user(username, email, password, **other_fields)



class CustomUsers(AbstractBaseUser, PermissionsMixin):
  first_name = models.CharField(max_length=15, blank=True, null=True)
  last_name = models.CharField(max_length=15, blank=True, null=True)
  username = models.CharField(max_length=15, unique=True, primary_key=True)
  email = models.EmailField(verbose_name='email', unique=True)
  join_date = models.DateTimeField(auto_now_add=True)
  last_login = models.DateTimeField(auto_now=True)
  email_verified = models.BooleanField(default=False, help_text=_("Email should be verified."))
  encrypt_pswds = models.BooleanField(default=True)
  is_active = models.BooleanField(default=True)
  is_admin = models.BooleanField(default=False)
  is_staff = models.BooleanField(default=False)

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['username']
  objects = CustomUserManager()

  @property
  def token(self):
    return jwt.encode({'username': self.username, 'exp': datetime.datetime.utcnow()+datetime.timedelta(hours=24)}, settings.SECRET_KEY, algorithm='HS256')

  def __str__(self) -> str:
    return self.username