import axios from "axios";
import { FETCH_ACCOUNT } from "../constants/constants";
import {API_URL  } from "../../constantsUrl/constantsUrl.js";

// import {Constants }  from "../constants/constants.js";

export const AccountAction = (values) => async (dispatch) => {
	console.log(values, "action");
		await dispatch({
		type: FETCH_ACCOUNT.REQUEST,
		payload: { loading: true },
	});

	try {
		const options = {
			method: "GET",
			headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
			data: values,
			url: `${API_URL}/api/account`,
		};

		const { data } = await axios(options);

		localStorage.setItem("account", JSON.stringify(data));

		await dispatch({
			type: FETCH_ACCOUNT.SUCCESS,
			payload: { loading: false, data: data },
		});
	} catch (error) {
		await dispatch({
			type: FETCH_ACCOUNT.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured during login:", error);
	}
};
