import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	width: 100%;
	height: 50px;
	background-color: white;
	position: sticky;
	top: 0;
	display: flex;
	align-items: center;
	font-family: "Lato", sans-serif;
	z-index: 4;
`;

export const Left = styled.div`
	flex: 3;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Center = styled.div`
	flex: 6;
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
`;
export const Right = styled.div`
	flex: 3;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const NavList = styled.ul`
	display: flex;
	justify-content: center;
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const NavListItem = styled.li`
	margin-right: 20px;
	font-size: 18px;
	font-weight: 300;
	cursor: pointer;

	&:hover {
		color: yellow;
	}
`;

export const NavLink = styled(Link)`
	margin-right: 20px;
	font-size: 20px;
	font-weight: 400;
	cursor: pointer;
	color: black;

	&:hover {
		color: gray;
	}
`;

export const Img = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 15px;
	cursor: pointer;
`;

export const Logo = styled.h1``;

export const Username = styled.span``;

export const UserContainer = styled.div`
	display: flex;
	align-items: center;
`;
