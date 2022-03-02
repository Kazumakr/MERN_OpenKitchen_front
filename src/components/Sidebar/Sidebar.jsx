import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
	Container,
	SidebarItem,
	SidebarTitle,
	SidebarList,
	SidebarListItem,
	Img,
	Username,
	CategoryLink,
	Input,
} from "./SidebarStyle";
import { axiosInstance } from "../../config";

const Sidebar = () => {
	const [categories, setCategories] = useState([]);
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		axiosInstance
			.get("/categories")
			.then((res) => {
				setCategories(res.data);
			})
			.catch((err) => {
				console.log(err);
			});

		axiosInstance
			.get("/users")
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleChange = (event) => {
		navigate(`/?search=${event.target.value}`);
	};
	return (
		<Container>
			<SidebarItem>
				<SidebarTitle>Search Recipes</SidebarTitle>
				<Input
					type="text"
					placeholder="&#xF002; Title or Description"
					onChange={handleChange}
				/>
			</SidebarItem>
			<SidebarItem>
				<SidebarTitle>Categories</SidebarTitle>
				<SidebarList>
					{categories.map((category, index) => (
						<SidebarListItem key={index}>
							<CategoryLink to={`/?category=${category.name}`}>
								{category.name}
							</CategoryLink>
						</SidebarListItem>
					))}
				</SidebarList>
			</SidebarItem>
			<SidebarItem>
				<SidebarTitle>Users</SidebarTitle>
				<SidebarList>
					{users.map((user, index) => (
						<SidebarListItem key={index}>
							<Link
								to={`/userrecipe/${user._id}`}
								style={{ display: "flex", alignItems: "center" }}
							>
								<Img
									src={
										user.profilePicture
											? "https://mern-openkitchen.herokuapp.com/api/image/" +
											  user.profilePicture
											: "https://mern-openkitchen.herokuapp.com/api/image/NoImage.png"
									}
								/>
								<Username>{user.username}</Username>
							</Link>
						</SidebarListItem>
					))}
				</SidebarList>
			</SidebarItem>
		</Container>
	);
};

export default Sidebar;
