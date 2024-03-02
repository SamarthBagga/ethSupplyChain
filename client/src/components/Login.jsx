import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import scm from '../assets/scm.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.status === 'ok') {
      alert('Logged in successfully');
      navigate('/home');
    } else {
      alert(data.error);
    }
  }

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div className="w-3/4 hidden md:flex bg-gray-100 justify-center items-center">
        <img src={scm} alt="Login Image" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/3 px-8 space-y-8 bg-white">
        <h1 className="text-5xl font-bold text-gray-800 text-center">Login</h1>
        <form onSubmit={loginUser} className="space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <div className="flex relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={isVisible ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute right-2 top-3 text-blue-500 hover:text-blue-600"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <input
            type="submit"
            value="Login"
            className="w-full bg-blue-500 text-white py-2 rounded-md cursor-pointer hover:bg-blue-600"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
