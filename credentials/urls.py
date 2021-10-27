from django.urls import path, include
from rest_framework import routers
from .views import CredentialsViewset


router = routers.DefaultRouter()
router.register(r'', CredentialsViewset)

urlpatterns = [
  path('', include(router.urls))
]