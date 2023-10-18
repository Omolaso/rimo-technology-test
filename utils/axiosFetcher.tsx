import axios from "axios";

export const axiosFetcher = axios.create({
	baseURL: " http://wokpa.ddns.net:9000/#/Listener",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});
