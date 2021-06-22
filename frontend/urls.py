from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('register/', index),
    path('create-post/', index),
    path('posts/<int:pk>', index),
    path('posts/<int:pk>/update/', index),
]
