from django.urls import path
from .views import product_list, product_detail, ProductAPIView, ProductDetailAPIView

urlpatterns = [
    # path('product/', product_list),
    path('product/', ProductAPIView.as_view()),
    # path('product/detail/<int:primary_key>', product_detail),
    path('product/detail/<int:id>', ProductDetailAPIView.as_view()),
]
