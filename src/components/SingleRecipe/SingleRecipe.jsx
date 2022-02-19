import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";

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
	const [comments, setComments] = useState([]);
	const [data, setData] = useState([]);

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
			.post(`/recipes/${recipe._id}/comments`, {
				author: user.username,
				comment,
			})
			.then((res) => {
				console.log("comment submit");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const handleCommentGet = async () => {
		await axios
			.get(`/recipes/${recipe._id}/comments`)
			.then((res) => {
				// setComments(res.data);
				console.log(res.data);
				console.log(comments);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleLike = async () => {
		await axios
			.post(`/recipes/${recipe._id}/like`, {
				liker: user.username,
			})
			.then((res) => {})
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
								{/* <button onClick={() => setUpdateMode(true)}>EDIT</button>
								<button onClick={handleDelete}>DELETE</button> */}
								{/* <i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i> */}
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
			{/* <button onClick={handleLike}>
				Like
				<span>{recipe.likes.length()}</span>
			</button>
			<div>
				<form>
					<div>
						<textarea
							placeholder="Leave a comment here"
							rows="4"
							// name="comment"
							onChange={(event) => setComment(event.target.value)}
						/>
						{comment}
					</div>
					<div>
						<button onClick={handleComment}>Submit</button>
					</div>
				</form>
			</div>
			<button onClick={handleCommentGet}>Comment get</button> */}
		</Container>
	);
};

export default SingleRecipe;
