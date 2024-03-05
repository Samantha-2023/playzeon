import axios from "axios";
import {API_URL} from "../../constantsUrl/constantsUrl.js";
import {Constants,FETCH_PRICING_COST_ACTION }  from "../constants/constants.js";

export const pricingCostAction = (id)=>async(dispatch) => {
	// this action is for facility type label list 
	
		await dispatch({
		type:FETCH_PRICING_COST_ACTION.REQUEST,
		payload: { loading: true },
	});

	// Retrieve the value from local storage
	// const CenterId = localStorage.getItem("centerId");
	const centerIddd = localStorage.getItem("centerIddd");


	try {
		const options = {
			method: "GET",
			headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
			url: `${API_URL}/api/v1/costByPricingRule?ids=71063&startTime=2024-03-05T20:00:00Z&endTime=2024-03-06T06:30:00Z&isMultiple=false&daysList=`,
           
            
		};

		const {data} = await axios(options);

		await dispatch({
			type:FETCH_PRICING_COST_ACTION.SUCCESS,
			payload: { loading: false, data: data },
		});
	} catch (error) {
		await dispatch({
			type:FETCH_PRICING_COST_ACTION.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured during login:", error);
	}
};


// https://dev-api.playzeon.com/api/v1/costByPricingRule?ids=71063&startTime=2024-03-05T20:00:00Z&endTime=2024-03-06T06:30:00Z&isMultiple=false&daysList=
