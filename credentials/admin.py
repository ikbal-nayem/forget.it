from django.contrib import admin
from credentials.models import Credentials


class CredentialAdmin(admin.ModelAdmin):
  list_display = ('user', 'url', 'username',)
  list_display_links = ('username', 'user')
  list_filter = ('user',)
  search_fields = ('user', 'username', 'url')

admin.site.register(Credentials, CredentialAdmin)