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

// import { FaCentercode } from "react-icons/fa"

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
//  add center

// <Col className="mx-3 ">
// 							<div
//               // xs={12} sm={6} md={4} lg={4}
//                className="text-center mx-auto">

// 								<Card className="pt-5 pb-5 " style={{ borderStyle: "dashed", borderColor: "lightgray", borderWidth: "3px", width: "18rem" }}>
// 									<div className="d-flex justify-content-center ">
// 										<img src={addplus} alt="logo" style={{ width: "50px" }}
// 										onClick={()=>navigate("/addcenter")}

// 										/>
// 									</div>
// 									<h6 style={{ fontSize: "15px", fontWeight: "lighter" }}>Add center</h6>
// 								</Card>
// 							</div>
// 						</Col>

{
	/* <Col xs={12} sm={6} md={4} lg={4} >
							<div className="text-center">
								<Card className="border border-dotted  mb-3" style={{ width: "18rem", fontWeight: "lighter" }}>
									<div style={{ backgroundColor: "grey", fontWeight: "lighter" }}>
										<Card.Header>Header</Card.Header>
									</div>
									<Card.Body>
										This is some text within a card body. This is some text within a card body. This is some text within a card body. This
										is some text within a card body.
									</Card.Body>
								</Card>
							</div>
						</Col> */
}

// ////////////////////////////////////facilities second modal

