# Generated by Django 3.1 on 2021-06-12 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_remove_postanimals_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postanimals',
            name='category',
            field=models.CharField(max_length=50),
        ),
    ]
