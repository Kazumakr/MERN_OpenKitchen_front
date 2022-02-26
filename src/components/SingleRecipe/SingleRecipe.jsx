import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import {
	FaTrashAlt,
	FaRegEdit,
	FaThumbsUp,
	FaRegThumbsUp,
} from "react-icons/fa";

import {
	Container,
	Wrapper,
	Img,
	Title,
	Edit,
	Author,
	Info,
	Desc,
	Input,
	Textarea,
	Form,
	CommentInput,
	CommentButton,
	UserImg,
	CommentContainer,
	UpdateButton,
	RecipeCategories,
	Category,
} from "./SingleRecipeStyle";

const axios = require("axios");

const SingleRecipe = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [recipe, setRecipe] = useState({});
	const { user } = useContext(Context);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [updateMode, setUpdateMode] = useState(false);
	const [comment, setComment] = useState("");
	const [isLiked, setIsLiked] = useState(false);
	const [userImage, setUserImage] = useState("");
	// const publicFolder = "http://localhost:5000/images/";
	useEffect(() => {
		axios
			.get("/recipes/" + path)
			.then((res) => {
				setRecipe(res.data);
				setTitle(res.data.title);
				setDescription(res.data.description);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [path]);

	const handleDelete = async () => {
		await axios
			.delete(`/recipes/${recipe._id}`, { data: { username: user.username } })
			.then((res) => {
				window.location.replace("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleUpdate = async () => {
		await axios
			.put(`/recipes/${recipe._id}`, {
				username: user.username,
				title,
				description,
			})
			.then((res) => {
				setUpdateMode(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleComment = async () => {
		await axios
			.put(`/recipes/${recipe._id}/comments`, {
				comment: comment,
				username: user.username,
				userId: user._id,
			})
			.then((res) => {
				console.log("comment submit");
				setRecipe(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const handleLikes = async () => {
		await axios
			.put(`/recipes/${recipe._id}/likes`, { userId: user._id })
			.then((res) => {
				console.log("res", res);
				setIsLiked(true);
				setRecipe(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const handleUnlikes = async () => {
		await axios
			.put(`/recipes/${recipe._id}/unlikes`, { userId: user._id })
			.then((res) => {
				console.log(res);
				setIsLiked(false);
				setRecipe(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleGetCommentUser = async (username) => {
		await axios
			.get("/users/byusername", { data: { username: username } })
			.then((res) => setUserImage(res.data.profilePicture))
			.catch((err) => console.log(err));
	};

	return (
		<Container>
			<Wrapper>
				<Img
					src={
						recipe.photo
							? "http://localhost:5000/api/image/" + recipe.photo
							: "http://localhost:5000/api/image/NoFoodImage.jpg"
					}
					alt=""
				/>
				{updateMode ? (
					<Input
						type="text"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
					/>
				) : (
					<Title>
						{title}
						{recipe.username === user?.username && (
							<Edit>
								<FaRegEdit
									style={{ color: "blue", fontSize: "24px" }}
									onClick={() => setUpdateMode(true)}
								/>
								<FaTrashAlt
									style={{ color: "red", fontSize: "24px" }}
									onClick={handleDelete}
								/>
							</Edit>
						)}
					</Title>
				)}
				<Info>
					<span>
						Author:
						<Author>
							<Link to={`/?user=${recipe.username}`}>{recipe.username}</Link>
						</Author>
					</span>
					<span>{new Date(recipe.createdAt).toDateString()}</span>
				</Info>
				<RecipeCategories>
					{recipe.categories?.map((category, index) => (
						<Category key={index}>{category}</Category>
					))}
				</RecipeCategories>
				{updateMode ? (
					<Textarea
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>
				) : (
					<Desc>{description}</Desc>
				)}
				{updateMode && (
					<UpdateButton onClick={handleUpdate}>Update</UpdateButton>
				)}
				<div>
					{isLiked ? (
						<FaThumbsUp onClick={handleUnlikes} style={{ cursor: "pointer" }} />
					) : (
						<FaRegThumbsUp
							onClick={handleLikes}
							style={{ cursor: "pointer" }}
						/>
					)}
					<span>{recipe.likes?.length}</span>
				</div>
				<h3>Comments</h3>
				<CommentContainer>
					<UserImg
						src={
							user?.profilePicture
								? "http://localhost:5000/api/image/" + user.profilePicture
								: "http://localhost:5000/api/image/NoImage.png"
						}
						alt=""
					/>
					<Form>
						<CommentInput
							type="text"
							placeholder="Leave a comment here..."
							onChange={(event) => setComment(event.target.value)}
						/>

						<CommentButton onClick={handleComment}>Comment</CommentButton>
					</Form>
				</CommentContainer>
				{recipe.comments?.map((item, index) => (
					<CommentContainer key={index}>
						{/* {handleGetCommentUser(item.postedByName)} */}
						<UserImg
							src={
								userImage
									? "http://localhost:5000/api/image/" + userImage
									: "http://localhost:5000/api/image/NoImage.png"
							}
							alt=""
						/>
						<div>
							<span style={{ fontWeight: "bold" }}>{item.postedByName}</span>
							<br />
							<span>{item.comment}</span>
						</div>
					</CommentContainer>
				))}
			</Wrapper>
		</Container>
	);
};

export default SingleRecipe;
