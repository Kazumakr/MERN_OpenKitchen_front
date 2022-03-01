import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const UserContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 10px 0;
`;
export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 600px;
	${tablet({ width: "500px" })}
	${mobile({ width: "200px" })}
`;

export const Img = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 15px;
	cursor: pointer;
	${mobile({ width: "80px", height: "80px" })}
`;

export const Title = styled.h2``;
export const Desc = styled.p`
	width: 100%;
	${tablet({ width: "500px" })}
	${mobile({ width: "200px" })}
`;
export const Hr = styled.hr`
	width: 100%;
	opacity: 0.5;
	${tablet({ width: "500px" })}
	${mobile({ width: "300px" })}
`;

export const RecipeContainer = styled.div`
	display: "flex";
	width: 1400px;
	${tablet({ width: "800px" })}
	${mobile({ width: "300px" })}
`;
