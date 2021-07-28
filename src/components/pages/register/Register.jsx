import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import "./register.css"

const URL = "http://localhost:3001"

export default function Register() {

	const [username, setUserName] = useState("")
	const[email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault()
		const result = await axios.post(`${URL}/api/auth/register`, {
			username,
			email,
			password
		})
		console.log(result)
	}
	
    return (
			<div className="register">
				<span className="registerTitle">Register</span>
				<form className="registerForm" onSubmit={handleSubmit}>
					<label>Username</label>
					<input
						className="registerInput"
						type="text"
						placeholder="Enter your username..."
						onChange={(e) => setUserName(e.target.value)}
						autoComplete="true"
						autoFocus
					/>
					<label>Email</label>
					<input
						className="registerInput"
						type="text"
						placeholder="Enter your email..."
						onChange={(e) => setEmail(e.target.email)}
						autoComplete="true"
					/>
					<label>Password</label>
					<input
						className="registerInput"
						type="password"
						placeholder="Enter your password..."
						onChange={(e) => setPassword(e.target.email)}
						autoComplete="true"
					/>
					<button className="registerBtn" type="submit">
						Register
					</button>
				</form>
				<button className="registerLoginBtn">
					<Link className="link" to="/login">
						Login
					</Link>
				</button>
			</div>
		);
}
