import { useState } from 'react';
import axios from 'axios';

function SearchBooking() {
  const [bookingNumber, setBookingNumber] = useState('');
  const [ticket, setTicket] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/tickets/${bookingNumber}`);
      setTicket(response.data);
    } catch (error) {
      console.error('Error searching ticket:', error);
      setTicket(null);
      alert('Ticket not found');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 mb-4">
        <input
          type="text"
          placeholder="Booking Number"
          value={bookingNumber}
          onChange={(e) => setBookingNumber(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search Ticket
        </button>
      </form>
      {ticket && (
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Ticket Details</h3>
          <p>Booking Number: {ticket.bookingNumber}</p>
          <p>Departure: {ticket.departure}</p>
          <p>Destination: {ticket.destination}</p>
          <p>Date: {new Date(ticket.departureTime).toLocaleString()}</p>
          <p>Seat Type: {ticket.seatType}</p>
          <p>Passenger Name: {ticket.passengerName}</p>
        </div>
      )}
    </div>
  );
}

export default SearchBooking;