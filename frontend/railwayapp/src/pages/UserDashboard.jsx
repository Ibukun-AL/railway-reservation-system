import BookingForm from '../components/BookingForm'
import ViewTickets from '../components/ViewTicket';

function UserDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <BookingForm />
      <ViewTickets />
    </div>
  );
}

export default UserDashboard;