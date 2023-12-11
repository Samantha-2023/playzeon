import axios from "axios";
import { FETCH_FACILITYCOPY, FETCH_FACILITYCOPYGET } from "../constants/constants";
import Swal from "sweetalert2";

export const FacitilityActionCopyData = (values) => async (dispatch) => {

	await dispatch({
		type: FETCH_FACILITYCOPY.REQUEST,
		payload: { loading: true },
	});

	const optionscopy = {
		method: "POST",
		headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
		data: values,
		url: `https://dev-api.playzeon.com/api/v1/facility/copy/${values}`,
	};
	console.log(values, "sports-copy -data-pleasecome");

	try {
		const { data } = await axios(optionscopy);

		Swal.fire({
			icon: "success",
			text: "Record duplicated successfully",
		});

			await dispatch({
			type: FETCH_FACILITYCOPY.SUCCESS,
			payload: { loading: false, data: data },
		});

	} catch (error) {
		await dispatch({
			type:FETCH_FACILITYCOPY.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured :", error);
	}
};



export const FacitilityActionCopyGetData = (values) => async (dispatch) => {

	console.log(values, "ssssssssss");


	await dispatch({
		type: FETCH_FACILITYCOPYGET.REQUEST,
		payload: { loading: true },
	});

	const optionscopyget = {
		method: "GET",
		headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
		data: values,
		url: `https://dev-api.playzeon.com/api/v1/facilities?centerId.equals=${values}`,
	};

	try {
		const { data } = await axios(optionscopyget); 

		 	       
		await dispatch({
			type: FETCH_FACILITYCOPYGET.SUCCESS,
			payload: { loading: false, data: data },
		});

	} catch (error) {
		await dispatch({
			type:FETCH_FACILITYCOPYGET.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured :", error);
	}
};

