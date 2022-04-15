from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RatingsSerializer, UsersSerializer
from .models import Ratings, Users
from rest_framework import status
from rest_framework.response import Response


class RatingsView(viewsets.ModelViewSet):
    serializer_class = RatingsSerializer
    queryset = Ratings.objects.all()

    def put(self, request, pk, format=None):
        ratings = self.get_object(pk)
        serializer = RatingsSerializer(ratings, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


class UsersView(viewsets.ModelViewSet):
    serializer_class = UsersSerializer
    queryset = Users.objects.all()

    