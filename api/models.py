from PIL import Image
from django.db import models


class Recipe(models.Model):
    # photos = models.ImageField(default='frontend/static/images/default.png', upload_to="frontend/static/images")
    name = models.CharField(max_length=64)
    calories = models.IntegerField()
    instructions = models.TextField(max_length=1000)
    ingredients = models.TextField(max_length=250)
    time_to_make = models.IntegerField(default=30)
