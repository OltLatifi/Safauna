from django.shortcuts import render
from django.contrib.auth.models import User

from .serializers import post_animals_serializer #, user_serializer
from .models import PostAnimals

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

class post_animals_view(generics.ListAPIView):
    queryset = PostAnimals.objects.all()
    serializer_class = post_animals_serializer


class create_post_animals_view(generics.CreateAPIView):
    serializer_class = post_animals_serializer
    serializer = serializer_class()


class post_animals_detail_view(generics.RetrieveAPIView):
    queryset = PostAnimals.objects.all()
    serializer_class = post_animals_serializer
    # serializer = serializer_class()

class post_animals_delete_view(generics.DestroyAPIView):
    queryset = PostAnimals.objects.all()
    serializer_class = post_animals_serializer
    

# class create_user(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = user_serializer
#     permission_classes = (AllowAny, )