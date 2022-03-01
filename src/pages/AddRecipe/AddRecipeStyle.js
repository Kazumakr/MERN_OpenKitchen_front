import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
	padding-top: 50px;
	display: flex;
	justify-content: center;
`;

export const PageTitle = styled.h1`
	${mobile({ fontSize: "24px" })}
`;
export const Img = styled.img`
	width: 100%;
	border-radius: 10px;
	object-fit: cover;
`;
export const Form = styled.form`
	width: 650px;
	${mobile({ width: "280px" })}
`;
export const FormGroup = styled.div`
	margin: 10px 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
export const FormGroupCheck = styled.div`
	margin: 10px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
`;
export const Checkbox = styled.input`
	margin-left: 10px;
`;

export const CategoryName = styled.span`
	${mobile({ fontSize: "12px" })}
`;

export const Label = styled.label`
	font-size: 24px;
`;
export const Input = styled.input`
	font-size: 30px;
	padding: 15px;
	width: 100%;
	${mobile({ padding: "7px" })}
`;
export const Textarea = styled.textarea`
	width: 100%;
	height: 30vh;
	padding: 15px;
	font-family: inherit;
	font-size: 20px;
`;
export const Button = styled.button`
	margin-top: 10px;
	color: white;
	background-color: teal;
	padding: 10px;
	border: none;
	border-radius: 10px;
	font-size: 16px;
	cursor: pointer;
	align-self: flex-end;
`;
