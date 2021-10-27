from rest_framework.generics import GenericAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from users.serializers import RegisterSerializer, LoginSerializer
from .models import CustomUsers



class RegisterView(GenericAPIView):
  serializer_class = RegisterSerializer
  queryset = CustomUsers.objects.all()
  authentication_classes = []

  def post(self, request):
    if not request.data.get('username', None) and request.data.get('email', None):
      request.data['username'] = request.data['email'].split('@')[0]
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      data = serializer.data
      data['success'] = True
      return Response(data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class LoginView(GenericAPIView):
  serializer_class = LoginSerializer
  authentication_classes = []

  def post(self, request):
    email = request.data.get('email', None)
    password = request.data.get('password', None)
    user = authenticate(username=email, password=password)
    if user:
      instance = self.serializer_class(user)
      data = instance.data
      data['success'] = True
      return Response(data, status=status.HTTP_200_OK)
    return Response({'message': 'Invalid credentials, try again!'}, status=status.HTTP_401_UNAUTHORIZED)



class UserAPIView(GenericAPIView):
  def get(self, request):
    user = request.user
    serializer = RegisterSerializer(user)
    return Response({'user': serializer.data, 'success': True})

  def patch(self, request):
    user = request.user
    new_data = request.data
    serializer = RegisterSerializer(user, data=new_data, partial=True)
    if serializer.is_valid():
      serializer.save()
      data = serializer.data
      data['success'] = True
      return Response(data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  


@api_view(['POST'])
def changePasswordView(request):
  data = request.data
  user = authenticate(username=request.user.email, password=data.get('current_password', None))
  if user:
    if data.get('password', None) and data.get('conf_password', None):
      if data['password'] == data['conf_password']:
        user.set_password(data['password'])
        user.save()
        return Response({'message': 'Password changed successfully.', 'success': True}, status=status.HTTP_200_OK)
    return Response({'message': 'Those passwords didn’t match. Try again!', 'success': False}, status=status.HTTP_400_BAD_REQUEST)
  return Response({"message": "Invalid user.", "success": False}, status=status.HTTP_401_UNAUTHORIZED)