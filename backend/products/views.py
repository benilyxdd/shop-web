from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .models import Product
from .serializers import ProductSerializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


@api_view(['GET', 'POST'])
def product_list(request):
    if request.method == "GET":
        products = Product.objects.all()
        serializer = ProductSerializers(products, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        # data = JSONParser().parse(request)
        serializer = ProductSerializers(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def product_detail(request, primary_key):
    try:
        product = Product.objects.get(pk=primary_key)
    except Product.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = ProductSerializers(product)
        return Response(serializer.data)

    elif request.method == "POST":
        # data = JSONParser().parse(request)
        serializer = ProductSerializers(product, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
