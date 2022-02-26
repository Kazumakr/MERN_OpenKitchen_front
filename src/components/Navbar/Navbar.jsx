import React, { useContext } from "react";
import { Context } from "../../context/Context";
import {
	Container,
	Left,
	Center,
	Right,
	NavList,
	Img,
	Logo,
	NavLink,
	Username,
	UserContainer,
} from "./NavbarStyle";

const Navbar = () => {
	const { user, dispatch } = useContext(Context);

	// const PublicFolder = "http://localhost:5000/images/";

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};
	return (
		<Container>
			<Left>
				<NavLink to="/">
					<Logo>OPEN KITCHEN</Logo>
				</NavLink>
			</Left>
			<Center>
				<NavList>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/contact">Contact</NavLink>
					{user && (
						<>
							<NavLink to={`/?user=${user.username}`}>My Recipe</NavLink>
							<NavLink to="/addrecipe">Add Recipe</NavLink>
							<NavLink to="/" onClick={handleLogout}>
								Logout
							</NavLink>
						</>
					)}
				</NavList>
			</Center>
			<Right>
				{user ? (
					<UserContainer>
						<NavLink to="/settings">
							<Img
								src={
									user.profilePicture
										? "http://localhost:5000/api/image/" + user.profilePicture
										: "http://localhost:5000/api/image/NoImage.png"
								}
								alt=""
							/>
						</NavLink>
						<NavLink to="/settings">
							<Username>User : {user.username}</Username>
						</NavLink>
					</UserContainer>
				) : (
					<NavList>
						<NavLink to="/login">Login</NavLink>
						<NavLink to="/register">SignUp</NavLink>
					</NavList>
				)}
			</Right>
		</Container>
	);
};

export default Navbar;
