from django.urls import path
from account.api.views import registeration_view

app_name = "account"

urlpatterns = [
    path('register', registeration_view, name="register"),
]
