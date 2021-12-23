import axios from "axios";

export const backend = "https://localhost:6600"


export default function getApis(){
	return axios.create({
		baseURL: backend
	})
}