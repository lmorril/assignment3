from django.contrib import admin

# Register your models here.
from .models import Ratings

class RatingsAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "song", "rating")

admin.site.register(Ratings, RatingsAdmin)