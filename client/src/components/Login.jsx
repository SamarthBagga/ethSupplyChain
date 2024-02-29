import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto my-10 p-6 bg-cyan-100 border-4 border-slate-800">
        <h1 className="text-2xl font-bold mb-4 text-black text-center">Login</h1>
        <form onSubmit={loginUser} className="space-y-4">
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
              className="absolute right-2 top-3 text-teal-500 hover:text-teal-600"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <br />
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
