import axios from "axios";
import { FETCH_SPORTSFACILITY } from "../constants/constants";
import { FETCH_SPORTSPOSTFACILITY } from "../constants/constants";
import Swal from "sweetalert2";

export const FacitilityActionPostData = (values) => async (dispatch) => {

	await dispatch({
		type: FETCH_SPORTSPOSTFACILITY.REQUEST,
		payload: { loading: true },
	});

	const optionspost = {
		method: "POST",
		headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
		data: values,
		url: `https://dev-api.playzeon.com/api/v1/facilities`,
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


// put  api  sports facility   
export const FacitilityActionPutData = (values) => async (dispatch) => {
	await dispatch({
		type: FETCH_SPORTSFACILITY.REQUEST,
		payload: { loading: true },
	});

	const options = {
		method: "PUT",
		headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
		data: values,
		url: `https://dev-api.playzeon.com/api/v1/facilities/${values?.id}`,
	};
	console.log(values, "sportsdatapleasecome");

	try {
		const { data } = await axios(options);

		Swal.fire({
			icon: "success",
			title: "",
			text: "Sports Facility data updated successfully",
		});

		await dispatch({
			type: FETCH_SPORTSFACILITY.SUCCESS,
			payload: { loading: false, data: data },
		});
	} catch (error) {
		await dispatch({
			type: FETCH_SPORTSFACILITY.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured :", error);
	}
};
