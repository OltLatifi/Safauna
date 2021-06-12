from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('create-post/', index),
    path('posts/<int:pk>', index),
    path('recipe/<int:pk>/delete/', index),
]
