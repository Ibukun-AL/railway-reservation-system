import { useState } from 'react';
import axios from 'axios';

function TicketStatus() {
  const [bookingNumber, setBookingNumber] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/tickets/${bookingNumber}/status`);
      setStatus(response.data);
    } catch (error) {
      console.error('Error fetching ticket status:', error);
      setStatus(null);
      alert('Failed to fetch ticket status');
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
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Check Status
        </button>
      </form>
      {status && (
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Ticket Status</h3>
          <p>Status: {status.status}</p>
          <p>Departure Time: {new Date(status.departureTime).toLocaleString()}</p>
          <p>Platform: {status.platform}</p>
        </div>
      )}
    </div>
  );
}

export default TicketStatus;