import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image3 from "../images/image3.jpg";
import logo from "../images/sport.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sport from "../images/sport.jpg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FontAwesome from "react-fontawesome";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Icon } from "@mui/material";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BeakerIcon } from "@heroicons/react/24/solid";
import Login from "./login";
import LoginMain from "./loginmain";
import "./loginmain.css";
import { fetchOrganization } from "../redux/action/action";





const Loginpartner = ({ showPartnerForm, setShowPartnerForm }) => {
	const [orgName, setOrgName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	

	const initialValues = {
		phoneNumber:'',
		orgName: '',
        firstName:'',
        lastName: '',
         email  : '',
	};

	const validationSchema = Yup.object().shape({
     
		phoneNumber: Yup.string()
		.matches(/^[0-9]{10}$/, 'Phone number must be a 10-digit number')
		.required('Phone number is required'),

		email: Yup.string()
			.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/, 'Enter a valid email')
			.required('Enter a valid mail id'),

		firstName: Yup.string()
           .min(2, 'Too Short!')
           .max(50, 'Too Long!')
           .required(' First Name is Required'),

        lastName: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Last Name is Required'),
		
		 orgName: Yup.string()
		 .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Organisation Name is Required'),
	
	});
	
	const submitForm = async (values) => {
		try {
			dispatchEvent(fetchOrganization())
		//    }
			setShowPartnerForm(false);
		}
			catch(error) {
				console.error("Form submission failed", error);
			}

		    }

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: submitForm,
	});
	console.log( formik.errors?.email);

		
	
	return (
		<div>
			<div className="col-lg-9 ">
				<Card  style={{ backgroundColor: "#EDEEF0" }}>
				<div  style={{ color: "gray", textDecoration: "none" }} onClick={()=>setShowPartnerForm(false)}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-0 ms-1">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
							</svg></div>	
					<Form className="gap-1 mt-1 px-2 mx-1"   onSubmit={formik.handleSubmit} style ={{marginBottom:"1px"}}>
						<div className=" d-flex gap-2 ">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-10 h-6 pt-2">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
								/>
							</svg>

							<p className=" d-inline d-flex gap-1 font-bold" style={{ color: "black" , fontSize:"13px" }}>
								Please fill this short form and our team will get in touch with you shortly
							</p>
						</div>

						<Form.Group className="mb-1" controlId="formGrouporganizationname">
							<Form.Label style={{color:"black", fontSize:"13px"}}>Organization Name</Form.Label>
							<Form.Control
								className="mb-1"
								placeholder="Organizationname"
								// value={orgName}
								// onChange={(e) => setOrgName(e.target.value)}
								name="orgName"
								type="orgName"
								onChange={formik.handleChange}
								value={formik.values.orgName}
							/>
							{ formik.touched.orgName && formik.errors?.orgName?.length && (
  <p className="error-text">{formik.errors?.orgName}</p>
)}
							<Row>
								<Col>
									<Form.Label style={{color:"black", fontSize:"13px"}}>First Name</Form.Label>
									<Form.Control className="mb-1"
									 placeholder="First name" 
									//  value={firstName} 
									//  onChange={(e) => setFirstName(e.target.value)}
                                      name="firstName"
										type="firstName"
										onChange={formik.handleChange}
										value={formik.values.firstName}
									  />
{ formik.touched.firstName && formik.errors?.firstName?.length && (
  <p className="error-text">{formik.errors?.firstName}</p>
)}
							</Col>

							
								<Col>
									<Form.Label style={{color:"black", fontSize:"13px"}}>Last Name</Form.Label>
									<Form.Control className="mb-1"
									 placeholder="Last name"
									//   value={lastName} 
									//   onChange={(e) => setLastName(e.target.value)}
									  name="lastName"
										type="lastName"
										onChange={formik.handleChange}
										value={formik.values.lastName}
									 />
{ formik.touched.lastName && formik.errors?.lastName?.length && (
  <p className="error-text">{formik.errors?.lastName}</p>
)}
								</Col>

								

							</Row>
							<Row>
								<Col>
									<Form.Label style={{color:"black", fontSize:"13px"}}>Phone-Number</Form.Label>
									<Form.Control
										className="mb-1"
										placeholder="Phone-Number"
										// value={phoneNumber}
										// onChange={(e) => setPhoneNumber(e.target.value)}
										name="phoneNumber"
										type="phoneNumber"
										onChange={formik.handleChange}
										value={formik.values.phoneNumber}
									/>
									{ formik.touched.phoneNumber && formik.errors?.phoneNumber?.length && (
  <p className="error-text">{formik.errors?.phoneNumber}</p>
)}
								</Col>
								


								<Col>
									<Form.Label style={{color:"black", fontSize:"13px"}}>Email address</Form.Label>
									<Form.Control
									 placeholder="Email address" 
									//  value={email} 
									//  onChange={(e) => setEmail(e.target.value)}
									 name="email"
								    type="email"
								    onChange={formik.handleChange}
								    value={formik.values.email}
									 
									 
									 />
{ formik.touched.email && formik.errors?.email?.length && (
  <p className="error-text">{formik.errors?.email}</p>
)}

								</Col>
							</Row>
							<div class="d-grid col-6 mx-auto mt-1 mb-2">
								<button class="btn  btn-secondary btn-lg "
								 size="lg" 
								 type="submit" 
								 style={{backgroundColor:"#DE342F" , fontsize:"5px"}} 
								//  onClick={handleFormSubmit}
								 >
									Submit
								</button>
								</div> 			
						</Form.Group>
					</Form>
				</Card>
			</div>
		 </div>
	);
};

export default Loginpartner;

{
	/* {" "}  chevron-left
							<i class="fa-solid fa-less-than" style="color: #000000;"></i>
							<i class="bi bi-arrow-left-short"></i> */
}
{
	/* <Link to="/LoginMain" >{"<"}</Link> */
}


//creating the request payload
// const handleFormSubmit = () => {
// 	const requestData = {
// 		phoneNumber: phoneNumber,
// 		orgName: orgName,
// 		firstName: firstName,
// 		lastName: lastName,
// 		email: email,
// 		role: "ROLE_ORG_ADMIN",
// 	};
// }
// ========================================================
//          axios
	// 		.post("https://dev-api.playzeon.com/api/user-management/create/organization", requestData)
	// 		.then((response) => {
	// 			console.log("Form submitted successfully", response.data);
	// 			setShowPartnerForm(false);
	// 			// Navigate("/someotherpage");
	// 		})
	// 		.catch((error) => {
	// 			console.error("Form submission failed", error);
	// 		});

// //try {
// 	dispatchEvent(fetchPartner)({
// 		// const response = await axios.post("https://dev-api.playzeon.com/api/user-management/create/organization",{
// 		email: values.email,
// 		orgName: values.orgName,
// 		phoneNumber: values.phoneNumber,
// 		firstName: values.firstName,
// 		lastName:values.lastName,
// 		role:"ROLE_ORG_ADMIN",
// 		  });
// 	//    }


				