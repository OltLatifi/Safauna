from django.contrib.auth.models import User
from rest_framework import serializers
from .models import PostAnimals, MakeArticle, MakeComments
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from django.contrib.auth import authenticate


# posts

class post_animals_serializer(serializers.ModelSerializer):    
    class Meta:
        model = PostAnimals
        fields = "__all__"


class post_animals_get_serializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    
    class Meta:
        model = PostAnimals
        fields = "__all__"


# users

class user_serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')



class register_serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if instance is not None:
            instance.set_password(password)
        instance.save()
        return instance


class login_serializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


# articles


class article_serializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()
    class Meta:
        model = MakeArticle
        fields = "__all__"


# comments

class comments_serializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    # post = serializers.StringRelatedField()

    class Meta:
        model = MakeComments
        fields = "__all__"

