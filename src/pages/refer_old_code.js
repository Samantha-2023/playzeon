// ========================================LoginMain.jsx====================================
// import React, { useState } from "react";
// import { Formik, useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios"; 
// import "bootstrap/dist/css/bootstrap.min.css";
// import image3 from "../images/image3.jpg";
// import logo from "../images/sport.jpg";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import sport from "../images/sport.jpg";
// import Card from "react-bootstrap/Card";
// import Form from "react-bootstrap/Form";
// import { useNavigate } from "react-router-dom";
// import Loginpartner from "./loginpartner";


// const LoginMain = ({setShowPartnerForm ,showPartnerForm}) => {
// 	// 

// 	// const togglePartnerForm = () => {
// 	// 	
// 	// };


//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

 

//   const handleSignIn = () => {
//     const requestData = {
//       userName: email,
//       password:password,
//       };
  
//     axios
//     .post("https://dev-api.playzeon.com/api/user-management/login", requestData)
//     .then((response) => {
//       console.log("Login successful", response.data);
//       navigate("/dashboard");
//     })
//     .catch((error) => {
//       console.error("Login failed", error);
//     });

	
// };

// 	return (
// 		<div>
// 						<div className="col-lg-9 ">
// 			<div className="flex flex-row">
// 				{/* <div className="basis-1/2 mt-40 " style={{color:'white'}}>
//  </div>    */}
// 				<div className="basis-3/4 ">
// 					<Card className="p-3" style={{ backgroundColor: "#EDEEF0" }}>

// 						<Form >
							
// 							<div className="mb-3 mt-3 ">
// 								<label for="exampleInputEmail1" className="form-label">
// 									Email address
// 								</label>
// 								<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
//                     onChange={(e) => {         
//                     setEmail(e.target.value); 
//                   }}
//                 value={email}
//                 />

// 							</div>
// 							<div className="mb-3">
// 								<label for="exampleInputPassword1" className="form-label">
// 									Password
// 								</label>
// 								<input type="password" className="form-control" id="exampleInputPassword1"
//                 onChange={(e) => {         
//                   setPassword(e.target.value); 
//                 }}
//                 value={password} />
// 							</div>

// 							<div className="d-grid float-right">
// 								<button className="btn btn-link mb-3" type="button" style={{ color: "red", textDecoration: "none" }}>
// 									Forgot Password?
// 								</button>
// 							</div>
// 							<div className="d-grid col-8 mx-auto mb-3">
// 								<button className="btn btn-danger" onClick={handleSignIn} size="lg" type="submit">
// 									Sign in	</button>
// 							</div>

// 							<div className="grid grid-cols-2 gap-0">
// 								<div>
// 									<p className="text-xs mb-0" style={{fontSize:"10px"}}>Don't have an account?</p>
// 									<button className="btn btn-link" type="button" style={{ color: "red", textDecoration: "none", fontSize:"15px" }}>
// 										Sign up
// 									</button>
// 								</div>

// 								<div>
// 									<p className="text-xs mb-0" style={{fontSize:"10px"}}>Are you a sports organization?</p>
// 									<button className="btn btn-link mt-0" type="button" onClick={()=>setShowPartnerForm(true)} style={{ fontSize:"15px",  color: "red", textDecoration: "none" }} >
                  
//                   Partner with us
// 									</button>
// 								</div>
// 							</div>
// 						</Form>
// 					</Card>
// 				</div>
// 			</div>
// 		</div>
// 		</div>
// 	);
// };

// export default LoginMain;

// ==============================================try function ========================================================

//   const handleChange =(event,value)=>{
//     setEmail(value);
//     setPassword(value);
//  }

//  const handleChange = (e) =>{
// 		 setEmail(e.target.value );
//      setPassword(e.target.value );
//  }


// ========================================Loginpartner.jsx=====================================================

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import image3 from "../images/image3.jpg";
// import logo from "../images/sport.jpg";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import sport from "../images/sport.jpg";
// import Card from "react-bootstrap/Card";
// import Form from "react-bootstrap/Form";
// import FontAwesome from "react-fontawesome";
// import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Icon } from "@mui/material";
// import { Link } from "react-router-dom";
// import { Formik, useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { BeakerIcon } from "@heroicons/react/24/solid";
// import Login from "./login";
// import LoginMain from "./loginmain";

