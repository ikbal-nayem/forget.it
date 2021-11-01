from django.db import models
from django.contrib.auth import get_user_model


class CredentialURL(models.Model):
  user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name="credential_url")
  title = models.CharField(default=None, max_length=256, null=True, blank=True)
  url = models.URLField(verbose_name="url")

  def __str__(self) -> str:
      return self.title or self.url
  


class Credentials(models.Model):
  credential_url = models.ForeignKey(CredentialURL, on_delete=models.CASCADE, related_name="credentials")
  username = models.CharField(max_length=50)
  pswd = models.CharField(max_length=100)
  added_on = models.DateTimeField(auto_now_add=True)
  edited_on = models.DateTimeField(auto_now=True)