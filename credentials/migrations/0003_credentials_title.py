# Generated by Django 3.2.8 on 2021-10-25 02:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('credentials', '0002_auto_20211023_1036'),
    ]

    operations = [
        migrations.AddField(
            model_name='credentials',
            name='title',
            field=models.CharField(blank=True, default=None, max_length=150, null=True),
        ),
    ]