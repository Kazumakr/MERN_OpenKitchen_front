import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	${mobile({ width: "100%" })}
`;
export const Section = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 20px 0;
	width: 100%;
	${mobile({ flexDirection: "column" })}
`;
export const PageTitle = styled.h1`
	font-size: 42px;
	margin-top: 20px;
	${tablet({ fontSize: "32px" })}
`;
export const Img = styled.img`
	width: 400px;
	margin: 20px;
	flex: 1;
	${tablet({ width: "300px", height: "100%" })};
`;

export const DescContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 400px;
	flex: 1;
	margin: 20px;
	padding: 60px 10px 10px 10px;
	${tablet({ width: "300px" })}
`;
export const SectionTitle = styled.h1`
	font-size: 34px;
	margin-bottom: 20px;
`;

export const Desc = styled.div`
	width: 100%;
	height: 200px;
	font-size: 20px;
	${tablet({ width: "300px", height: "140px", fontSize: "15px" })}
`;
