import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Railway Reservation System</h1>
      <p className="mb-8">Book your train tickets with ease and convenience.</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">Register</Link>
      </div>
    </div>
  );
}

export default Home;