from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from django.shortcuts import redirect



def redirectToFront(request):
    return redirect("https://forgetit.glitch.me")

urlpatterns = [
    path('super-admin/', admin.site.urls),
    path('api/user/', include('users.urls')),
    path('api/credentials/', include('credentials.urls')),
    path('', redirectToFront)
]
