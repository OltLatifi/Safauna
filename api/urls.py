from django.urls import path
from .views import (post_animals_view,
                    create_post_animals_view,
                    post_animals_detail_view,
                    post_animals_delete_view,
                    )

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('posts/', post_animals_view.as_view()),
    path('create-post/', create_post_animals_view.as_view()),
    path('posts/<int:pk>/', post_animals_detail_view.as_view()),
    path('posts/<int:pk>/delete/', post_animals_delete_view.as_view()),
    # path('register/', create_user.as_view()),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)