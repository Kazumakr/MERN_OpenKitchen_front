import React, { useState } from "react";
import { Container, Title, Form, Label, Input, Button } from "./RegisterStyle";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError(false);

		await axios
			.post("/auth/register", { username, email, password })
			.then((res) => {
				res.data && window.location.replace("/login");
			})
			.catch((err) => {
				setError(true);
			});
	};

	return (
		<Container>
			<Title>SignUp</Title>
			{error && (
				<span style={{ color: "red", marginTop: "10px" }}>
					Something went wrong
				</span>
			)}
			<Form onSubmit={handleSubmit}>
				<Label>Username</Label>
				<Input
					type="text"
					placeholder="Username"
					onChange={(event) => setUsername(event.target.value)}
				/>
				<Label>Email</Label>
				<Input
					type="text"
					placeholder="Email"
					onChange={(event) => setEmail(event.target.value)}
				/>
				<Label>Password</Label>
				<Input
					type="password"
					placeholder="Password"
					onChange={(event) => setPassword(event.target.value)}
				/>
				<Button type="submit">SignUp</Button>
				<Link to="/login">
					<Button>Login</Button>
				</Link>
			</Form>
		</Container>
	);
};

export default Register;
