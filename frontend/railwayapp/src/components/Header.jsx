import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Railway Reservation System</Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
          <li><Link to="/login" className="hover:text-blue-200">Login</Link></li>
          <li><Link to="/register" className="hover:text-blue-200">Register</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header