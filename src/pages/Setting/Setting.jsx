import React, { useContext, useEffect, useState } from "react";
import {
	Container,
	Wrapper,
	TitleContainer,
	UpdateTitle,
	Form,
	Label,
	ProfileContainer,
	Img,
	SettingInput,
	Input,
	UpdateButton,
	DeleteButton,
	ButtonContainer,
} from "./SettingStyle";
import { Context } from "../../context/Context";
import { BsPlusCircle } from "react-icons/bs";
import axios from "axios";

const Setting = () => {
	const [file, setFile] = useState(null);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [bio, setBio] = useState("");
	const [success, setSuccess] = useState(false);

	const { user, dispatch } = useContext(Context);
	// const PublicFolder = "http://localhost:5000/images/";

	useEffect(() => {
		setUsername(user.username);
		setEmail(user.email);
		setPassword(user.password);
		setBio(user.bio);
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch({ type: "UPDATE_START" });
		const updatedUser = {
			userId: user._id,
			username,
			email,
			password,
			bio,
		};
		if (file) {
			const data = new FormData();
			const filename = file.name;
			data.append("name", filename);
			data.append("file", file);
			updatedUser.profilePicture = filename;
			await axios
				.post("/upload", data)
				.then()
				.catch((err) => {
					console.log(err);
				});
		}
		await axios
			.put("/users/" + user._id, updatedUser)
			.then((res) => {
				console.log("success");
				setSuccess(true);
				dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: "UPDATE_FAILURE" });
			});
	};

	const handleDelete = async () => {
		await axios
			.delete(`/users/${user._id}`, { data: { userId: user._id } })
			.then((res) => {
				dispatch({ type: "LOGOUT" });
				window.location.replace("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Container>
			<Wrapper>
				<TitleContainer>
					<UpdateTitle>Account Settings</UpdateTitle>
					{success && (
						<span style={{ textAlign: "center", color: "green" }}>
							Profile has been updated
						</span>
					)}
				</TitleContainer>
				<Form onSubmit={handleSubmit}>
					<Label>Profile Picture</Label>
					<ProfileContainer>
						{file ? (
							<Img src={URL.createObjectURL(file)} />
						) : (
							<Img
								src={
									user.profilePicture
										? "http://localhost:5000/api/image/" + user.profilePicture
										: "http://localhost:5000/api/image/NoImage.png"
								}
								alt="profilePicture"
							/>
						)}
						<Label htmlFor="fileInput">
							<BsPlusCircle
								style={{
									fontSize: "24px",
									opacity: "0.6",
									marginLeft: "5px",
									marginBottom: "10px",
								}}
							/>
						</Label>
						<SettingInput
							id="fileInput"
							type="file"
							onChange={(event) => setFile(event.target.files[0])}
						/>
					</ProfileContainer>
					<Label>Username</Label>
					<Input
						type="text"
						value={username}
						name="name"
						onChange={(event) => setUsername(event.target.value)}
					/>
					<Label>Email</Label>
					<Input
						type="email"
						value={email}
						name="email"
						onChange={(event) => setEmail(event.target.value)}
					/>
					<Label>Password</Label>
					<Input
						type="password"
						name="password"
						placeholder="****"
						onChange={(event) => setPassword(event.target.value)}
					/>
					<Label>Bio</Label>
					<Input
						type="text"
						name="bio"
						value={bio}
						onChange={(event) => setBio(event.target.value)}
					/>
					<ButtonContainer>
						<UpdateButton type="submit">Update</UpdateButton>
						<DeleteButton onClick={handleDelete}>Delete Account</DeleteButton>
					</ButtonContainer>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Setting;
