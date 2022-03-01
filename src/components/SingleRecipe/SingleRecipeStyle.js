import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	flex: 9;
`;
export const Wrapper = styled.div`
	width: 650px;
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	${tablet({ margin: "20px auto" })}
	${mobile({ width: "300px", margin: "20px auto" })}
`;
export const Img = styled.img`
	width: 100%;
	height: 400px;
	border-radius: 5px;
	object-fit: cover;
	margin: 0 auto;
	${mobile({ width: "300px", height: "100%" })}
`;
export const Title = styled.span`
	margin: 10px;
	font-size: 28px;
`;
export const Edit = styled.div`
	float: right;
	font-size: 16px;
`;
export const Info = styled.div`
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	font-size: 16px;
	color: #be9656;
`;
export const Author = styled.b`
	margin-left: 5px;
`;
export const Desc = styled.p`
	color: #666;
	font-size: 18px;
	line-height: 25px;
`;

export const Input = styled.input`
	font-size: 30px;
	padding: 20px;
	width: 750px;
	margin: 10px 0;
	${tablet({ width: "650px" })}
`;

export const Textarea = styled.textarea`
	width: 750px;
	padding: 20px;
	height: 500px;
	font-family: inherit;
	font-size: 20px;
	${tablet({ width: "650px", height: "300px" })}
`;
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const UpdateButton = styled.button`
	align-self: flex-end;
	width: 80px;
	padding: 7px;
	margin-top: 10px;
	background: green;
	color: white;
	border: none;
	border-radius: 5px;
`;
export const CommentInput = styled.input`
	color: gray;
	margin-top: 10px;
	margin-bottom: 10px;
	height: 30px;
	border: none;
	border-bottom: 1px solid lightgray;

	&:focus {
		outline: none;
		border-bottom: 2px solid black;
	}
`;

export const CommentButton = styled.button`
	align-self: flex-end;
	width: 80px;
	padding: 7px;
	background: blue;
	color: white;
	border: none;
	border-radius: 5px;
`;

export const UserImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 15px;
`;

export const CommentContainer = styled.div`
	display: flex;
	margin: 5px 0;
	align-items: center;
`;

export const RecipeCategories = styled.div`
	margin-bottom: 10px;
`;
export const Category = styled.span`
	background-color: lightgray;
	border-radius: 10px;
	color: black;
	padding: 5px;
	margin-right: 5px;
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
