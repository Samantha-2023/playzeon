import axios from "axios";
import { Constants } from "../constants/constants.js";
import Swal from "sweetalert2";
import {API_URL  } from "../../constantsUrl/constantsUrl.js";

export const fetchLogin =
	({ email, password }) =>
	async (dispatch) => {
		try {
			const response = await axios.post(`${API_URL}/api/user-management/login`, {
				userName: email,
				password: password,
			});
			console.log(email);
			console.log(password);

			if (response.status === 200) {
				localStorage.setItem("accessToken", response.data.accessToken);
				localStorage.setItem("refreshToken", response.data.refreshToken);
				console.log("Login Successfully");

				Swal.fire({
					icon: "success",
					title: "Logged in Successfully",
					text: "You have logged in successfully",
				});
				setTimeout(() => {
					window.location.href = "/dashboard";
				}, 3000);

				//  windows should not reload thats why windows href function is used
			} else {
				console.error("Login failed try again ");
			}

			const { data } = response;

			dispatch({
				type: Constants.FETCH_LOGIN,
				payload: data,
			});
		} catch (error) {
			console.error("An error occured during login:", error);
			const errorMessage = error.response?.data.message; // 'An error occurred during login';
			Swal.fire({
				icon: "error",
				title: "Login Failed",
				text: errorMessage,

				// text: "The email or password you entered is incorrect.Please double-check your credentials and try again.If you do not have your password, reset it by clicking the forgot password link",
				// footer: '<a href="#">Try again.</a>'
				//toast.success(res.data.response.message);
			});
		}
	};

	
export const fetchOrganization =
	({ organization, fname, lname, phNumber, email, role }) =>
	async (dispatch) => {
		try {
			const response = await axios.post("/api/user-management/create/organization", {
				phoneNumber: phNumber,
				orgName: organization,
				firstName: fname,
				lastName: lname,
				email: email,
				role: role,
			});

			if (response.status === 200) {
				console.log("created partner");
			} else {
				console.log("login failed");
			}

			const { data } = response;
			dispatch({
				type: Constants.FETCH_ORGANIZATION,
				payload: data,
			});
		} catch (error) {
			console.error("An error occured during login:", error);
		}
	};
