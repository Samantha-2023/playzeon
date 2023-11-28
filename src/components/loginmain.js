import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./playzeon.css";
import { fetchLogin } from "../redux/action/action";
import { useDispatch } from "react-redux";

const LoginMain = ({ setShowPartnerForm }) => {
	const dispatch = useDispatch();

	const initialValues = {
		email: "",
		password: "",
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/, "Enter a valid email")
			.required("Enter a valid mail id"),
		password: Yup.string().required("Enter a valid password"),
	});

	const submitForm = async (values) => {
		console.log(values);

		try {
			dispatch(fetchLogin({ email: values.email, password: values.password }));
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

	return (
		<div className="col-lg-7 col-md-10 col-sm-12 mt-0">
			<div className="card  w-100 p-4 cardbackground">
				<div className="card-body p-0">
					<div className="row">
						<div className="col-lg-12">
							<form onSubmit={formik.handleSubmit}>
								<div className="row">
									<div className="col-lg-12">
										<label for="exampleInputEmail1" className="form-label labelformat">
											Email address
										</label>
										<input
											className="form-control labelshadow mt-1"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											name="email"
											type="email"
											onChange={formik.handleChange}
											value={formik.values.email}
										/>
										{formik.touched.email && formik.errors?.email?.length && <p className="error-text">{formik.errors?.email}</p>}
									</div>
								</div>

								<div className="row mt-3">
									<div className="col-lg-12">
										<label for="exampleInputPassword1" className="form-label  labelformat">
											Password
										</label>
										<input
											className="form-control  labelshadow mt-1"
											id="exampleInputPassword1"
											name="password"
											type="password"
											onChange={formik.handleChange}
											value={formik.values.password}
										/>

										{formik.touched.password && formik.errors?.password && <p className="error-text">{formik.errors?.password}</p>}
									</div>
								</div>

								<div className="row  mt-3">
									<div className="col-lg-12">
										<div className="d-flex justify-content-end fs-6">
											<a href="#" className="link-opacity-50" style={{ color: "red", textDecoration: "none", fontSize: "12px" }}>
												Forgot Password?
											</a>
										</div>
									</div>
								</div>

								<div className="row mt-3 ">
									<div className="col-lg-12">
										<div className=" d-flex justify-content-center">
											<button type="submit" className="btn w-100  fs-6 fw-light signin ">
												Sign in
											</button>
										</div>
									</div>
								</div>

								<div className="row mt-3">
									<div className="col-lg-6">
										<small className="smallfont">Don't have an account?</small>
										<p className="signup">Sign up</p>
									</div>
									<div className="col-lg-6 ">
										<small className="smallfont">Are you a sports Organization?</small>
										<p className="partner" onClick={() => setShowPartnerForm(true)}>
											Partner with us
										</p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default LoginMain;
