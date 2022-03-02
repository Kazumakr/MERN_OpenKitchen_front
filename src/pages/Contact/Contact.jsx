import React, { useState } from "react";

import {
	Container,
	Title,
	Form,
	Label,
	Input,
	Button,
	Textarea,
	Wrapper,
	Message,
} from "./ContactStyle";
import { axiosInstance } from "../../config";

const Contact = () => {
	const [sent, setSent] = useState(false);
	const [text, setText] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");

	const handleSend = async () => {
		setSent(true);
		try {
			await axiosInstance.post("/send_mail", {
				name,
				email,
				subject,
				text,
			});
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Container>
			<Title>Contact Us</Title>
			{!sent ? (
				<Form onSubmit={handleSend}>
					<Label>Name</Label>
					<Input
						type="text"
						placeholder="Name"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
					<Label>Email</Label>
					<Input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<Label>Subject</Label>
					<Input
						type="text"
						placeholder="Subject"
						value={subject}
						onChange={(event) => setSubject(event.target.value)}
					/>
					<Label>Content</Label>
					<Textarea
						type="text"
						placeholder="Content"
						value={text}
						onChange={(event) => setText(event.target.value)}
					/>
					<Button type="submit">Send Email</Button>
				</Form>
			) : (
				<Wrapper>
					<Message>Email Sent</Message>
				</Wrapper>
			)}
		</Container>
	);
};

export default Contact;
