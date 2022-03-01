import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
	flex: 9;
	display: flex;
	flex-wrap: wrap;
	margin: 20px;
	justify-content: center;

	${mobile({ width: "280px" })}
`;
