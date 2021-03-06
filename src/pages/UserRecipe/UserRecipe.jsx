import React, { useState, useEffect } from "react";
import Recipes from "../../components/Recipes/Recipes";
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
import { axiosInstance } from "../../config";
const UserRecipe = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [recipes, setRecipes] = useState([]);
	const [user, setUser] = useState([]);

	useEffect(() => {
		axiosInstance
			.get("/recipes/ByUserId/" + path)
			.then((res) => {
				setRecipes(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		axiosInstance
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
								? "https://mern-openkitchen.herokuapp.com/api/image/" +
								  user.profilePicture
								: "https://mern-openkitchen.herokuapp.com/api/image/NoImage.png"
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
