import React, { useContext, useState, useEffect } from "react";
import {
	Container,
	Img,
	Form,
	FormGroup,
	Label,
	Input,
	Textarea,
	Button,
	FormGroupCheck,
	Checkbox,
} from "./AddRecipeStyle";
import axios from "axios";
import { BsPlusCircle } from "react-icons/bs";
import { Context } from "../../context/Context";
const AddRecipe = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState(null);
	const [checkedCategories, setCheckedCategories] = useState([]);
	let checkedCategory = [];
	const [categories, setCategories] = useState([]);
	const [checkedState, setCheckedState] = useState(
		new Array(categories.length).fill(false)
	);
	const { user } = useContext(Context);

	useEffect(() => {
		axios
			.get("/categories")
			.then((res) => {
				setCategories(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const newRecipe = {
			username: user.username,
			title,
			description,
			categories: checkedCategories,
		};

		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			newRecipe.photo = filename;
			await axios
				.post("/upload", data)
				.then()
				.catch((err) => {
					console.log(err);
				});
		}
		await axios
			.post("/recipes", newRecipe)
			.then((res) => {
				window.location.replace("/recipes/" + res.data._id);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleOnChange = (categoryName) => {
		// const updatedCheckedState = checkedState.map((item, index) =>
		// 	index === position ? !item : item
		// );

		// if (checkedCategory.some((category) => category === categoryName)) {
		// 	checkedCategory = checkedCategory.filter((category) => {
		// 		return category !== categoryName;
		// 	});
		// } else {
		// 	checkedCategory.push(categoryName);

		// }
		if (checkedCategories.some((category) => category === categoryName)) {
			// checkedCategory = checkedCategory.filter((category) => {
			// 	return category.name !== categoryName;
			// });
			setCheckedCategories(
				checkedCategories.filter((category) => category !== categoryName)
			);
		} else {
			// checkedCategory.push({ name: categoryName });
			setCheckedCategories([...checkedCategories, categoryName]);
		}
	};
	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<h1 style={{ textAlign: "center" }}>Add New Recipe</h1>
				<FormGroup>
					<Label>Image</Label>
					{file && <Img src={URL.createObjectURL(file)} alt="" />}
					<Label htmlFor="fileInput">
						<BsPlusCircle style={{ fontSize: "34px", cursor: "pointer" }} />
					</Label>
					<Input
						id="fileInput"
						type="file"
						style={{ display: "none" }}
						onChange={(event) => setFile(event.target.files[0])}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Title</Label>
					<Input
						placeholder="Title"
						type="text"
						autoFocus={true}
						onChange={(event) => setTitle(event.target.value)}
						required={true}
					/>
				</FormGroup>
				<Label>Category</Label>
				<FormGroupCheck>
					{categories.map((category, index) => (
						<>
							<Checkbox
								key={index}
								type="checkbox"
								value={category.name}
								onChange={(event) => handleOnChange(event.target.value)}
							/>
							{category.name}
							<br />
						</>
					))}
				</FormGroupCheck>

				<FormGroup>
					<Label>Description</Label>
					<Textarea
						placeholder="Write your recipe..."
						type="text"
						autoFocus={false}
						onChange={(event) => setDescription(event.target.value)}
						required={true}
					/>
				</FormGroup>
				<FormGroup>
					<Button type="submit" type="submit">
						Publish
					</Button>
				</FormGroup>
			</Form>
		</Container>
	);
};

export default AddRecipe;
