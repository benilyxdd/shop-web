from django.db import models
from django.utils import timezone


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    cost = models.DecimalField(max_digits=6, decimal_places=1)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_created=True)

    def __str__(self) -> str:
        return self.name
