from django.contrib.auth.models import User
from rest_framework import serializers
from .models import PostAnimals
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response


# post
class post_animals_serializer(serializers.ModelSerializer):    
    class Meta:
        model = PostAnimals
        fields = "__all__"


class post_animals_get_serializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    
    class Meta:
        model = PostAnimals
        fields = "__all__"



