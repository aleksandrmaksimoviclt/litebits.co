from django.db import models
from django.conf import settings

# Create your models here.

class Member(models.Model):
	user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True)
	name = models.CharField(max_length=50)
	last_name = models.CharField(max_length=50, default='')
	job = models.CharField(max_length=50)
	resume = models.CharField(max_length=200)
	facebook = models.CharField(max_length=100, blank=True, null=True)
	twitter = models.CharField(max_length=100, blank=True, null=True)
	linkedin = models.CharField(max_length=100, blank=True, null=True)
	img = models.ImageField(upload_to='members')

	def __str__(self):
		return self.name