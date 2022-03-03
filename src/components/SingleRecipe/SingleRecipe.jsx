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
	FormGroupCheck,
	Checkbox,
} from "./SingleRecipeStyle";
import { axiosInstance } from "../../config";

const SingleRecipe = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [recipe, setRecipe] = useState({});
	const { user } = useContext(Context);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState([]);
	const [updateMode, setUpdateMode] = useState(false);
	const [comment, setComment] = useState("");
	const [isLiked, setIsLiked] = useState(false);
	const [userImage, setUserImage] = useState("");

	const [checkedCategories, setCheckedCategories] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axiosInstance
			.get("/categories")
			.then((res) => {
				setCategories(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		axiosInstance
			.get("/recipes/" + path)
			.then((res) => {
				setRecipe(res.data);
				setTitle(res.data.title);
				setDescription(res.data.description);
				setCategory(res.data.categories);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [path]);

	const handleDelete = async () => {
		await axiosInstance
			.delete(`/recipes/${recipe._id}`, { data: { username: user.username } })
			.then((res) => {
				if (recipe.photo) {
					axiosInstance
						.delete(`/image/${recipe.photo}`)
						.then()
						.catch((err) => {
							console.log(err);
						});
				}
				window.location.replace("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleUpdate = async () => {
		await axiosInstance
			.put(`/recipes/${recipe._id}`, {
				username: user.username,
				title,
				description,
				categories: checkedCategories,
			})
			.then((res) => {
				setUpdateMode(false);
				setCategory(checkedCategories);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleComment = async (event) => {
		event.preventDefault();
		await axiosInstance
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
		await axiosInstance
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
		await axiosInstance
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

	const handleOnChange = (categoryName) => {
		if (checkedCategories.some((category) => category === categoryName)) {
			setCheckedCategories(
				checkedCategories.filter((category) => category !== categoryName)
			);
		} else {
			setCheckedCategories([...checkedCategories, categoryName]);
		}
	};

	return (
		<Container>
			<Wrapper>
				<Img
					src={
						recipe.photo
							? "https://mern-openkitchen.herokuapp.com/api/image/" +
							  recipe.photo
							: "https://mern-openkitchen.herokuapp.com/api/image/NoFoodImage.jpg"
					}
					alt=""
				/>
				{updateMode ? (
					<>
						<Input
							type="text"
							value={title}
							onChange={(event) => setTitle(event.target.value)}
						/>
						<FormGroupCheck>
							{categories.map((category, index) => (
								<div key={index}>
									<Checkbox
										type="checkbox"
										value={category.name}
										onChange={(event) => handleOnChange(event.target.value)}
									/>
									{category.name}
									<br />
								</div>
							))}
						</FormGroupCheck>
						<Textarea
							value={description}
							onChange={(event) => setDescription(event.target.value)}
						/>
						<UpdateButton onClick={handleUpdate}>Update</UpdateButton>
					</>
				) : (
					<>
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
						<Info>
							<span>
								Author:
								<Author>
									<Link to={`/userrecipe/${recipe.userId}`}>
										{recipe.username}
									</Link>
								</Author>
							</span>
							<span>{new Date(recipe.createdAt).toDateString()}</span>
						</Info>
						<RecipeCategories>
							{category?.map((category, index) => (
								<Category key={index}>{category}</Category>
							))}
						</RecipeCategories>
						<Desc>{description}</Desc>
					</>
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
								? "https://mern-openkitchen.herokuapp.com/api/image/" +
								  user.profilePicture
								: "https://mern-openkitchen.herokuapp.com/api/image/NoImage.png"
						}
						alt=""
					/>
					<Form>
						<CommentInput
							type="text"
							placeholder="Leave a comment here..."
							onChange={(event) => setComment(event.target.value)}
						/>
						{recipe._id}
						<CommentButton onClick={handleComment}>Comment</CommentButton>
					</Form>
				</CommentContainer>
				{recipe.comments?.map((item, index) => (
					<CommentContainer key={index}>
						<UserImg
							src={
								userImage
									? "https://mern-openkitchen.herokuapp.com/api/image/" +
									  userImage
									: "https://mern-openkitchen.herokuapp.com/api/image/NoImage.png"
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
