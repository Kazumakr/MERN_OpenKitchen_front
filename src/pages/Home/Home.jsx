import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Recipes from "../../components/Recipes/Recipes";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import { Container } from "./HomeStyle";
import { useLocation } from "react-router-dom";

const Home = () => {
	const [recipes, setRecipes] = useState([]);
	const { search } = useLocation();

	useEffect(() => {
		axios
			.get("/recipes" + search)
			.then((res) => {
				setRecipes(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [search]);
	return (
		<>
			<Hero />
			<Container>
				<Recipes recipes={recipes} />
				<Sidebar recipes={recipes} />
			</Container>
		</>
	);
};

export default Home;
