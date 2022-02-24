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
} from "./SingleRecipeStyle";

const axios = require("axios");

const SingleRecipe = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [recipe, setRecipe] = useState({});
	const publicFolder = "http://localhost:5000/images/";
	const { user } = useContext(Context);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [updateMode, setUpdateMode] = useState(false);
	const [comment, setComment] = useState("");
	const [isLiked, setIsLiked] = useState(false);
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

	return (
		<Container>
			<Wrapper>
				<Img
					src={
						recipe.photo
							? publicFolder + recipe.photo
							: publicFolder + "NoFoodImage.jpg"
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
				{updateMode ? (
					<Textarea
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>
				) : (
					<Desc>{description}</Desc>
				)}
				{updateMode && <button onClick={handleUpdate}>Update</button>}
			</Wrapper>
			{isLiked ? (
				<FaThumbsUp onClick={handleUnlikes} />
			) : (
				<FaRegThumbsUp onClick={handleLikes} />
			)}
			<span>{recipe.likes?.length}</span>
			<div>
				<form>
					<div>
						<textarea
							placeholder="Leave a comment here"
							rows="4"
							onChange={(event) => setComment(event.target.value)}
						/>
					</div>
					<div>
						<button onClick={handleComment}>Submit</button>
					</div>
				</form>
			</div>
			{recipe.comments?.map((item, index) => (
				<div key={index}>
					<span>User: {item.postedByName}</span>
					<br />
					<span>Comment: {item.comment}</span>
				</div>
			))}
		</Container>
	);
};

export default SingleRecipe;
