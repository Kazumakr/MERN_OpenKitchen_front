import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	height: calc(100vh - 10px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("https://images.unsplash.com/photo-1570610183363-c7531f3eaa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80");
	background-size: cover;
`;
export const Title = styled.span`
	font-size: 50px;
	color: white;
	margin-top: 20px;
	${tablet({ fontSize: "32px" })}
`;
export const Form = styled.form`
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	width: 400px;
	${tablet({ width: "300px", height: "400px" })}
	${mobile({ width: "250px", height: "400px" })}
`;
export const Label = styled.label`
	margin: 10px 0;
	color: white;
`;
export const Input = styled.input`
	padding: 10px;
	background-color: white;
	border: none;
	border-radius: 10px;
	${tablet({ padding: "7px" })}
`;

export const Textarea = styled.textarea`
	height: 10vh;
	padding: 10px;
	border-radius: 10px;
	${tablet({ padding: "7px", height: "100px" })}
`;
export const Button = styled.button`
	margin-top: 20px;
	cursor: pointer;
	background-color: lightcoral;
	color: white;
	padding: 10px;
	border: none;
	border-radius: 10px;
	text-align: center;
	width: 100%;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 10px;
	width: 500px;
	height: 400px;
`;

export const Message = styled.h2`
	color: green;
	font-size: 34px;
`;
