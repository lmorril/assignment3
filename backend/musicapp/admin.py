from django.contrib import admin

# Register your models here.
from .models import Ratings, Users

class RatingsAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "artist", "song", "rating")

class UsersAdmin(admin.ModelAdmin):
    list_display = ('username', 'password')

admin.site.register(Ratings, RatingsAdmin)
admin.site.register(Users, UsersAdmin)