from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RatingsSerializer, UsersSerializer
from .models import Ratings, Users


class RatingsView(viewsets.ModelViewSet):
    serializer_class = RatingsSerializer
    queryset = Ratings.objects.all()


class UsersView(viewsets.ModelViewSet):
    serializer_class = UsersSerializer
    queryset = Users.objects.all()

    