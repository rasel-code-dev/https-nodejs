import axios from "axios";

export const backend = "https://localhost:6600"
export const secretKey = "H98zM6i/55yNJfkFsbu0HrzlFo17FtR9"

export default function getApis(){
	return axios.create({
		baseURL: backend
	})
}