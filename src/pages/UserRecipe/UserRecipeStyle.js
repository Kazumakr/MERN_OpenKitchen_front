import styled from "styled-components";
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const UserContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 10px 0;
`;
export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 900px;
`;

export const Img = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 15px;
	cursor: pointer;
`;

export const Title = styled.h2``;
export const Desc = styled.p`
	width: 800px;
`;
export const Hr = styled.hr`
	width: 1000px;
	opacity: 0.5;
`;
