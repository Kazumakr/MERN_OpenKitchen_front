import React from "react";

import {
	Container,
	PageTitle,
	Section,
	Img,
	DescContainer,
	Desc,
	SectionTitle,
} from "./AboutStyle";

const About = () => {
	return (
		<Container>
			<PageTitle>About Us</PageTitle>
			<Section>
				<Img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2luZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" />
				<DescContainer>
					<SectionTitle>Share your original recipe</SectionTitle>
					<Desc>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur perferendis cupiditate eaque similique optio soluta
						officiis deleniti atque voluptatum sit, quos sed ullam nulla ea
						minus tenetur accusantium autem adipisci!
					</Desc>
				</DescContainer>
			</Section>
			<Section>
				<DescContainer>
					<SectionTitle>Explore & Learn</SectionTitle>
					<Desc>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur perferendis cupiditate eaque similique optio soluta
						officiis deleniti atque voluptatum sit, quos sed ullam nulla ea
						minus tenetur accusantium autem adipisci!
					</Desc>
				</DescContainer>
				<Img src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2luZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" />
			</Section>
		</Container>
	);
};

export default About;
