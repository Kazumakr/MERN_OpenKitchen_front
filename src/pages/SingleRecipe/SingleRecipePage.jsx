import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import SingleRecipe from "../../components/SingleRecipe/SingleRecipe";

import { Container } from "./SingleRecipePageStyle";
const SingleRecipePage = () => {
	return (
		<Container>
			<SingleRecipe />
			<Sidebar />
		</Container>
	);
};

export default SingleRecipePage;
