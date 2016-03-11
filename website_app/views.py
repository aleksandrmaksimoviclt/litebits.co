from django.shortcuts import render
from django.http import HttpResponse
from .models import Member
from django.template import RequestContext

def index(request):

	return render(request, 'website_app/index.html', {'members': Member.objects.all()})