import SearchBooking from '../components/SearchBooking';
import TicketStatus from '../components/TicketStatus';

function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <SearchBooking />
      <TicketStatus />
    </div>
  );
}

export default AdminDashboard;