from django.db import models
from PIL import Image

from django.contrib.auth.models import User

# camel case for classes
# english for rows
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class MakeUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    # city = models.ForeignKey(MakeCity, on_delete=models.PROTECT)
    def __str__(self):
        return self.user


class PostAnimals(models.Model):
    data = models.DateField(auto_now_add=True)
    category = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    photo = models.ImageField(default="default.png", upload_to=upload_to)
    description = models.TextField(max_length=500)
    features = models.CharField(max_length=200)
    breed = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts", null=True)
    reward = models.IntegerField(default=0)
    phone = models.CharField(max_length=15)
    def __str__(self):
        return self.name


class MakeRating(models.Model):
    rating = models.IntegerField(default=3)
    user = models.ForeignKey(MakeUser, on_delete=models.CASCADE)
    def __str__(self):
        return self.rating

class MakeComments(models.Model):
    comment = models.CharField(max_length=255)
    post = models.ForeignKey(PostAnimals, on_delete=models.CASCADE)
    user = models.ForeignKey(MakeUser, on_delete=models.CASCADE)
    def __str__(self):
        return self.comment
