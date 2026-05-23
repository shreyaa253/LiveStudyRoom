from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Booking

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

# class BookingSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Booking
#         # fields = "__all__"
#         fields = ["id", "seat_number", "booking_time"]
#         read_only_fields = ["id", "booking_time"]

from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):

    username = serializers.CharField(source="user.username")

    class Meta:
        model = Booking
        fields = [
            "id",
            "username",
            "seat_number",
            "booking_time"
        ]