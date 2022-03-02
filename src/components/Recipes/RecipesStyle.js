import styled from "styled-components";
import { tablet } from "../../responsive";

export const Container = styled.div`
	flex: 9;
	display: flex;
	flex-wrap: wrap;
	margin: 20px;
	justify-content: space-between;

	&:after {
		content: "" "";
		display: block;
		width: 30%;
	}

	${tablet({ width: "280px", justifyContent: "center" })}
`;
