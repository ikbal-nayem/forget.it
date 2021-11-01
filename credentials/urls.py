from django.urls import path, include
from rest_framework import routers
from .views import CredentialURLViewset, CredentialsViewset


router = routers.DefaultRouter()
router.register(r'urlwise', CredentialsViewset)
router.register(r'', CredentialURLViewset)

urlpatterns = [
  path('', include(router.urls))
]