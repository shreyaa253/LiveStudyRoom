from django.urls import path
from .views import *
from seats import views

urlpatterns = [
    # path('test/', test_api),
    path('seats/', get_seats),
    path('book/<int:seat_id>/', book_seat),
    path('register/', RegisterView.as_view(), name='register'),
    # path("my-bookings/", my_bookings),
    path("my-bookings/", views.my_bookings),
]

