# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-11 12:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='last_name',
            field=models.CharField(default='', max_length=50),
        ),
    ]