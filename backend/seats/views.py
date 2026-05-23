from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from django.contrib.auth.models import User
from .models import Booking, Seat
from .serializers import BookingSerializer, RegisterSerializer
# from rest_framework.authtoken.models import Token
# from rest_framework.response import Response
# from django.contrib.auth import authenticate
# from rest_framework.decorators import api_view, authentication_classes, permission_classes
# from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated

# @api_view(['POST'])
# def login_view(request):
#     username = request.data.get('username')
#     password = request.data.get('password')

#     user = authenticate(username=username, password=password)
#     if user:
#         token, created = Token.objects.get_or_create(user=user)
#         return Response({"token": token.key, "username": user.username})
#     return Response({"error": "Invalid credentials"}, status=401)

def home(request):
    return render(request, 'home.html')

@api_view(['GET'])
def get_seats(request):
    seats = Seat.objects.all()
    data = []

    for seat in seats:
        data.append({
            "id": seat.id,
            "seat_number": seat.seat_number,
            "is_available": seat.is_available,
            "booked_by": seat.booked_by
        })

    return Response(data)

@api_view(['POST'])
def book_seat(request, seat_id):
    try:
        seat = Seat.objects.get(id=seat_id)

        if not seat.is_available:
            return Response({"error": "Seat already booked"}, status=400)

        name = request.data.get("name")

        if not name:
            return Response({"error": "Name is required"}, status=400)

        seat.is_available = False
        seat.booked_by = name
        seat.save()

        return Response({"message": "Seat booked successfully"})

    except Seat.DoesNotExist:
        return Response({"error": "Seat not found"}, status=404)

# @api_view(['POST'])
# def book_seat(request, seat_id):
#     try:
#         seat = Seat.objects.get(id=seat_id)

#         if not seat.is_available:
#             return Response({"error": "Seat already booked"}, status=400)

#         name = request.data.get("name")

#         if not name:
#             return Response({"error": "Name is required"}, status=400)

#         seat.is_available = False
#         seat.booked_by = name
#         seat.save()

#         return Response({"message": "Seat booked successfully"})

#     except Seat.DoesNotExist:
#         return Response({"error": "Seat not found"}, status=404)
    
# @api_view(['POST'])
# def book_seat(request, seat_id):
#     try:
#         seat = Seat.objects.get(id=seat_id)

#         if not seat.is_available:
#             return Response({"error": "Seat already booked"}, status=400)

#         user = request.user  # logged-in user
#         if not user.is_authenticated:
#             return Response({"error": "Login required"}, status=401)

#         # Optional: if your front-end sends name
#         name = request.data.get("name", user.username)

#         # Update Seat
#         seat.is_available = False
#         seat.booked_by = name
#         seat.save()

#         # ✅ Create Booking object
#         Booking.objects.create(
#             user=user,
#             seat_number=seat.seat_number
#         )

#         return Response({"message": "Seat booked successfully"})

#     except Seat.DoesNotExist:
#         return Response({"error": "Seat not found"}, status=404)
    

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


@api_view(['GET'])
def my_bookings(request):
    bookings = Booking.objects.all().order_by('-id')

    data = []
    for booking in bookings:
        data.append({
            "id": booking.id,
            "username": booking.user.username,
            "seat_number": booking.seat_number,
            "booking_time": booking.booking_time
        })

    return Response(data)

from rest_framework.decorators import api_view
from rest_framework.response import Response

    

# @api_view(['GET'])
# @authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
# def my_bookings(request):
#     bookings = Booking.objects.filter(user=request.user).order_by('-id')
#     data = []

#     for booking in bookings:
#         data.append({
#             "id": booking.id,
#             "seat_number": booking.seat_number,
#             "booking_time": booking.booking_time
#         })

#     return Response(data)