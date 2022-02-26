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
import axios from "axios";
// const PublicFolder = "http://localhost:5000/images/";

const Sidebar = ({ recipes }) => {
	const [categories, setCategories] = useState([]);
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get("/categories")
			.then((res) => {
				setCategories(res.data);
			})
			.catch((err) => {
				console.log(err);
			});

		axios
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
											? "http://localhost:5000/api/image/" + user.profilePicture
											: "http://localhost:5000/api/image/NoImage.png"
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