// const Loginpartner = ({ showPartnerForm, setShowPartnerForm }) => {
// 	const [orgName, setOrgName] = useState("");
// 	const [firstName, setFirstName] = useState("");
// 	const [lastName, setLastName] = useState("");
// 	const [phoneNumber, setPhoneNumber] = useState("");
// 	const [email, setEmail] = useState("");

// 	//creating the request payload
// 	const handleFormSubmit = () => {
// 		const requestData = {
// 			phoneNumber: phoneNumber,
// 			orgName: orgName,
// 			firstName: firstName,
// 			lastName: lastName,
// 			email: email,
// 			role: "ROLE_ORG_ADMIN",
// 		};

// 		axios
// 			.post("https://dev-api.playzeon.com/api/user-management/create/organization", requestData)
// 			.then((response) => {
// 				console.log("Form submitted successfully", response.data);
// 				setShowPartnerForm(false);
// 				// Navigate("/someotherpage");
// 			})
// 			.catch((error) => {
// 				console.error("Form submission failed", error);
// 			});
// 	};

// 	return (
// 		<div>
// 			{/* <div className="basis-1/2 "> */}
// 			<div className="col-lg-9 ">
// 				<Card className="" style={{ backgroundColor: "#EDEEF0" }}>
// 				<div to="" style={{ color: "gray", textDecoration: "none" }} onClick={()=>setShowPartnerForm(false)}>
// 				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-4 ms-1">
// 								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
// 							</svg></div>	
// 					<Form className="gap-3 mt-2 px-2 mx-3">
// 						<div className=" d-flex gap-2 ">
// 						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-10 h-6 pt-2">
// 								<path
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 									d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
// 								/>
// 							</svg>

// 							<p className=" d-inline d-flex gap-1 font-bold" style={{ color: "black" , fontSize:"14px" }}>
// 								Please fill this short form and our team will get in touch with you shortly
// 							</p>
// 						</div>

// 						<Form.Group className="mb-3" controlId="formGrouporganizationname">
// 							<Form.Label style={{color:"black", fontSize:"13px"}}>Organization Name</Form.Label>
// 							<Form.Control
// 								className="mb-2"
// 								type="email"
// 								placeholder="Organizationname"
// 								value={orgName}
// 								onChange={(e) => setOrgName(e.target.value)}
// 							/>
// 							<Row>
// 								<Col>
// 									<Form.Label style={{color:"black", fontSize:"13px"}}>First Name</Form.Label>
// 									<Form.Control className="mb-2" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
// 								</Col>
// 								<Col>
// 									<Form.Label style={{color:"black", fontSize:"13px"}}>Last Name</Form.Label>
// 									<Form.Control className="mb-2" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
// 								</Col>
// 							</Row>
// 							<Row>
// 								<Col>
// 									<Form.Label style={{color:"black", fontSize:"13px"}}>Phone-Number</Form.Label>
// 									<Form.Control
// 										className="mb-2"
// 										placeholder="Phone-Number"
// 										value={phoneNumber}
// 										onChange={(e) => setPhoneNumber(e.target.value)}
// 									/>
// 								</Col>
// 								<Col>
// 									<Form.Label style={{color:"black", fontSize:"13px"}}>Email address</Form.Label>
// 									<Form.Control placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
// 								</Col>
// 							</Row>
// 							<div class="d-grid col-6 mx-auto mt-3 mb-3">
// 								<button class="btn  btn-secondary btn-lg " size="lg" type="button"  style={{backgroundColor:"#DE342F"}}    onClick={handleFormSubmit}>
// 									Submit
// 								</button>
// 							</div>
// 						</Form.Group>
// 					</Form>
// 				</Card>
// 			</div>
// 		 </div>
// 	);
// };

// export default Loginpartner;

// {
// 	/* {" "}  chevron-left
// 							<i class="fa-solid fa-less-than" style="color: #000000;"></i>
// 							<i class="bi bi-arrow-left-short"></i> */
// }
{
	/* <Link to="/LoginMain" >{"<"}</Link> */
}
// =====================================================================================================