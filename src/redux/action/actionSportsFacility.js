import axios from "axios";
import { FETCH_SPORTS_PUT_FACILITY } from "../constants/constants";
import { FETCH_SPORTSPOSTFACILITY } from "../constants/constants";
import {API_URL}  from "../../constantsUrl/constantsUrl.js";
import Swal from "sweetalert2";

export const FacitilityActionPostData = (values) => async (dispatch) => {

	await dispatch({
		type: FETCH_SPORTSPOSTFACILITY.REQUEST,
		payload: { loading: true },
	});

	const optionspost = {
		method: "POST",
		headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
		data: values,
		url: `${API_URL}/api/v1/facilities`,
	};
	console.log(values, "sports-post-data-pleasecome");

	try {
		const { data } = await axios(optionspost);

		Swal.fire({
			icon: "success",
			title: "Success",
			text: "Facility record has been created successfully",
		});
        
		await dispatch({
			type: FETCH_SPORTSPOSTFACILITY.SUCCESS,
			payload: { loading: false, data: data },
		});

	} catch (error) {
		await dispatch({
			type: FETCH_SPORTSPOSTFACILITY.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured :", error);
	}
};


// put  api  sports facility for update ie; edit icon put api 
// understand the changes done here in values,data why???
export const FacitilityActionPutData = (values,data) => async (dispatch) => {
	await dispatch({
		type: FETCH_SPORTS_PUT_FACILITY.REQUEST,
		payload: { loading: true },
	});

	const options = {
		method: "PUT",
		headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` , "ngrok-skip-browser-warning": 53 },
		 data: data,
		url: `${API_URL}/api/v1/facilities/${values}`,
	};
	console.log(data, "sports editvs update-data-pleasecome");

	try {
		const { data } = await axios(options);

		Swal.fire({
			icon: "success",
			title: "",
			text: "Sports Facility data updated successfully",
		});

		await dispatch({
			type: FETCH_SPORTS_PUT_FACILITY.SUCCESS,
			payload: { loading: false, data: data },
		});
	} catch (error) {
		await dispatch({
			type: FETCH_SPORTS_PUT_FACILITY.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured :", error);
	}
};
