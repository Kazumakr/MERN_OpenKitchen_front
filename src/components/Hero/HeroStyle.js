import styled from "styled-components";
import { mobile } from "../../responsive";
export const Container = styled.div`
	${mobile({
		display: "none",
	})}
`;
export const SliderContent = styled.div`
	text-align: center;

	&:before {
		background-color: rgba(0, 0, 0, 0.4);
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		content: "" "";
	}
`;
export const Inner = styled.div`
	padding: 0 70px;
	box-sizing: border-box;
	position: absolute;
	width: 100%;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
`;
export const Title = styled.h1`
	font-weight: 900;
	margin: 0 auto;
	max-width: 840px;
	color: #ffffff;
	font-size: 64px;
	line-height: 1;
`;
export const Desc = styled.h2`
	margin: 24px auto 0;
	padding: 0;
	width: 80%;
	text-align: center;
	font-size: 1.75rem;
	color: white;
`;
