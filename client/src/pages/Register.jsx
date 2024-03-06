import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import truck from '../assets/truck.webp';
import { useToast } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const toast = useToast();

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
      toast({
          title: 'Account created successfully',
          status: 'success',
          position: 'bottom-right',
          duration: 4000,
        })
      navigate('/login');
    } else {
      toast({
        title: 'Error occurred while creating account',
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
        <img src={truck} alt="Register Image" className="w-full h-full object-cover opacity-90" />
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
          <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <Checkbox isChecked={showPassword} onChange={handleShowPassword}>
              Show Password
          </Checkbox>
          
          <input
              type="submit"
              value="Register"
              className="w-full bg-blue-500 text-white py-2 rounded-md cursor-pointer hover:bg-teal-600"
          />
          <div className='flex'>
            Already have an account?
            <Link to='/login' className='ml-2 underline' >Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
