from django.urls import path
from .views import (recipe_view,
                    create_recipe_view,
                    recipe_detail_view,
                    recipe_delete_view, )
#, create_user
# from django.conf.urls.static import static
# from django.conf import settings

urlpatterns = [
    path('recipe/', recipe_view.as_view()),
    path('create-recipe/', create_recipe_view.as_view()),
    path('recipe/<int:pk>/', recipe_detail_view.as_view()),
    path('recipe/<int:pk>/delete/', recipe_delete_view.as_view()),
    # path('register/', create_user.as_view()),
]
# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)