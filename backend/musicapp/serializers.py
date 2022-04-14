from rest_framework import serializers
from .models import Ratings, Users

class RatingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ratings

        fields = ('id', 'username', "artist", 'song', 'rating')
    
    def validate_rating(self, value):
        if value < 1 or value > 5:
            raise serializers.ValidationError('Rating must be between 1 and 5')
        return value

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users

        fields = ("username", "password")