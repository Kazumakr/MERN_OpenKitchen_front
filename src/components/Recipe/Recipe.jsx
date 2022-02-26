import React from "react";
import { Link } from "react-router-dom";
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
	// const publicFolder = "http://localhost:5000/images/";
	return (
		<Container>
			<Img
				src={
					recipe.photo
						? "http://localhost:5000/api/image/" + recipe.photo
						: "http://localhost:5000/api/image/NoFoodImage.jpg"
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
