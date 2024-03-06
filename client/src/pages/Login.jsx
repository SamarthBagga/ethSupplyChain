import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import truck from '../assets/truck.webp';
import { useToast } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const toast = useToast();

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
      toast({
        title: 'Logged in successfully',
        position: 'bottom-right',
        status: 'success',
        duration: 4000,
      })
      navigate('/home');
    } else {
      toast({
        title: 'User not found or password incorrect',
        status: 'error',
        position: 'bottom-right',
        duration: 4000,
      })
    }
  }

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex min-h-screen">
      <div className="w-3/4 hidden md:flex bg-gray-100 justify-center items-center">
        <img src={truck} alt="Login Image" className="w-full h-full object-cover opacity-90" />
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
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <Checkbox isChecked={showPassword} onChange={handleShowPassword}>
            Show Password
          </Checkbox>

          <input
            type="submit"
            value="Login"
            className="w-full bg-blue-500 text-white py-2 rounded-md cursor-pointer hover:bg-blue-600"
          />
          <div className='flex'>
            Don't have an account?
            <Link to='/register' className='ml-2 underline' >Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
