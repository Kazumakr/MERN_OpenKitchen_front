import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 270px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	border-radius: 10px;
	margin: 0px 25px 40px 25px;
	padding: 10px;
	transition: 0.1s ease;
	&:hover {
		transform: scale(1.05);
	}
	${mobile({ margin: "0px 10px 40px 10px" })}
`;
export const Img = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
	border-radius: 7px;
`;
export const RecipeInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const RecipeCategories = styled.div``;
export const RecipeCategory = styled.span`
	font-family: "Lato", sans-serif;
	font-weight: 400;
	font-size: 11px;
	color: #be9656;
	line-height: 19px;
	margin-top: 15px;
	margin-right: 10px;
	cursor: pointer;
`;
export const RecipeTitle = styled.span`
	font-family: "Lato", sans-serif;
	font-size: 24px;
	font-weight: 900;
	color: black;
	margin: 10px;
	cursor: pointer;
`;
export const RecipeDate = styled.span`
	font-family: "Lato", sans-serif;
	font-style: italic;
	font-size: 13px;
	font-weight: 400;
	color: #999999;
	margin-top: 10px;
`;
export const RecipeDesc = styled.p`
	font-family: "Lato", sans-serif;
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	color: #444444;
	margin-top: 15px;
	padding: 0px 20px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
`;

export const Category = styled.span`
	background-color: lightgray;
	border-radius: 10px;
	color: black;
	padding: 5px;
	margin-right: 5px;
`;
