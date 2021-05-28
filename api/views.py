from django.shortcuts import render
from django.contrib.auth.models import User

from .serializers import recipe_serializer #, user_serializer
from .models import Recipe

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

class recipe_view(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = recipe_serializer


class create_recipe_view(generics.CreateAPIView):
    serializer_class = recipe_serializer
    serializer = serializer_class()

class recipe_detail_view(APIView):
    serializer_class = recipe_serializer
    serializer = serializer_class()

class recipe_detail_view(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = recipe_serializer
    # serializer = serializer_class()

class recipe_delete_view(generics.DestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = recipe_serializer

# class create_user(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = user_serializer
#     permission_classes = (AllowAny, )