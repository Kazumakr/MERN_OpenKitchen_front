import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../../responsive";

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
	${mobile({ overflow: "hidden" })}
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
	${tablet({ flex: "8" })}
	${mobile({ display: "none" })}
`;
export const Right = styled.div`
	flex: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	${tablet({ flex: "1" })}
	${mobile({ flex: "2" })}
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
	font-size: 18px;
	font-weight: 400;
	cursor: pointer;
	color: black;
	display: flex;
	align-items: center;

	&:hover {
		color: gray;
	}
	${tablet({ fontSize: "14px" })}
`;

export const Img = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 10px;
	cursor: pointer;
	${mobile({ marginRight: "0" })}
`;

export const Logo = styled.span`
	font-size: 28px;
	font-weight: bold;
	${tablet({ fontSize: "20px" })}
`;

export const Username = styled.span`
	${tablet({ display: "none" })}
`;

export const UserContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const HamburgerContainer = styled.div`
	width: 2rem;
	height: 2rem;
	display: none;
	justify-content: space-around;
	flex-flow: column nowrap;
	z-index: 20;

	${mobile({
		display: "flex",
		justifyContent: "space-around",
		flexFlow: "column nowrap",
	})}

	div {
		width: 2rem;
		height: 0.25rem;
		background-color: black;
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}
		&:nth-child(2) {
			transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

export const MobileNavList = styled.ul`
	display: none;
	flex-flow: column nowrap;
	justify-content: space-around;
	align-items: center;
	margin: 0;
	padding: 0;
	background-color: white;
	border-radius: 10px;
	position: fixed;
	transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
	top: 9%;
	right: 0;
	height: 40vh;
	width: 120px;
	transition: transform 0.3s ease-in-out;

	${mobile({
		display: "flex",
	})}
`;
