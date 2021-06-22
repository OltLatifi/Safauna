from django.shortcuts import render
from django.contrib.auth.models import User

from .serializers import post_animals_serializer, post_animals_get_serializer, make_user_serializer
from .models import PostAnimals
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response


from rest_framework import generics,status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.parsers import MultiPartParser, FormParser



class post_animals_view(generics.ListAPIView):
    queryset = PostAnimals.objects.all()
    serializer_class = post_animals_serializer




class create_post_animals_view(APIView):
    # permission_classes = (AllowAny,)
    parser_classes = [MultiPartParser, FormParser]

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





class create_user(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = make_user_serializer
    # permission_classes = (AllowAny, )