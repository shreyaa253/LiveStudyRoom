import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

/* GET ALL SEATS */

export const getSeats = () => API.get("seats/");


/* BOOK SEAT */

export const bookSeat = (seatId, name) =>
  API.post(`book/${seatId}/`, { name });
// export const bookSeat = (seatId, data) =>
//   API.post(`book/${seatId}/`, data);

/* CANCEL BOOKING */

export const cancelSeat = (seatId) =>
  API.post(`cancel/${seatId}/`);


/* MY BOOKINGS */

export const getMyBookings = async () => {
  const res = await API.get("my-bookings/");
  return res.data;
};