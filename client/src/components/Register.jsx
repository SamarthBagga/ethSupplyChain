import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto my-10 p-6 bg-cyan-100 text-center border-4 border-slate-800">
        <h1 className="text-2xl font-bold mb-4 text-black">Register</h1>
        <form onSubmit={registerUser} className="space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <br />

          <div className="flex relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={isVisible ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <button
              type="button"
              className="absolute right-2 top-3 text-blue-500 hover:text-blue-600"
              onClick={(event) => setIsVisible(!isVisible)}
            >
              {isVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <br />
          <input
            type="submit"
            value="Register"
            className="w-full bg-teal-500 text-gray-100 py-2 rounded-md cursor-pointer hover:bg-teal-600"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
