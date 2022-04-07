from django.db import models

# Create your models here.
from tkinter import CASCADE
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Users(models.Model):
    username = models.CharField(max_length=200, primary_key=True)
    password = models.CharField(max_length=200)

    def __str__(self):
        return self.username



class Ratings(models.Model):
    id = models.IntegerField(primary_key=True)
    username = models.ForeignKey(Users, on_delete=models.CASCADE)
    song = models.CharField(max_length=200)
    rating = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(10)])

    def __str__(self):
        return self.song



class Song(models.Model):
    id = models.IntegerField(primary_key=True)
    song = models.ForeignKey(Ratings, related_name="info", on_delete=models.CASCADE)
    artist = models.CharField(max_length=200)

class SongDetails(models.Model):
    id = models.IntegerField(primary_key=True)
    song = models.ForeignKey(Ratings, related_name="s_info", on_delete=models.CASCADE)
    album = models.CharField(max_length=200)
    year = models.IntegerField(validators=[MinValueValidator(1900), MaxValueValidator(2022)])
    genre = models.CharField(max_length=200)