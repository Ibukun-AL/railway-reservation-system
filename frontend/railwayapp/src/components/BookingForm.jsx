import  { useState } from 'react';
import axios from 'axios';

function BookingForm() {
  const [booking, setBooking] = useState({
    departure: '',
    destination: '',
    date: '',
    seatType: '',
    passengerName: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/tickets', booking);
      console.log('Ticket booked:', response.data);
      // Handle successful booking (e.g., show success message, reset form)
    } catch (error) {
      console.error('Error booking ticket:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Departure"
        value={booking.departure}
        onChange={(e) => setBooking({ ...booking, departure: e.target.value })}
        className="w-full p-2 border rounded"
      />
      {/* Add more form fields */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Book Ticket
      </button>
    </form>
  );
}

export default BookingForm;