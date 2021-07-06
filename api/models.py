from django.db import models
from PIL import Image

from django.contrib.auth.models import User

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

# camel case for classes
# english for rows


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)




def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)


class PostAnimals(models.Model):
    data = models.DateField(auto_now_add=True)
    category = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    photo = models.ImageField(default="default.png", upload_to=upload_to)
    description = models.TextField(max_length=500)
    features = models.CharField(max_length=200)
    breed = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts", null=True)
    reward = models.IntegerField(default=0)
    phone = models.CharField(max_length=15)
    def __str__(self):
        return self.name


class MakeRating(models.Model):
    rating = models.IntegerField(default=3)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.rating

class MakeComments(models.Model):
    comment = models.CharField(max_length=255)
    post = models.ForeignKey(PostAnimals, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.comment

class MakeArticle(models.Model):
    date = models.DateField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    photo = models.ImageField(default="default.jpg", upload_to=upload_to)
    title = models.CharField(max_length=200)
    content = models.TextField(max_length=10000)
