from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RatingsSerializer
from .models import Ratings


class RatingsView(viewsets.ModelViewSet):
    serializer_class = RatingsSerializer
    queryset = Ratings.objects.all()

    