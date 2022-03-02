import React, { useState, useContext } from "react";
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
	HamburgerContainer,
	MobileNavList,
} from "./NavbarStyle";

const Navbar = () => {
	const { user, dispatch } = useContext(Context);
	const [open, setOpen] = useState(false);
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
							<NavLink to={`/userrecipe/${user._id}`}>My Recipe</NavLink>
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
										? "https://mern-openkitchen.herokuapp.com/api/image/" +
										  user.profilePicture
										: "https://mern-openkitchen.herokuapp.com/api/image/NoImage.png"
								}
								alt=""
							/>
							<Username>User : {user.username}</Username>
						</NavLink>
					</UserContainer>
				) : (
					<NavList>
						<NavLink to="/login">Login</NavLink>
						<NavLink to="/register">SignUp</NavLink>
					</NavList>
				)}

				<div>
					<HamburgerContainer open={open} onClick={() => setOpen(!open)}>
						<div />
						<div />
						<div />
					</HamburgerContainer>
					<MobileNavList open={open} onClick={() => setOpen(!open)}>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink to="/contact">Contact</NavLink>
						{user && (
							<>
								<NavLink to={`/userrecipe/${user._id}`}>My Recipe</NavLink>
								<NavLink to="/addrecipe">Add Recipe</NavLink>
								<NavLink to="/" onClick={handleLogout}>
									Logout
								</NavLink>
							</>
						)}
					</MobileNavList>
				</div>
			</Right>
		</Container>
	);
};

export default Navbar;
