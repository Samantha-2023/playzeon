import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import image3 from "../images/image3.jpg";
import logo from "../images/sport.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sport from "../images/sport.jpg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loginpartner from "./loginpartner";
import "./loginmain.css";
import { fetchLogin } from "../redux/action/action";
import { useDispatch } from "react-redux";
import AddCenter from "../pages/addcenter";

const LoginMain = ({ setShowPartnerForm, ShowPartnerForm }) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const initialValues = {
		email: "",
		password: "",
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/, "Enter a valid email")
			.required("Enter a valid mail id"),
		password: Yup.string()
			// .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/, 'enter a valid password')
			.required("Enter a valid password"),
	});

	const submitForm = async (values) => {
		console.log(values);

		try {
			dispatch(fetchLogin({ email: values.email, password: values.password }));
			// const response = await axios.post("https://dev-api.playzeon.com/api/user-management/login", {
			//  email: values.email,
			// password: values.password,

			// }

			// const{ message, accesstoken } = response.data;
			// toast.success(message);
			// setAuthenticate(true);
			// localStorage.setItem("authToken", accesstoken);
			setTimeout(() => {
				navigate("/dashboard");
				// // navigate("/sidebar");
				// navigate("/navbar");
			}, 2000);
		} catch (error) {
			console.error("Login failed. Please check your credentials.");
		}
	};

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: submitForm,
	});
	console.log(formik.errors?.email);

	//   const handleSignIn = () => {
	//     const requestData = {
	//       userName: email,
	//       password:password,
	//       };

	return (
		<div>
			<div className="col-lg-7">
				<div className="card " style={{ backgroundColor: "#EDEEF0" }}>
					<Form className="p-4" onSubmit={formik.handleSubmit}>
						<div class="mb-3">
							<label for="exampleInputEmail1" className="form-label ">
								Email address
							</label>
							<input
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								name="email"
								type="email"
								onChange={formik.handleChange}
								value={formik.values.email}
							/>
							{formik.touched.email && formik.errors?.email?.length && <p className="error-text">{formik.errors?.email}</p>}
						</div>
						<div class="mb-3">
							<label for="exampleInputPassword1" className="form-label">
								Password
							</label>
							<input
								className="form-control  
	custom-box-shadow"
								id="exampleInputPassword1"
								name="password"
								type="password"
								onChange={formik.handleChange}
								value={formik.values.password}
							/>
							{formik.touched.password && formik.errors?.password && <p className="error-text">{formik.errors?.password}</p>}
						</div>

						<div className=" text-end mb-1" style={{ color: "red", fontSize: "15px" }}>
							
							Forgot Password?
						</div>
						<div className=" d-grid mb-3">
							<Button size="lg" type="submit" style={{ color: "white", backgroundColor: "red", borderColor: "red", fontSize: "15px" }}>
								Sign in
							</Button>
						</div>

						<div className="row justify-content-between ">
							<div className="col">
								{/* <p className="mb-0" style={{fontSize:"10px"}}>Don't have an account?</p> */}
								<small style={{ fontSize: "9px" }}>Don't have an account?</small>
								<p style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}>Sign up</p>
							</div>
							<div className="col">
								{/* <p className="mb-0"  style={{fontSize:"10px"}}> Are you a Sports Organization? </p> */}
								<small style={{ fontSize: "9px" }}>Are you a sports Organization?</small>
								<button
									className="btn btn-link mt-0"
									type="button"
									onClick={() => setShowPartnerForm(true)}
									style={{ fontSize: "12px", color: "red", textDecoration: "none", fontWeight: "bold" }}
								>
									Partner with us
								</button>
							</div>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default LoginMain;

{
	/*  <p style ={{color:"red"}}>Partner with us</p> */
}
