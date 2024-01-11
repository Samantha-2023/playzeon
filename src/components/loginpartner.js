import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./playzeon.css";
import { fetchOrganization } from "../redux/action/action";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";


const Loginpartner = ({ showPartnerForm, setShowPartnerForm }) => {

	const dispatch = useDispatch();

	const [orgName, setOrgName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");

	const initialValues = {
		phoneNumber: "",
		orgName: "",
		firstName: "",
		lastName: "",
		email: "",
	};

	const validationSchema = Yup.object().shape({
		phoneNumber: Yup.string()
			.matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number")
			.required("Phone number is required"),

		email: Yup.string()
			.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/, "Enter a valid email")
			.required("Enter a valid mail id"),

		firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(" First Name is Required"),

		lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Last Name is Required"),

		orgName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Organisation Name is Required"),
	});

	const submitForm = async (values) => {
		try {
			dispatchEvent(fetchOrganization());
					setShowPartnerForm(false);
		} catch (error) {
			console.error("Form submission failed", error);
		}
	};

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: submitForm,
	});
	console.log(formik.errors?.email);

	return (
		<div>
			<div className="col-lg-10 ">
				<Card className="partnercard">
					<div className="partnercard mt-2" onClick={() => setShowPartnerForm(false)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 mt-2 ms-1"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
						</svg>
					</div>
					<Form className="gap-1 mt-1 px-2 mx-1 mb-1" onSubmit={formik.handleSubmit}>
						<div className=" d-flex">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
								<circle cx="24" cy="15.101" r=".75" fill="red" />
								<path fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" d="M24 18.913v14.735" />
								<circle cx="24" cy="24" r="21.5" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<small className=" d-inline d-flex gap-1 font-bold pleaseline">
								&nbsp; Please fill this short form and our team will get in touch with you shortly
							</small>
						</div>

						<Form.Group className="mb-1 mt-2" controlId="formGrouporganizationname">
							<Form.Label className="fw-light labelpartner">Organization Name</Form.Label>

							<Form.Control
								className="mb-1  labelshadow"
								placeholder=""
								name="orgName"
								type="orgName"
								onChange={formik.handleChange}
								value={formik.values.orgName}
							/>
							{formik.touched.orgName && formik.errors?.orgName?.length && <p className="error-text">{formik.errors?.orgName}</p>}
							<Row className="mt-2">
								<Col>
									<Form.Label className=" fw-light  labelpartner ">First Name</Form.Label>
									<Form.Control
										className="mb-1  labelshadow"
										placeholder=""
										name="firstName"
										type="firstName"
										onChange={formik.handleChange}
										value={formik.values.firstName}
									/>
									{formik.touched.firstName && formik.errors?.firstName?.length && <p className="error-text">{formik.errors?.firstName}</p>}
								</Col>

								<Col>
									<Form.Label className="fw-light  labelpartner">Last Name</Form.Label>
									<Form.Control
										className="mb-1   labelshadow"
										placeholder=""
										name="lastName"
										type="lastName"
										onChange={formik.handleChange}
										value={formik.values.lastName}
									/>
									{formik.touched.lastName && formik.errors?.lastName?.length && <p className="error-text">{formik.errors?.lastName}</p>}
								</Col>
							</Row>
							<Row className="mt-2">
								<Col>
									<Form.Label className="fw-light labelpartner">Phone-Number</Form.Label>
									<Form.Control
										className="mb-1 labelshadow"
										placeholder=""
										name="phoneNumber"
										type="phoneNumber"
										onChange={formik.handleChange}
										value={formik.values.phoneNumber}
									/>
									{formik.touched.phoneNumber && formik.errors?.phoneNumber?.length && (
										<p className="error-text">{formik.errors?.phoneNumber}</p>
									)}
								</Col>

								<Col>
									<Form.Label className=" fw-light labelpartner">Email address</Form.Label>
									<Form.Control
										placeholder=""
										className="mb-1 labelshadow"
										name="email"
										type="email"
										onChange={formik.handleChange}
										value={formik.values.email}
									/>
									{formik.touched.email && formik.errors?.email?.length && <p className="error-text">{formik.errors?.email}</p>}
								</Col>
							</Row>
							<div class="d-grid d-flex justify-content-center mx-auto mt-2 mb-2">
								<Button className="btn w-75  submitbutton fw-light " type="submit">
									Submit
								</Button>
							</div>
						</Form.Group>
					</Form>
				</Card>
			</div>
		</div>
	);
};

export default Loginpartner;
