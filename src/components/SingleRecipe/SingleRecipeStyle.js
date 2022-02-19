import styled from "styled-components";

export const Container = styled.div`
	flex: 9;
`;
export const Wrapper = styled.div`
	padding: 20px;
	padding-right: 0;
`;
export const Img = styled.img`
	width: 100%;
	height: 300px;
	border-radius: 5px;
	object-fit: cover;
`;
export const Title = styled.span`
	text-align: center;
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
	justify-content: space-between;
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
	border: 1px solid blue;
	padding: 20px;
	width: 70vw;
`;

export const Textarea = styled.textarea`
	width: 70vw;
	height: 100vh;
	font-family: inherit;
	font-size: 20px;
`;
