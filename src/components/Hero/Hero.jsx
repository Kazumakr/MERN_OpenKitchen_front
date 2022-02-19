import React from "react";
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import { Wrapper, Title, SubTitle } from "../Hero/HeroStyle";

const Hero = () => {
	return (
		<HeroSlider
			slidingAnimation="left_to_right"
			orientation="horizontal"
			initialSlide={1}
			// onBeforeChange={(previousSlide, nextSlide) =>
			// 	console.log("onBeforeChange", previousSlide, nextSlide)
			// }
			// onChange={(nextSlide) => console.log("onChange", nextSlide)}
			// onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
			style={{
				backgroundColor: "rgba(0, 0, 0, 0.5)",
			}}
			settings={{
				slidingDuration: 250,
				slidingDelay: 100,
				shouldAutoplay: true,
				shouldDisplayButtons: true,
				autoplayDuration: 5000,
				height: "50vh",
			}}
		>
			<OverlayContainer>
				<Wrapper>
					<Title>OPEN KITCHEN</Title>
					<SubTitle>Share your recipe and find your favorite recipe</SubTitle>
				</Wrapper>
			</OverlayContainer>
			<Slide
				background={{
					backgroundImage:
						"https://images.unsplash.com/photo-1625631980741-33a7752108f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvb2t8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					backgroundAttachment: "fixed",
				}}
			/>
			<Slide
				background={{
					backgroundImage:
						"https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
					backgroundAttachment: "fixed",
				}}
			/>
			<Slide
				background={{
					backgroundImage:
						"https://images.unsplash.com/photo-1565895405135-906b51954830?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvb2t8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					backgroundAttachment: "fixed",
				}}
			/>
			<Nav />
		</HeroSlider>
	);
};

export default Hero;
