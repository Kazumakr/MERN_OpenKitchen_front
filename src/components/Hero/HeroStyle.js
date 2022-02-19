import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	pointer-events: none;
	background-color: rgba(0, 0, 0, 0.5);
`;
export const Title = styled.h1`
	margin: 0 auto;
	padding: 0;
	text-transform: uppercase;
	width: 90%;
	text-align: center;
	font-size: 3.5rem;
	color: white;
`;
export const SubTitle = styled.h2`
	margin: 24px auto 0;
	padding: 0;
	width: 80%;
	text-align: center;
	font-size: 1.75rem;
	color: white;
`;
