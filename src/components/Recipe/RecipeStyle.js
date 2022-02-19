import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 500px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	border-radius: 10px;
	margin: 0px 25px 40px 25px;
	padding: 10px;
	transition: 0.1s ease;
	&:hover {
		transform: scale(1.05);
	}
`;
export const Img = styled.img`
	width: 385px;
	height: 280px;
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

	cursor: pointer;
`;
export const RecipeDate = styled.span`
	font-family: "Lato", sans-serif;
	font-style: italic;
	font-size: 13px;
	font-weight: 400;
	color: #999999;
	margin-top: 15px;
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
