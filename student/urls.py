from django.urls import path
from student.views import *


urlpatterns = [
    path('',Index.as_view(), name = "index"),
]