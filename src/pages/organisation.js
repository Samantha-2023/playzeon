import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Formik } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addbanner from "../images/addbanner.svg";
import addimage from "../images/addimage.svg";
import Form from "react-bootstrap/Form";
import SideBar from "../components/sidebar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { OrganizationAction, OrganizationActionPutData } from "../redux/action/actionOrganisation";


const Organisation = () => {
	const dispatch = useDispatch();

    //  const data={
	// 	id:"",
	// 	title:" ",
	// 	summary:" ",

	//  };


	const data = useSelector((state) => state.organisationDataaa.organisationdata?.data);
	//get api data is here 
	// .organisationDataaa?.organisationdata?.data
	//organisationDataaa is from the reducer== index.js// organisationdata is the initial values set in reducer// 
	
	const dataacc = useSelector((state)=> state?.accountdata?.account?.data);

	const dataput = useSelector((state)=> state?. organisationPutDataaa?.initialValuesPut?.data);
     console.log(data);

     console.log(dataacc?.orgId,"888888888888888")

	// const startTimeRef = useRef();
	const [showstarttime, setShowStartTime] = useState(null);
	const [showendtime, setShowEndTime] = useState(null);
	const [date, setDate] = useState();
	const [startTime, setStartTime] = useState(null);
	const [endTime, setEndTime] = useState(null);

	const [name, setName] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zip, setZip] = useState("");
	const [phonenumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [businesshours, setBusinessHours] = useState("");
	const [timezone, setTimeZone] = useState(" ");

	const [chooseDays, setChooseDays] = useState([]);
	const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	
	// logic for displaying the time and weekdays 

	const [selectedDays, setSelectedDays] = useState([]);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);


	const initialValues = {
		id: " ",
		title: " ",
		summary: " ",
		createdAt: " ",
		updatedAt: " ",
		phoneNumber: " ",

		suite: " ",
		email: " ",
		streetAddress: " ",
		city: " ",
		stateProvince: " ",
		zipCode: " ",
		organizationUsers: "",
		organizationHours: [
			{ id: "", weekday: "", startTime: "", endTime: "", createdAt: "", updatedAt: "" },
			{
				id: "",
				weekday: "",
				startTime: "",
				endTime: "",
				createdAt: "",
				updatedAt: "",
			},
		],
		organizationPhotos: [
			{
				id: "",
				title: "",
				url: "",
				tags: "",
				createdAt: "",
				updatedBy: "",
			},
		],
		organizationvideos: [],
		centers: "",
	};

	const validationSchema = Yup.object().shape({
		phoneNumber: Yup.string()
			.matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number")
			.required("Phone number is required"),

		email: Yup.string()
			.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/, "Enter a valid email")
			.required("Enter a valid mail id"),

		title: Yup.string().min(2, "Name is required !").max(50, "Too Long!").required("Name is Required"),

		streetAddress: Yup.string().min(2, " Street is required!").max(50, "Too Long!").required("Street  is Required"),

		city: Yup.string().min(2, "City is required!").max(50, "Too Long!").required("City is Required"),

		stateProvince: Yup.string().min(2, "State is required!").max(50, "Too Long!").required("State is Required"),

		zipCode: Yup.string().required("Zip code is required"),
	});

	const submitForm = async (values) => {
		try {
			
			dispatch(OrganizationActionPutData(values))  
			//https://dev-api.playzeon.com/api/v1/organizations/64014
		} 
		catch(error) {
			console.error("Form submission failed", error);
		}
	};

	const formik = useFormik({
		initialValues: data,
		validationSchema: validationSchema,
		onSubmit: submitForm,
	});

	console.log(formik.errors?.email);
	console.log(formik.errors?.name);
	console.log(formik.errors?.phonenumber);

	const handleDayChange = (day) => {
		if (chooseDays.includes(day)) {
			setChooseDays(chooseDays.filter((chooseDays) => chooseDays !== day));
			setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
		} else {
			setChooseDays([...chooseDays, day]);
			setSelectedDays([...selectedDays, day]);
		}
	};

	const handleTimeChange = (time) => {
		setStartTime(time);
		setShowStartTime(time);
		setSelectedStartTime(time);
	};

	const handleEndTimeChange = (time) => {
		setEndTime(time);
		setShowEndTime(time);
		setSelectedEndTime(time);
	};

// console.log(data,"findout");

