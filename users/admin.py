from django.contrib import admin
from users.models import CustomUsers


class UserAdmin(admin.ModelAdmin):
  list_display = ('username', 'email', 'last_login', 'join_date', 'is_active')
  list_display_links = ('username', 'email')
  list_filter = ('is_active', 'is_admin')
  search_fields = ('username', 'email', 'first_name', 'last_name')
  fieldsets = (
    (None, {'fields': ('first_name', 'last_name', 'username', 'email',)}),
    ('Premissions', {'fields': ('is_admin', 'is_superuser', 'is_staff')}),
    ('Auth', {'fields': ('is_active', 'password')})
  )

admin.site.register(CustomUsers, UserAdmin)