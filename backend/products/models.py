from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    cost = models.DecimalField(max_digits=6, decimal_places=1)

    def __str__(self) -> str:
        return self.name
