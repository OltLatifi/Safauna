from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Recipe


# post
class recipe_serializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = "__all__"



