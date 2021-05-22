from django.shortcuts import render
from .serializers import create_recipe_serializer
from .models import Recipe

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

class recipe_view(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = create_recipe_serializer


class create_recipe_view(generics.CreateAPIView):
    serializer_class = create_recipe_serializer
    serializer = serializer_class()

class recipe_detail_view(APIView):
    serializer_class = create_recipe_serializer
    serializer = serializer_class()
    