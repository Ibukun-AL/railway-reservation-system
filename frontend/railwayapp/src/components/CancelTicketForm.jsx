import { useState } from 'react';
import axios from 'axios';

function CancelTicketForm() {
  const [bookingNumber, setBookingNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/tickets/${bookingNumber}`);
      alert('Ticket cancelled successfully');
      setBookingNumber('');
    } catch (error) {
      console.error('Error cancelling ticket:', error);
      alert('Failed to cancel ticket');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Booking Number"
        value={bookingNumber}
        onChange={(e) => setBookingNumber(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-red-500 text-white p-2 rounded">
        Cancel Ticket
      </button>
    </form>
  );
}

export default CancelTicketForm;