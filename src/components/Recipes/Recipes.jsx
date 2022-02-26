import React from "react";
import { Container } from "./RecipesStyle";
import Recipe from "../Recipe/Recipe";
import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
	return (
		<Container>
			{recipes.map((recipe, index) => (
				<Link key={index} to={`/recipes/${recipe._id}`}>
					<Recipe recipe={recipe} />
				</Link>
			))}
		</Container>
	);
};

export default Recipes;
