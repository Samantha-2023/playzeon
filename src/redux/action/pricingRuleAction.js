import axios from "axios";
import {API_URL} from "../../constantsUrl/constantsUrl.js";
import {Constants,FETCH_PRICING_RULE_ACTION }  from "../constants/constants.js";

export const pricingRuleAction = (values,id)=>async(dispatch) => {
	//console.log(values, "valuessssss id");
	console.log(id,"facidred")
	// this action is for facility type label list 
	
		await dispatch({
		type:FETCH_PRICING_RULE_ACTION.REQUEST,
		payload: { loading: true },
	});

	// Retrieve the value from local storage
	// const CenterId = localStorage.getItem("centerId");
	const centerIddd = localStorage.getItem("centerIddd");


	try {
		const options = {
			method: "GET",
			headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}`, "ngrok-skip-browser-warning": 53 },
			url: `${API_URL}api/v1/pricing-rules?centerId=${centerIddd}&facilityIds=${id}`,
            
		};

		const {data} = await axios(options);

		await dispatch({
			type:FETCH_PRICING_RULE_ACTION.SUCCESS,
			payload: { loading: false, data: data },
		});
	} catch (error) {
		await dispatch({
			type:FETCH_PRICING_RULE_ACTION.ERROR,
			payload: { loading: false, data: {} },
		});
		console.error("An error occured during login:", error);
	}
};
