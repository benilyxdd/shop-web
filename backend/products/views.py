from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .models import Product
from .serializers import ProductSerializers

# Create your views here.


def product_list(request):
    if request.method == "GET":
        products = Product.objects.all()
        serializer = ProductSerializers(products, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = ProductSerializers(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


def product_detail(request, primary_key):
    try:
        product = Product.objects.get(pk=primary_key)
    except Product.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == "GET":
        serializer = ProductSerializers(product)
        return JsonResponse(serializer.data)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = ProductSerializers(product, data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == "DELETE":
        product.delete()
        return HttpResponse(status=204)
