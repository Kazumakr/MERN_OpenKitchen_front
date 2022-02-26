import styled from "styled-components";

export const Container = styled.div`
	flex: 9;
`;
export const Wrapper = styled.div`
	width: 800px;
	/* padding: 20px; */
	margin: 20px auto;
	/* padding-left: 100px; */
	display: flex;
	flex-direction: column;
`;
export const Img = styled.img`
	width: 700px;
	height: 400px;
	border-radius: 5px;
	object-fit: cover;
	margin: 0 auto;
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
	/* justify-content: space-between; */
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
	/* border: 1px solid blue; */
	padding: 20px;
	width: 750px;
	margin: 10px 0;
`;

export const Textarea = styled.textarea`
	width: 750px;
	padding: 20px;
	height: 500px;
	font-family: inherit;
	font-size: 20px;
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
	/* margin-left: 150px; */
	margin: 10px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	/* align-items: flex-start; */
`;
export const Checkbox = styled.input`
	margin-left: 10px;
`;
