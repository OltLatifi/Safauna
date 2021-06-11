from django.db import models
from PIL import Image

from django.contrib.auth.models import User

# camel case for classes
# english for rows

class MakeCity(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name


animal_choices = (('Mace','Mace'),('Qen', 'Qen'))


class MakeBreed(models.Model):
    animal_type = models.CharField(max_length=20, choices=animal_choices)
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class MakeUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    city = models.ForeignKey(MakeCity, on_delete=models.PROTECT)
    def __str__(self):
        return self.user



categories = (('Kafshe rruge', 'Kafshe rruge'),
            ('Kafshe e humbur', 'Kafshe e humbur'),
            ("Kafshe e gjetur", 'Kafshe e gjetur'),
                    )

class PostAnimals(models.Model):
    category = models.CharField(max_length=50, choices=categories)
    name = models.CharField(max_length=50)
    # photo = models.ImageField(default="Images/default.png", upload_to="Images/")
    description = models.TextField(max_length=500)
    features = models.CharField(max_length=200)
    breed = models.ForeignKey(MakeBreed, on_delete=models.PROTECT)
    city = models.ForeignKey(MakeCity, on_delete=models.PROTECT)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
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