{
	/* <Modal  
			 show={showAddSportsModal}
			  onHide={() => setShowAddSportsModal(false)}
			 >
				<div style={{ backgroundColor: "#edeef0" }}>
					<Modal.Header closeButton>
						<Modal.Title style={{ fontSize: "13px" }}> Add Tennis court </Modal.Title>
					</Modal.Header>
					<Modal.Body style={{ overflow:"auto"}} >
						<div className="bg-lightgrey">
							<form>
								<div className="row">
									<div className="col-sm-12">
										<label className="text-muted-50 col-12  labelname fw-bold mb-0">Name</label>
										<hr className="pt-0  mt-2" />
									</div>
								</div>

								<div className="row">
									<div className="col-6">
										<input
											type="text"
											name="title"
											maxLength={50}
											className="form-control"
											id="input_addfacilityname"
											aria-describedby="name"
										/>
									</div>

									<div className="col-6">
										<input className="form-check-input " type="checkbox" value="checkbox" />
										&nbsp;
										<label className="form-check-label">Open to Athlitik users</label>
									</div>
								</div>

								<div className="row mt-3">
									<div className="col-sm-12">
										<label className="text-muted-50 col-12 labelname  fw-bold mb-0">Timings</label>
										<hr className="pt-0  mt-2" />
									</div>
								</div>

								<div className="row d-flex flex-column  ">
									<div className="col-sm-12  d-flex column-gap-3">
										{daysOfWeek.map((day) => (
											<div key={day} className="form-check form-check-inline mt-2 me-2">
												<input
													className="form-check-input"
													type="checkbox"
													id={`day-${day}`}
													value={day}
													checked={chooseDays.includes(day)}
													onChange={() => handleDayChange(day)}
												/>
												<label className="form-check-label" htmlFor={`day-${day}`}>
													{day}
												</label>
											</div>
										))}

										<div className="">
											<DatePicker
												className="form-control ps-1 cursor-pointer datepicker-size"
												popperPlacement="bottom"
												selected={startTime}
												onChange={(time) => setStartTime(time)}
												showTimeSelect
												showTimeSelectOnly
												timeFormat="h:mm aa"
												timeIntervals={30}
												timeCaption="Time"
												dateFormat="h:mm aa"
												placeholderText="Start time"
											/>
										</div>

										<div className="">
											<DatePicker
												className="form-control ps-1 cursor-pointer datepicker-size "
												popperPlacement="bottom"
												selected={endTime}
												onChange={(time) => setEndTime(time)}
												showTimeSelect
												showTimeSelectOnly
												timeFormat="h:mm aa"
												timeIntervals={30}
												timeCaption="Time"
												dateFormat="h:mm aa"
												placeholderText="End time"
											/>
										</div>
										<div className="d-flex align-items-center gap-0">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="13"
												height="13"
												fill="currentColor"
												class="bi bi-plus-circle-fill"
												viewBox="0 0 16 16"
											>
												<path
													d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
													style={{ backgroundColor: "#2d77d2", color: "#2d77d2" }}
												/>
											</svg>
											<small className=" d-flex text-primary" style={{ fontSize: "13px" }}>
												Add
											</small>
										</div>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-sm-12">
										<label className="text-muted-50 col-12 labelname  fw-bold mb-0">Reservation attributes</label>
										<hr className="pt-0  mt-2" />
									</div>
								</div>

								<div className="row">
									<div className="col-sm-4 align-self-center">
										<label className="text-muted reservationlabelname">Players allowed</label>
									</div>
									<div className="col-sm-3 mb-1">
										<input
											placeholder="Min"
											maxLength={30}
											name="reservationAttribute"
											type="number"
											className="form-control form-control"
										/>
									</div>
									<div className="col-sm-3">
										<input
											placeholder="Max"
											maxLength={30}
											name="reservationAttribute"
											type="number"
											className="form-control form-control"
										/>
									</div>
									<div className="col-sm-2"></div>
								</div>

								<div className="row">
									<div className="col-sm-4 align-self-center">
										<label className="text-muted reservationlabelname">Duration allowed(hours)</label>
									</div>
									<div className="col-sm-3 mb-1">
										<input
											placeholder="Min"
											maxLength={30}
											name="reservationAttribute"
											type="number"
											className="form-control form-control"
										/>
									</div>
									<div className="col-sm-3">
										<input
											placeholder="Max"
											maxLength={30}
											name="reservationAttribute"
											type="number"
											className="form-control form-control"
										/>
									</div>
									<div className="col-sm-2"></div>
								</div>

								<div className="row">
									<div className="col-sm-4 align-self-center">
										<label className="text-muted reservationlabelname">Advance booking window(hours)</label>
									</div>
									<div className="col-sm-3">
										<input
											placeholder="Min"
											maxLength={30}
											name="reservationAttribute"
											type="number"
											className="form-control form-control"
										/>
									</div>
									<div className="col-sm-3">
										<input
											placeholder="Max"
											maxLength={30}
											name="reservationAttribute"
											type="number"
											className="form-control form-control"
										/>
									</div>
									<div className="col-sm-2"></div>
								</div>

								<div className="row mt-3">
									<div className="col-sm-12">
										<label className="text-muted-50 col-12 labelname  fw-bold mb-0">Court highlights </label>
										<hr className="pt-0  mt-2" />
									</div>
								</div>

								<div className="row">
									<div className="col-sm-12">
										<label className="text-muted"> Features</label>
									</div>
								</div>
								<div className="row">
									<div className="col-6">
										<input maxLength={50} type="text" className="form-control" />
									</div>
									<div className="col-sm-2" style={{ opacity: "0.5", cursor: "pointer" }}>
										<div className=" d-flex align-items-center gap-0">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="13"
												height="13"
												fill="currentColor"
												class="bi bi-plus-circle-fill"
												viewBox="0 0 16 16"
											>
												<path
													d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
													style={{ backgroundColor: "#2d77d2", color: "#2d77d2" }}
												/>
											</svg>
											<small className=" d-flex text-primary" style={{ fontSize: "13px" }}>
												Add
											</small>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-sm-12">
										<label className="text-muted">Images</label>
									</div>
								</div>
								<div className="row">
									<div className="w-100">
										<img src={addimage} className="addimage p-3 mt-2" alt="addimage" />
										<input type="file" accept="image/png, image/gif, image/jpeg" className="hide_file d-none" />
									</div>
								</div>
							</form>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<div className="justify-content end" style={{ fontSize: "80%" }}>
							<button className=" btn-sm float-right me-3  align-self-center  btn btn-danger " style={{ backgroundColor: "red", color: "white" }}>
								Save
							</button>
							<button
								type="submit"
								className=" btn-sm float-right bg-white border-0 me-3  align-self-center btn btn-danger "
								style={{ color: "red" }}
							>
								Cancel
							</button>
						</div>
					</Modal.Footer>
				</div>
			</Modal> */
}

{
	/* show={showAddSportsModal} onHide={() => setShowAddSportsModal(false)} */
}

