# Generated by Django 3.1 on 2021-05-27 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_remove_recipe_photos'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='serving_size',
            field=models.IntegerField(default=0),
        ),
    ]
