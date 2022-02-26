import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
`;
export const Wrapper = styled.div`
	width: 50vw;
	padding: 20px;
`;
export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const UpdateTitle = styled.div`
	font-size: 30px;
	margin-bottom: 20px;
`;
export const DeleteTitle = styled.div`
	color: red;
	font-size: 12px;
	cursor: pointer;
`;
export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;
export const Label = styled.label`
	font-size: 20px;
	margin-top: 20px;
`;
export const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
	margin-bottom: 10px;
`;
export const Input = styled.input`
	color: gray;
	margin-top: 10px;
	margin-bottom: 10px;
	height: 30px;
	border: none;
	border-bottom: 1px solid lightgray;
`;
export const SettingInput = styled.input`
	display: none;
`;
export const Img = styled.img`
	height: 70px;
	width: 70px;
	border-radius: 20px;
	object-fit: cover;
`;
export const UpdateButton = styled.button`
	width: 150px;
	border: none;
	border-radius: 10px;
	color: white;
	background-color: teal;
	padding: 10px;
	margin-top: 20px;
	margin-right: 10px;
	cursor: pointer;
`;
export const DeleteButton = styled.button`
	width: 150px;
	border: none;
	border-radius: 10px;
	color: white;
	background-color: red;
	padding: 10px;
	margin-top: 20px;
	cursor: pointer;
`;

export const ButtonContainer = styled.div`
	display: flex;
	align-self: flex-end;
`;
