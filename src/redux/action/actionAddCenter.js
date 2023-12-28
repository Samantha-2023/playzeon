import axios from "axios";
import { FETCH_CENTER, FETCH_SPORTS_PHOTOS } from "../constants/constants";
import { API_URL } from "../../constantsUrl/constantsUrl.js";
// import FacilityDisplayPage from "../../pages/facilityDisplayPage.js";

// import {Constants }  from "../constants/constants.js";

export const AddCenterAction = (values, photos) => async (dispatch) => {
	console.log(values, "action");
	values.timezone= {id:Number(values.timezone)};
	// values.organization.id={id:Number(values.organization.id)};

	await dispatch({
		type: FETCH_CENTER.REQUEST,
		payload: { loading: true },
	});

	try {
		const options = {
			method: "POST",
			headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
			data: values,
			url: `${API_URL}/api/v1/centers`,
		};
		const { data } = await axios(options);

		//data any name  data is a variable ... we are using this instead of . then  respone --promise

		// photo api call pananum
		// dispatch(PhotosAddCenterAction(photos, data?.centerId));

		await dispatch({
			type: FETCH_CENTER.SUCCESS,
			payload: { loading: false, data: data },
		});
	} catch (error) {
		await dispatch({
			type: FETCH_CENTER.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured during login:", error);
	}
};

export const PhotosAddCenterAction = (photos, centerId,selectedFile) => async (dispatch) => {
	console.log(centerId, "photoss");
	await dispatch({
		type: FETCH_SPORTS_PHOTOS.REQUEST,
		payload: { loading: true },
	});

	const formData = new FormData(); //formdata object
	formData.append("centerId", centerId);
	formData.append("userId", JSON.parse(localStorage.getItem("account"))?.id);
	// id: localStorage.getItem("centerIddd") ? parseInt(localStorage.getItem("centerIddd"), 10) : null,

	formData.append(`tags_${0}`, "banner");
	formData.append(`files_${0}`, selectedFile);

	try {
		const options = {
			method: "POST",
			headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
			data: formData,
			url: `${API_URL}/api/v1/center/photos`,
		};
		const { data } = await axios(options);

		//data any name  data is a variable ... we are using this instead of . then  respone --promise
		await dispatch({
			type: FETCH_SPORTS_PHOTOS.SUCCESS,
			payload: { loading: false, data: data },
		});
	} catch (error) {
		await dispatch({
			type: FETCH_SPORTS_PHOTOS.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured uploading the pictures:", error);
	}
};

// const config = {
// 	headers: { "content-type": "multipart/form-data" },
// };

// // after addcenter api call
// axios
// 	.post("https://5a26-2405-201-e059-b805-e529-4831-34fd-ae3b.ngrok-free.app/api/v1/center/photos", formData, config)
// 	.then((response) => {
// 		console.log(response);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
