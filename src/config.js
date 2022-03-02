import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://mern-openkitchen.herokuapp.com/api/",
});
