from rest_framework import serializers
from .models import Ratings

class RatingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ratings

        fields = ('id', 'username', 'song', 'rating')