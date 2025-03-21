from django.urls import path
from student.views import *


urlpatterns = [
    path('', Index.as_view(), name='index'),
    path('discussions/', GetDiscussion.as_view(), name='get_discussions'),
    path('discussions/create/', CreateDiscussion.as_view(), name='create_discussion'),
    path('discussions/update/<int:pk>/', UpdateDiscussion.as_view(), name='update_discussion'),
    path('discussions/delete/<int:pk>/', DeleteDiscussion.as_view(), name='delete_discussion'),
]