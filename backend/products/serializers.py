from rest_framework import serializers
from .models import Product

class ProductSerializers(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    cost = serializers.DecimalField(max_digits=6, decimal_places=1)
    date_created = serializers.DateTimeField()
    date_modified = serializers.DateTimeField()

    def create(self, validated_data):
        return Product.objects.create(validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.cost = validated_data.get('cost', instance.cost)
        instance.date_created = validated_data.get('date_created', instance.date_created)
        instance.date_modified = validated_data.get('date_modified', instance.date_modified)
        instance.save()
        return instance