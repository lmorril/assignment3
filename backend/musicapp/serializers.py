from rest_framework import serializers
from .models import Ratings, Users

class RatingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ratings

        fields = ('id', 'username', "artist", 'song', 'rating')

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users

        fields = ("username", "password")