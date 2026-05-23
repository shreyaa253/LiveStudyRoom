from django.db import models
from django.contrib.auth.models import User

class Seat(models.Model):
    seat_number = models.CharField(max_length=10)
    is_available = models.BooleanField(default=True)
    booked_by = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.seat_number
        
class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    seat_number = models.CharField(max_length=10)
    booking_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.seat_number}"

    
# from django.db import models
# from django.contrib.auth.models import User
# class Seat(models.Model):
#     seat_number = models.CharField(max_length=10)
#     is_available = models.BooleanField(default=True)
#     booked_by = models.CharField(max_length=100, blank=True, null=True)

#     def __str__(self):
#         return self.seat_number

# class Booking(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     seat_number = models.CharField(max_length=10)
#     booking_time = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"{self.user.username} - {self.seat_number}"