////////////// add center form page refering old cde //////////////////////////////////////////////
{
	// import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
	/* <div className="react-datepicker-wrapper">
<div className="react-datepicker-container">
  <span  role="alert" aria-live="polite" className='react-datepicker_aria-live'>
Selected time:
  </span>
<input type="text" placeholder='Please select end time' className="form-control ps-1" value/>
</div> */
}

// =======================================
// <div className="form-check form-check-inline mt-2 me-2">
// 									<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
// 									<label className="form-check-label" for="inlineCheckbox1">
// 										Sun
// 									</label>
// 								</div>
// 								<div className="form-check form-check-inline mt-2 me-2">
// 									<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
// 									<label className="form-check-label" for="inlineCheckbox2">
// 										Mon
// 									</label>
// 								</div>
// 								<div className="form-check form-check-inline mt-2 me-2">
// 									<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
// 									<label className="form-check-label" for="inlineCheckbox2">
// 										Tue
// 									</label>
// 								</div>
// 								<div className="form-check form-check-inline mt-2 me-2">
// 									<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
// 									<label className="form-check-label" for="inlineCheckbox2">
// 										Wed
// 									</label>
// 								</div>
// 								<div className="form-check form-check-inline mt-2 me-2">
// 									<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
// 									<label className="form-check-label" for="inlineCheckbox2">
// 										Thu
// 									</label>
// 								</div>
// 								<div className="form-check form-check-inline mt-2 me-2">
// 									<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
// 									<label className="form-check-label" for="inlineCheckbox2">
// 										Fri
// 									</label>
// 								</div>
// 								<div className="form-check form-check-inline mt-2 me-2">
// 									<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
// 									<label className="form-check-label" for="inlineCheckbox2">
// 										Sat
// 									</label>
// 								</div>
//  =====================time picker =======================================
{
	/* <div className="react-datepicker-wrapper">
  <div className="react-datepicker_input-container  ">
  <span role="alert" aria-live="polite" class="react-datepicker_aria-live"></span>
    <input type="text" placeholder='Please select start time' className="form-control ps-1 react-datepicker-ignore-onclickoutside" /> 
    </div></div> */
}
{
	/* <TimePickerComponent  placeholder="Select a start time" style={{borderRadius:"1px solid"}}>  </TimePickerComponent> */
}

// -----------------------------------------
{
	/* <div className="react-datepicker-wrapper">
  <div className="react-datepicker_input-container"> 
  <span role="alert" aria-live="polite" class="react-datepicker_aria-live"></span>
     <input type="text" placeholder='Please select end time' className="form-control ps-1" /> 
    </div></div>  */
}
// ======================================================================================

// <DatePicker
// 								className="form-control ps-1"
// 								ref={startTimeRef}
// 								popperPlacement="bottom"
// 								selected={showstarttime}
// 								onChange={(time) => handleTimeChange(time)}
// 								showTimeSelect
// 								showTimeSelectOnly
// 								timeFormat="h:mm aa"
// 								timeIntervals={30}
// 								timeCaption="Time"
// 								dateFormat="h:mm aa"
// 								placeholderText="Please select start time"
// 							/>

{
	/*  */
}
// &nbsp; &nbsp;

// <DatePicker
// 	className="form-control ps-1"
// 	ref={startTimeRef}
// 	popperPlacement="bottom"
// 	selected={showendtime}
// 	onChange={(time) => handleEndTimeChange(time)}
// 	showTimeSelect
// 	showTimeSelectOnly
// 	timeFormat="h:mm aa"
// 	timeIntervals={30}
// 	timeCaption="Time"
// 	dateFormat="h:mm aa"
// 	placeholderText="Please select end time"
// />
// <div className="ms-1 mt-2 text-secondary d-flex add">
// 	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-2 -2 24 24">
// 		<g transform="rotate(-90 10 10)">
// 			<path
// 				fill="#2d77d2"
// 				d="M11 11h4a1 1 0 0 0 0-2h-4V5a1 1 0 0 0-2 0v4H5a1 1 0 1 0 0 2h4v4a1 1 0 0 0 2 0v-4zm-1 9C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10z"
// 			/>
// 		</g>
// 	</svg>
// 	Add
// </div>
