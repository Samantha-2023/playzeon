import axios from "axios";
import { FETCH_FACILITY_EDIT_GET } from "../constants/constants";
import Swal from "sweetalert2";
import {API_URL  } from "../../constantsUrl/constantsUrl.js";


 //////////////////////////////////Facility get api  for edit icon //////////////////////////////////////////////////////

export const FacitilityActionEditGetData = (values) => async (dispatch) => {

	console.log(values, "edit data ");


	await dispatch({
		type: FETCH_FACILITY_EDIT_GET.REQUEST,
		payload: { loading: true },
	});

	const optionseditget = {
		method: "GET",
		headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
		data: values,
		url: `${API_URL}/api/v1/facility/${values}`,
		
	};

	try {
		const { data } = await axios(optionseditget); 

		       
		await dispatch({
			type:FETCH_FACILITY_EDIT_GET.SUCCESS,
			payload: { loading: false, data: data },
		});

	} catch (error) {
		await dispatch({
			type:FETCH_FACILITY_EDIT_GET.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured :", error);
	}
};

