import axios from "axios";
import { FETCH_FACILITYDELETE,FETCH_FACILITYDELETEGET } from "../constants/constants";
import Swal from "sweetalert2";

export const FacitilityActionDeleteData = (values) => async (dispatch) => {

	await dispatch({
		type: FETCH_FACILITYDELETE.REQUEST,
		payload: { loading: true },
	});

	const optionsdelete = {
		method: "DELETE",
		headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
		data: values,
		url: `https://dev-api.playzeon.com/api/v1/facilities/${values}`,
	};
	console.log(values, "sports-delete-data-pleasecome");

	try {
		const { data } = await axios(optionsdelete);

		Swal.fire({
			icon: "success",
			text: "Record deleted successfully",
		});

			await dispatch({
			type: FETCH_FACILITYDELETE.SUCCESS,
			payload: { loading: false, data: data },
		});

	} catch (error) {
		await dispatch({
			type:FETCH_FACILITYDELETE.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured :", error);
	}
};

// //////////////////////////////////Facility get api  for delete //////////////////////////////////////////////////////

export const FacitilityActionGetDeleteData = (values) => async (dispatch) => {

	console.log(values, "deleteeeee");


	await dispatch({
		type: FETCH_FACILITYDELETEGET.REQUEST,
		payload: { loading: true },
	});

	const optionsdeleteget = {
		method: "GET",
		headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
		data: values,
		url: `https://dev-api.playzeon.com/api/v1/facilities?centerId.equals=${values}`,
	};

	try {
		const { data } = await axios(optionsdeleteget); 

		       
		await dispatch({
			type: FETCH_FACILITYDELETEGET.SUCCESS,
			payload: { loading: false, data: data },
		});

	} catch (error) {
		await dispatch({
			type:FETCH_FACILITYDELETEGET.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured :", error);
	}
};

