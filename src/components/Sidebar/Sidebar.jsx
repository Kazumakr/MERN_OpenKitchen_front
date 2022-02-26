import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
	Container,
	SidebarItem,
	SidebarTitle,
	SidebarList,
	SidebarListItem,
	Img,
	Username,
	CategoryLink,
} from "./SidebarStyle";
import axios from "axios";
// const PublicFolder = "http://localhost:5000/images/";

const Sidebar = () => {
	const [categories, setCategories] = useState([]);
	const [users, setUsers] = useState([]);
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
	return (
		<Container>
			<SidebarItem>
				<SidebarTitle>CATEGORIES</SidebarTitle>
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
								to={`/?user=${user.username}`}
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
