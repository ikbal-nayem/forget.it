from django.urls import path
from .views import RegisterView, LoginView, UserAPIView, changePasswordView


urlpatterns = [
  path('register', RegisterView.as_view(), name="register"),
  path('login', LoginView.as_view(), name="login"),
  path('user-info', UserAPIView.as_view(), name="user-info"),
  path('change-password', changePasswordView, name="change-password"),
]