import React, { useState, useEffect } from "react";
import Recipes from "../../components/Recipes/Recipes";
import axios from "axios";
import {
	Container,
	UserContainer,
	UserInfo,
	Img,
	Title,
	Desc,
	Hr,
} from "./UserRecipeStyle";
import { useLocation } from "react-router-dom";
const UserRecipe = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [recipes, setRecipes] = useState([]);
	const [user, setUser] = useState([]);

	useEffect(() => {
		axios
			.get("/recipes/ByUserId/" + path)
			.then((res) => {
				setRecipes(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		axios
			.get("/users/" + path)
			.then((res) => {
				setUser(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [path]);

	return (
		<>
			<Container>
				<UserContainer>
					<Img
						src={
							user?.profilePicture
								? "http://localhost:5000/api/image/" + user.profilePicture
								: "http://localhost:5000/api/image/NoImage.png"
						}
						alt=""
					/>
					<UserInfo>
						<Title>{user.username}</Title>
						<Desc>{user.bio}</Desc>
					</UserInfo>
				</UserContainer>
				<Hr />
				<Recipes recipes={recipes} />
			</Container>
		</>
	);
};

export default UserRecipe;
