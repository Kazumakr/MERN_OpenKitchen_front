import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Title, SliderContent, Desc, Inner } from "../Hero/HeroStyle";

const content = [
	{
		title: "OPEN KITCHEN",
		description: "Share your recipe and find your favorite recipe",
		image:
			"https://images.unsplash.com/photo-1625631980741-33a7752108f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvb2t8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		title: "OPEN KITCHEN",
		description: "Share your recipe and find your favorite recipe",
		image:
			"https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
	},
	{
		title: "OPEN KITCHEN",
		description: "Share your recipe and find your favorite recipe",
		image:
			"https://images.unsplash.com/photo-1565895405135-906b51954830?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvb2t8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	},
];

const Hero = () => {
	return (
		<>
			<Slider autoplay={2000} desabled={false}>
				{content.map((item, index) => (
					<SliderContent
						key={index}
						style={{
							background: `url('${item.image}') no-repeat center center `,
							backgroundSize: "cover",
						}}
					>
						<Inner>
							<Title>{item.title}</Title>
							<Desc>{item.description}</Desc>
						</Inner>
					</SliderContent>
				))}
			</Slider>
		</>
	);
};

export default Hero;
