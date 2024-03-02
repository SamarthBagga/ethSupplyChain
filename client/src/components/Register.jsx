import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import scm from '../assets/scm.png';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.status === 'ok') {
      alert('Registered successfully');
      navigate('/metamask');
    } else {
      alert(data.error);
    }
  }

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div className="w-3/4 hidden md:flex bg-gray-100 justify-center items-center">
        <img src={scm} alt="Register Image" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/3 px-8 space-y-8 bg-white">
        <h1 className="text-5xl font-bold text-black text-center">Register</h1>
        <form onSubmit={registerUser} className="space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <div className="flex relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={isVisible ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
            <button
              type="button"
              className="absolute right-2 top-3 text-teal-500 hover:text-teal-600"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <input
            type="submit"
            value="Register"
            className="w-full bg-teal-500 text-white py-2 rounded-md cursor-pointer hover:bg-teal-600"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
