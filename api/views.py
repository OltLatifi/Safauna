from django.shortcuts import render
from django.contrib.auth.models import User

from .serializers import (  post_animals_serializer,
                            post_animals_get_serializer,
                            register_serializer,
                            user_serializer,
                            login_serializer,)
from .models import PostAnimals
from django.shortcuts import get_object_or_404
from rest_framework import viewsets


from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser

from django.contrib.auth import login
from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.auth import authenticate


from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth.decorators import login_required

class post_animals_view(generics.ListAPIView):
    queryset = PostAnimals.objects.all()
    serializer_class = post_animals_serializer
    
    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)



class create_post_animals_view(APIView):
    parser_classes = [MultiPartParser, FormParser]
    # permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        print(request.data)
        serializer = post_animals_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class post_animals_detail_view(generics.RetrieveAPIView):
    queryset = PostAnimals.objects.all()
    serializer_class = post_animals_get_serializer
    # serializer = serializer_class()

class post_animals_delete_view(generics.DestroyAPIView):
    queryset = PostAnimals.objects.all()
    serializer_class = post_animals_serializer
    
class post_animals_update_view(generics.UpdateAPIView):
    queryset = PostAnimals.objects.all()
    serializer_class = post_animals_serializer


# ============================ users =====================================

class user_logged_in(APIView):
    def get(self, request):
        user = self.request.user
        if user.is_authenticated:
            content = {
                'user': str(user.id),
                'auth': str(self.request.auth),
            }
            return Response(content)
        return Response({"Info":"User is not authenticated"})
    



class custom_user_register(APIView):
    permission_classes = [AllowAny,]

    def post(self, request):
        serializer = register_serializer(data=request.data)
        if serializer.is_valid():
            new_user = serializer.save()
            if new_user:
                return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class blacklist_token_view(APIView):
    permission_classes = [AllowAny,]

    def post(self, request):
        try:
            refresh_token = request.data.get['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)