// changes  done here 
	useEffect(() => {

		dispatch(OrganizationAction(dataacc.orgId));
	}, []);


	// useEffect(() => {
	// 	if (orgId) {
	// 	  console.log("Organization ID:", orgId);
	// 	} else {
	// 	  dispatch(OrganizationAction());
	// 	}
	//   }, [dispatch, orgId]);






	return (
		<div>
			<div className="row">
				<div className="col-lg-2">
					<SideBar />
				</div>
				<div className="col-lg-10 ">
					<div className="card w-100" style={{ backgroundColor: "#edeef0" }}>
						<div className="card-body">
							<Form className="form-control form-control-sm" onSubmit={formik.handleSubmit}>
								<div classname="row">
									<div className="col-xl-4">
										<label htmlFor="name" className="form-label">
											Organization name
										</label>
										<label>
											<span className="text-danger">*</span>
										</label>
										<input
											className="form-control"
											id="inputname"
											placeholder=""
											name="title"
											type="text"
											onChange={formik.handleChange}
											value={formik?.values?.title}
										/>
									</div>
								</div>
								{formik?.touched?.title && formik?.errors?.title?.length && <p className="error-text">{formik?.errors?.title}</p>}

								{/*  */}
								<div className="col-12 mt-3">
									<h6 className="text-dark">Address & timings</h6>
									<hr />
								</div>
								{/*  */}
								<div className="row">
									<div class="col-xl-4  col-md-6 mt-2">
										<label htmlFor="street" className="form-label">
											Street
										</label>
										<label>
											<span className="text-danger">*</span>
										</label>
										<input
											className="form-control"
											id="inputname"
											placeholder=""
											name="streetAddress"
											type="text"
											onChange={formik.handleChange}
											value={formik?.values?.streetAddress}
										/>
									</div>

									{formik?.touched?.streetAddress && formik?.errors?.streetAddress?.length && (
										<p className="error-text">{formik?.errors?.streetAddress}</p>
									)}

									<div class="col-xl-1  col-md-3 mt-2">
										<label htmlFor="suite" className="form-label">
											Suite
										</label>
										<input type="text" className="form-control" id="inputname" placeholder="" />
									</div>

									<div class="col-xl-2  col-md-4 mt-2">
										<label htmlFor="city" className="form-label">
											City
										</label>
										<label>
											<span className="text-danger">*</span>
										</label>
										<input
											className="form-control"
											id="inputname"
											placeholder=""
											name="city"
											type="text"
											onChange={formik.handleChange}
											value={formik?.values?.city}
										/>
										{formik?.touched?.city && formik?.errors?.city?.length && <p className="error-text">{formik?.errors?.city}</p>}
									</div>
									{/* { formik.touched.city && formik.errors?.city?.length && (
  <p className="error-text">{formik.errors?.city}</p>)} */}

									<div class="col-xl-2  col-md-4 mt-2">
										<label htmlFor="state" className="form-label">
											State
										</label>
										<label>
											<span className="text-danger">*</span>
										</label>
										<input
											className="form-control"
											id="inputname"
											placeholder=""
											name="stateProvince"
											type="text"
											onChange={formik.handleChange}
											value={formik?.values?.stateProvince}
										/>

										{formik?.touched?.stateProvince && formik?.errors?.stateProvince?.length && (
											<p className="error-text">{formik?.errors?.stateProvince}</p>
										)}
									</div>

									<div class="col-xl-2  col-md-4 mt-2">
										<label htmlFor="zip" className="form-label">
											Zip
										</label>
										<label>
											<span className="text-danger">*</span>
										</label>
										<input
											className="form-control"
											id="inputname"
											placeholder=""
											name="zipCode"
											type="text"
											onChange={formik.handleChange}
											value={formik?.values?.zipCode}
										/>
										{formik?.touched?.zipCode && formik?.errors?.zipCode?.length && <p className="error-text">{formik?.errors?.zipCode}</p>}
									</div>
								</div>
								{/*  */}

								<div className="row mt-4">
									<div class="col-sm-4">
										<label htmlFor="phonenumber" className="form-label">
											Phone number
										</label>
										<label>
											<span className="text-danger">*</span>
										</label>
										<input
											className="form-control"
											id="inputname"
											placeholder=""
											name="phoneNumber"
											type="number"
											onChange={formik.handleChange}
											value={formik?.values?.phoneNumber}
										/>
									</div>

									{formik?.touched?.phoneNumber && formik?.errors?.phoneNumber?.length && (
										<p className="error-text">{formik?.errors?.phoneNumber}</p>
									)}

									<div class="col-sm-4">
										<label for="email" className="form-label">
											Email
										</label>
										<label>
											<span className="text-danger">*</span>
										</label>
										<input
											className="form-control"
											id="input_AddLocationEmail"
											placeholder=""
											name="email"
											type="text"
											onChange={formik.handleChange}
											value={formik?.values?.email}
										/>
										{formik?.touched?.email && formik?.errors?.email?.length && <p className="error-text">{formik?.errors?.email}</p>}
									</div>
								</div>

								{/*  */}

								<div className="row mt-4">
									<label className="title">
										Business hours
										<label>
											<span className="text-danger">*</span>
										</label>
									</label>
								</div>
								{/*  */}

								<div className="row">
									<div className="col-lg-7 d-flex flex-row pe-0">
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
									</div>
								</div>

								{/*  */}
								<div className="row mt-4">
									<div className="col-lg-12 my-2 d-flex ">
										<div className="d-flex gap-3 align-items-baseline mt-2">
											<div className="">
												<DatePicker
													className="form-control ps-1 cursor-pointer "
													popperPlacement="bottom"
													selected={startTime}
													onChange={(time) => setStartTime(time)}
													showTimeSelect
													showTimeSelectOnly
													timeFormat="h:mm aa"
													timeIntervals={30}
													timeCaption="Time"
													dateFormat="h:mm aa"
													placeholderText="Please select start time"
												/>
												{/* <div className="arrow-select">
                          <Icon icon="fe:arrow-down" />
                        </div> */}
											</div>
											<div className="">
												<DatePicker
													className="form-control ps-1 cursor-pointer "
													popperPlacement="bottom"
													selected={endTime}
													onChange={(time) => setEndTime(time)}
													showTimeSelect
													showTimeSelectOnly
													timeFormat="h:mm aa"
													timeIntervals={30}
													timeCaption="Time"
													dateFormat="h:mm aa"
													placeholderText="Please select end time"
												/>
												{/* <div className="arrow-select">
                          <Icon icon="fe:arrow-down" />
                          <Icon icon="gridicons:add" color="#2d77d2" />
                        </div>  */}
											</div>
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
								</div>

								{/*  */}
								<div className="row mt-5 mb-0">
									<h6 className=" text-dark mb-0" style={{ fontSize: "14px", fontFamily: "PT Sans,sans-serif" }}>
										Upload image
									</h6>
								</div>
								<hr className="mt-0" />
								<div className="row mt-2">
									<div className="col-sm-3">
										<div className="row text-muted mb-2">
											<div className="col-xl-6 title " style={{ fontsize: "89%" }}>
												Banner image
											</div>
											<div className="col-xl-6  text-end title  mt-1" style={{ fontSize: "70%" }}>
												Min:800px x 600px
											</div>
										</div>
										<div>
											<img src={addbanner} className="w-100 bannerimage" alt="browse to add images " style={{ width: "175px" }} />
										</div>
										<div className=" mt-2 btn btn-outline-primary px-xl-4 px-lg-2 px-md-0  browse">
											Browse
											<input type="file" accept="image/png, image/gif, image/jpeg" className="hide_file d-none" />
										</div>
									</div>
									{/*  */}

									<hr className="mt-2" />
									<div className="justify-content end" style={{ fontSize: "80%" }}>
										<button
											className=" btn-sm float-right me-3  align-self-center  btn btn-danger "
											style={{ backgroundColor: "red", color: "white" }}
										>
											Update
										</button>
										<button
											type="submit"
											className=" btn-sm float-right bg-white  border-0 me-3  align-self-center btn btn-danger "
											style={{ color: "red" }}
										>
											Cancel
										</button>
									</div>
								</div>
							</Form>

							{/* card div below */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Organisation;



{/*
const submitForm = async (values) => {
		try {
			const orgId = dataacc?.orgId;

			if (!orgId) {
				console.error('Organization ID is missing.');
				return;
			  }

			const response = await axios.put(`https://dev-api.playzeon.com/api/v1/organizations/${orgId}`, values);
                console.log('PUT Request Response:', response.data);

			//dispatch( OrganizationAction(values))  put api call pannum 
			//https://dev-api.playzeon.com/api/v1/organizations/64014
		} catch(error) {
			console.error("Form submission failed", error);
		}
	};
*/}