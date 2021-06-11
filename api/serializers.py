from django.contrib.auth.models import User
from rest_framework import serializers
from .models import PostAnimals


# post
class post_animals_serializer(serializers.ModelSerializer):
    class Meta:
        model = PostAnimals
        fields = "__all__"



