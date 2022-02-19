import React, { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import { Container, Title, Form, Label, Input, Button } from "./LoginStyle";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
	const userRef = useRef();
	const passwordRef = useRef();
	const { dispatch, isFetching } = useContext(Context);

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch({ type: "LOGIN_START" });
		await axios
			.post("/auth/login", {
				username: userRef.current.value,
				password: passwordRef.current.value,
			})
			.then((res) => {
				dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: "LOGIN_FAILURE" });
			});
	};
	return (
		<Container>
			<Title>Login</Title>
			<Form onSubmit={handleSubmit}>
				<Label>Username</Label>
				<Input type="text" placeholder="Username" ref={userRef} />
				<Label>Password</Label>
				<Input type="password" placeholder="Password" ref={passwordRef} />
				<Button type="submit" disabled={isFetching}>
					Login
				</Button>
			</Form>
			<Link to="/register">
				<Button>SignUp</Button>
			</Link>
		</Container>
	);
};

export default Login;
