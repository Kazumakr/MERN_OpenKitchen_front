import React from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Img,
	RecipeInfo,
	RecipeCategories,
	RecipeCategory,
	RecipeTitle,
	RecipeDate,
	RecipeDesc,
} from "./RecipeStyle";

import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";

const Recipe = ({ recipe }) => {
	const publicFolder = "http://localhost:5000/images/";
	return (
		<Container>
			<Img
				src={
					recipe.photo
						? publicFolder + recipe.photo
						: publicFolder + "NoFoodImage.jpg"
				}
			/>
			<RecipeInfo>
				<Link
					style={{ color: "black", margin: "10px" }}
					to={`/recipes/${recipe._id}`}
				>
					<RecipeTitle>{recipe.title}</RecipeTitle>
				</Link>
				<RecipeCategories>
					{recipe.categories.map((category, index) => (
						<span>{category}</span>
						// <Link to={`/recipes?category=${category}`}>
						// 	<RecipeCategory>{category}</RecipeCategory>
						// </Link>
					))}
				</RecipeCategories>
				{/* <div>
					{recipe.categories.map((c) => (
						<span>{c}</span>
					))}
				</div> */}

				<span style={{ color: "black" }}>Author: {recipe.username}</span>
				<RecipeDate>{new Date(recipe.createdAt).toDateString()}</RecipeDate>
				<div style={{ color: "black" }}>
					<FaRegThumbsUp />
					{recipe.likes?.length}
				</div>
			</RecipeInfo>
			<RecipeDesc>{recipe.description}</RecipeDesc>
		</Container>
	);
};

export default Recipe;
