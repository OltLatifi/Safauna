from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    
    path('login/', index),
    path('logout/', index),
    path('register/', index),

    path('filter/', index),
    path('create-post/', index),
    path('posts/<int:pk>', index),
    path('posts/<int:pk>/update/', index),

    path('articles/', index),
    path('articles/<int:pk>', index),

    path('all-lost/', index),
    path('all-found/', index),
    path('all-adopt/', index),
    path('all-reward/', index),
    path('all-posts/', index),

    path('about-us/', index),
]
