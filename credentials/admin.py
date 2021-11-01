from django.contrib import admin
from credentials.models import CredentialURL, Credentials


class CredentialURLAdmin(admin.ModelAdmin):
  list_display = ('user', 'title', 'url', )
  list_display_links = ('user', 'url', 'title')
  list_filter = ('user',)
  search_fields = ('user', 'url', 'title')

class CredentialsAdmin(admin.ModelAdmin):
  list_display = ('credential_url', 'username', 'edited_on')
  list_display_links = ('username', 'credential_url')
  list_filter = ('credential_url__user',)
  search_fields = ('credential_url', 'username',)



admin.site.register(CredentialURL, CredentialURLAdmin)
admin.site.register(Credentials, CredentialsAdmin)