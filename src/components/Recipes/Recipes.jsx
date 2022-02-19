import React from "react";
import { Container } from "./RecipesStyle";
import Recipe from "../Recipe/Recipe";
import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
	return (
		<Container>
			{recipes.map((recipe) => (
				<Link to={`recipes/${recipe._id}`}>
					<Recipe recipe={recipe} />
				</Link>
			))}
			{/* <Recipe img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
			<Recipe img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
			<Recipe img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
			<Recipe img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" /> */}
		</Container>
	);
};

export default Recipes;
