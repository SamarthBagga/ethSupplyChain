import { useState } from 'react'

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


  async function loginUser(event) {
    event.preventDefault()

		const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

    const data = await response.json()
    console.log(data)
}

  return (
		<div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
			<h1 className="flex justify-center text-2xl font-bold mb-4">Login</h1>
			<form onSubmit={loginUser} className="space-y-4">
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
					className="w-full px-3 py-2 border border-gray-300 rounded-md"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
					className="w-full px-3 py-2 border border-gray-300 rounded-md"
				/>
				<br />
				<input
				    type="submit"
				    value="Login"
				    className="w-full bg-blue-500 text-white py-2 rounded-md cursor-pointer hover:bg-blue-600"
				/>
			</form>
		</div>
	)
}

export default Login