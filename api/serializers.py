from rest_framework import serializers
from .models import Recipe


# post
class create_recipe_serializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = "__all__"