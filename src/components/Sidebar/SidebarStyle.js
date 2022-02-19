import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	flex: 3;
	height: fit-content;
	margin: 20px;
	padding-bottom: 30px;
	background-color: #fdfbfb;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const SidebarItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const SidebarTitle = styled.span`
	margin: 10px;
	padding: 5px;
	width: 80%;
	border-bottom: solid 1px #a7a4a4;
	text-align: center;
	font-family: "Lato", sans-serif;
	font-size: 18px;
	line-height: 19px;
	color: #222222;
	font-weight: 600;
`;
export const SidebarList = styled.ul`
	list-style-type: none;
	margin-bottom: 30px;
`;
export const SidebarListItem = styled.li`
	display: inline-block;
	width: 50%;
	margin-top: 15px;

	cursor: pointer;
`;

export const Img = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 15px;
	cursor: pointer;
`;

export const Username = styled.span`
	color: black;
`;

export const CategoryLink = styled(Link)`
	background-color: lightgray;
	border-radius: 10px;
	color: black;
	padding: 5px;

	&:hover {
		opacity: 0.7;
	}
`;
