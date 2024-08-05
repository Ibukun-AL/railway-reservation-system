import { useState, useEffect } from 'react';
import axios from 'axios';

function ViewTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get('/api/tickets');
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Tickets</h2>
      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <ul className="space-y-4">
          {tickets.map((ticket) => (
            <li key={ticket.id} className="border p-4 rounded">
              <p>Booking Number: {ticket.bookingNumber}</p>
              <p>Departure: {ticket.departure}</p>
              <p>Destination: {ticket.destination}</p>
              <p>Date: {new Date(ticket.departureTime).toLocaleString()}</p>
              <p>Seat Type: {ticket.seatType}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewTickets;