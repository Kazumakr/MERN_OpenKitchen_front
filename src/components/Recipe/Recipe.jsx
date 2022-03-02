import React from "react";
import {
	Container,
	Img,
	RecipeInfo,
	RecipeCategories,
	RecipeTitle,
	RecipeDate,
	RecipeDesc,
	Category,
} from "./RecipeStyle";

import { FaRegThumbsUp } from "react-icons/fa";

const Recipe = ({ recipe }) => {
	return (
		<Container>
			<Img
				src={
					recipe.photo
						? "https://mern-openkitchen.herokuapp.com/api/image/" + recipe.photo
						: "https://mern-openkitchen.herokuapp.com/api/image/NoFoodImage.jpg"
				}
			/>
			<RecipeInfo>
				<RecipeTitle>{recipe.title}</RecipeTitle>
				<RecipeCategories>
					{recipe.categories.map((category, index) => (
						<Category key={index}>{category}</Category>
					))}
				</RecipeCategories>
				<span style={{ color: "black", marginTop: "10px" }}>
					Author: {recipe.username}
				</span>
				<RecipeDate>{new Date(recipe.createdAt).toDateString()}</RecipeDate>
			</RecipeInfo>
			<RecipeDesc>{recipe.description}</RecipeDesc>
			<div style={{ color: "black", alignSelf: "self-start" }}>
				<FaRegThumbsUp />
				{recipe.likes?.length}
			</div>
		</Container>
	);
};

export default Recipe;
