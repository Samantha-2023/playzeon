import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import addbanner from "../images/addbanner.svg";
import "../components/playzeon.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addimage from "../images/addimage.svg";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";
import Container from "react-bootstrap/Container";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AddCenterAction, PhotosAddCenterAction } from "../redux/action/actionAddCenter";
import { useNavigate } from "react-router-dom";
import "../components/playzeon.css";
import moment from "moment";
import { OrganizationAction } from "../redux/action/actionOrganisation";

const AddCenter = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const startTimeRef = useRef();

	const [showstarttime, setShowStartTime] = useState(null);
	const [showendtime, setShowEndTime] = useState(null);

	const [date, setDate] = useState();
	// above use state

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

	const [selectedFile, setselectedFile] = useState("");

	const [timezone, setTimeZone] = useState(" ");

	const [chooseDays, setChooseDays] = useState([]);

	const [selectedImageUrl, setSelectedImageUrl] = useState(null);

	const [selectedTime, setSelectedTime] = useState(null);
	const [selectedWeekdays, setSelectedWeekdays] = useState([]);

	const [selectedDaysAndTimes, setSelectedDaysAndTimes] = useState([]); // Add state for selected days and times
     
    const[selectedPhotos, setSelectedPhotos]=useState([]);



	const daysOfWeek = [
		{ id: 1, shortName: "Sun", fullName: "Sunday" },
		{ id: 2, shortName: "Mon", fullName: "Monday" },
		{ id: 3, shortName: "Tue", fullName: "Tuesday" },
		{ id: 4, shortName: "Wed", fullName: "Wednesday" },
		{ id: 5, shortName: "Thu", fullName: "Thursday" },
		{ id: 6, shortName: "Fri", fullName: "Friday" },
		{ id: 7, shortName: "Sat", fullName: "Saturday" },
	];

	//this selector is for the post api addcenter form
	const datapostapi = useSelector((state) => state?.addCenterData?.addCenter);
	console.log(datapostapi?.data?.id, "kkkkk");

	const dataphotos = useSelector((state) => state?.photosData?.photos);
	//post  api data is here
	//photosData is from the reducer== index.js//  photos  is the initial values set in reducer//

	const dataacc = useSelector((state) => state?.accountdata?.account?.data);
	// to get the org id from the organisation i used this selector


	console.log(dataphotos,"uploadingphotostosee");




	const handleAddButtonClick = () => {
		if (chooseDays.length > 0 && startTime && endTime) {
			const selectedDayAndTime = {
				days: chooseDays,
				startTime: startTime,
				endTime: endTime,
			};
			setSelectedDaysAndTimes([...selectedDaysAndTimes, selectedDayAndTime]);
			setChooseDays([]);
		} else {
			alert("Please select at least one day, start time, and end time");
		}
	};

	//  function for uploading pictures
	const fileInputRef = useRef(null);
	console.log(fileInputRef, "refffff");

	const handleBrowseClick = () => {
		fileInputRef.current.click();
	};

	const handleImageChange = (e) => {
		console.log(e.target.files);
		setselectedFile(e.target.files[0]); //get the first selected file
		// to display the choosen image
		 const selectedFile = e.target.files[0];
		setselectedFile(selectedFile);

		const imageUrl = URL.createObjectURL(selectedFile);
		console.log("Image URL:", imageUrl);
		setSelectedImageUrl(imageUrl);
		console.log("Selected file:", selectedFile);

		console.log("changing pictures");
	};

	const orgId = JSON.parse(localStorage.getItem("orgId"));

	const orgIdd = JSON.parse(localStorage.getItem("account"));

	console.log(orgIdd, "orgIdd  from account local storage");

	const centerId = localStorage.getItem("centerId");

	const initialValues = {
		displayName: false,
		title: " ",
		streetAddress: " ",
		suite: " ",
		city: " ",
		stateProvince: " ",
		zipCode: " ",
		phoneNumber: " ",
		email: " ",
		photos: [],
		organization: {
			id: orgIdd?.orgId,
		},
		timezone: {
			id: " ",
		},
		centerHours: [
			{
				weekday: selectedWeekdays.join(","),
				startTime: startTime,
				endTime: endTime,
				createdAt: moment().utc(),
				updatedAt: moment().utc(),
			},
		],
		createdAt: moment().utc(),
		updatedAt: moment().utc(),
	};

	console.log(dataacc, "iddd");

	const validationSchema = Yup.object().shape({
		phoneNumber: Yup.string()
			.matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number")
			.required("Phone number is required"),

		email: Yup.string()
			.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/, "Enter a valid email")
			.required("Enter a valid mail id"),

		displayName: Yup.string().min(2, "Name is required !").max(50, "Too Long!").required("Name is Required"),

		streetAddress: Yup.string().min(2, " Street is required!").max(50, "Too Long!").required("Street  is Required"),

		city: Yup.string().min(2, "City is required!").max(50, "Too Long!").required("City is Required"),

		stateProvince: Yup.string().min(2, "State is required!").max(50, "Too Long!").required("State is Required"),

		zipCode: Yup.string().required("Zip code is required"),
		timezone: Yup.number().required("Time zone is required"),
	});

	console.log(dataacc?.orgId, "orgidddddddd");

	const submitForm = (values) => {
		console.log("values:::", values);
		try {
			dispatch(AddCenterAction(values, selectedFile));
		} catch (error) {
			console.error("Form submission failed", error);
		}
	};

	useEffect(() => {
		dispatch(PhotosAddCenterAction(formik.values.photos, datapostapi?.data?.id, selectedFile));
	}, [datapostapi?.data?.id]);

	// useEffect(() => {
	// 	if (!formik.isSubmitting && formik.submitCount > 0 && !Object.keys(formik.errors).length)
	// 	 {
	// 		dispatch(PhotosAddCenterAction(photos, data?.centerId));
	// 	}
	// }, [formik.isSubmitting, formik.submitCount, formik.errors, dispatch, photos, data?.centerId]);

	console.log(dataacc, "++++++++++++++++++++");

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: submitForm,
	});

	console.log(formik.errors?.email);
	console.log(formik.errors?.name);
	console.log(formik.errors?.phonenumber);

	console.log(formik);

	useEffect(() => {
		// Update centerHours whenever selectedWeekdays, startTime, or endTime change
		formik.setFieldValue("centerHours", [
			{
				weekday: selectedWeekdays.join(","),
				startTime: startTime,
				endTime: endTime,
				createdAt: moment().utc(),
				updatedAt: moment().utc(),
			},
		]);
	}, [selectedWeekdays, startTime, endTime]);

	const handleDayChange = (day) => {
		if (selectedWeekdays.includes(day.fullName)) {
			setSelectedWeekdays(selectedWeekdays.filter((selectedDay) => selectedDay !== day.fullName));
		} else {
			setSelectedWeekdays([...selectedWeekdays, day.fullName]);
		}

		if (chooseDays.includes(day.shortName)) {
			setChooseDays(chooseDays.filter((chooseDays) => chooseDays !== day.shortName));
		} else {
			setChooseDays([...chooseDays, day.shortName]);
		}

		console.log("Selected weekdays:", selectedWeekdays);
	};

	const handleTimeChange = (time) => {
		setShowStartTime(time);
		// setStartTime(time);
		console.log("Selected start time:", time);
	};
	const handleEndTimeChange = (time) => {
		setShowEndTime(time);
		// setEndTime(time);

		console.log("Selected end time:", time);
	};

	return (
		<div>
			{/* <Container className="flex-fill"><div className="d-flex">*/}

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
											Name
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
											value={formik.values.title}
										/>
									</div>
								</div>
								{formik.touched.title && formik.errors?.title?.length && <p className="error-text">{formik.errors?.title}</p>}
								{/* 1st row in form- name */}
								<div className="col-12 mt-1">
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											id="gridCheck"
											name="displayName"
											onChange={formik.handleChange}
											value={formik.values.displayName}
										/>
										<label className="form-check-label" for="gridCheck">
											Display this name to Athlitik users
										</label>
									</div>
								</div>

								{/*  */}
								<div className="col-12 mt-4">
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
											value={formik.values.streetAddress}
										/>
									</div>

									{formik.touched.streetAddress && formik.errors?.streetAddress?.length && (
										<p className="error-text">{formik.errors?.streetAddress}</p>
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
											value={formik.values.city}
										/>
										{formik.touched.city && formik.errors?.city?.length && <p className="error-text">{formik.errors?.city}</p>}
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
											value={formik.values.stateProvince}
										/>

										{formik.touched.stateProvince && formik.errors?.stateProvince?.length && (
											<p className="error-text">{formik.errors?.stateProvince}</p>
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
											value={formik.values.zipCode}
										/>
										{formik.touched.zipCode && formik.errors?.zipCode?.length && <p className="error-text">{formik.errors?.zipCode}</p>}
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
											value={formik.values.phoneNumber}
										/>
									</div>

									{formik.touched.phoneNumber && formik.errors?.phoneNumber?.length && (
										<p className="error-text">{formik.errors?.phoneNumber}</p>
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
											value={formik.values.email}
										/>
										{formik.touched.email && formik.errors?.email?.length && <p className="error-text">{formik.errors?.email}</p>}
									</div>
								</div>

								<div className="row mt-4">
									<div className="col-sm-4">
										<label for="timezone" className="form-label">
											Time Zone
										</label>
										<label>
											<span className="text-danger">*</span>
										</label>
										<select
											class="form-select form-select-sm"
											aria-label="Small select example"
											name="timezone"
											//  type="number"
											onChange={formik.handleChange}
											value={formik.values.timezone}
										>
											<option selected>Select the Time Zone</option>
											<option value={1}>Alaska Time</option>
											<option value={2}>Central Time</option>
											<option value={3}>Eastern Time</option>
											<option value={4}>Pacific Time</option>
											<option value={5}>Hawaii Time</option>
											<option value={6}>Mountain Time</option>
										</select>
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
								{/*  days of the week and time should display div */}

								<div className="row">
									<div className="col-lg-7 d-flex flex-row pe-0">
										{daysOfWeek.map((day) => (
											<div key={day} className="form-check form-check-inline  labelweek mt-2 me-2">
												<input
													className="form-check-input"
													type="checkbox"
													id={`day-${day.id}`}
													value={day.fullName}
													checked={chooseDays.includes(day.shortName)}
													onChange={() => handleDayChange(day)}
												/>
												<label className="form-check-label" htmlFor={`day-${day.shortName}`}>
													{day.shortName}
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
												<small className="d-flex text-primary cursor-pointer ADDaddcenter" onClick={handleAddButtonClick}>
													Add
												</small>
											</div>
										</div>
									</div>
								</div>

								<div className="row d-flex flex-column">
									<div className="col-sm-12 displaytimefacilityform">
										{selectedDaysAndTimes.length > 0 && (
											<div>
												{/* <h5>Selected Days and Times:</h5> */}
												<ul>
													{selectedDaysAndTimes.map((selectedDayAndTime, index) => (
														<li key={index}>
															{`${selectedDayAndTime.days.join(", ")}: ${selectedDayAndTime.startTime.toLocaleTimeString([], {
																hour: "2-digit",
																minute: "2-digit",
															})} - ${selectedDayAndTime.endTime.toLocaleTimeString([], {
																hour: "2-digit",
																minute: "2-digit",
															})}`}
															{/* {`${selectedDayAndTime.days.join(", ")}: ${selectedDayAndTime.startTime} - ${selectedDayAndTime.endTime}`} */}
														</li>
													))}
												</ul>
											</div>
										)}
									</div>
								</div>

								{/*  */}
								<div className="row mt-5 mb-0">
									<h6 className=" text-dark mb-0 addcenteruploadimage">Upload image</h6>
								</div>
								<hr />
								<div className="row mt-2">
									<div className="col-sm-3">
										<div className="row text-muted mb-2">
											<div className="col-xl-6 title addcenterbannerimage ">Banner image</div>
											<div className="col-xl-6  text-end title  mt-1" style={{ fontSize: "70%" }}>
												Min:800px x 600px
											</div>
										</div>
										<div>
											<img
												src={selectedImageUrl || addbanner}
												className="w-100 bannerimage"
												alt="browse to add images "
												style={{ width: "175px" }}
											/>
										</div>

										<div className=" mt-2 btn btn-outline-primary px-xl-4 px-lg-2 px-md-0  browse" onClick={handleBrowseClick}>
											Browse
											<input
												type="file"
												ref={fileInputRef}
												accept="image/png, image/gif, image/jpeg"
												className="d-none"
												onChange={handleImageChange}
												// className="browse"
											/>
										</div>
									</div>

									<div className=" col-5 ps4">
										<div className="row text-muted ps-2">
											<div className="small title">
												Add more images
												<label>
													<span className="text-danger">*</span>
												</label>
												<label>
													<span style={{ fontSize: "70%" }}>&nbsp; Min : 300px x 300px</span>
												</label>
											</div>
											{/* <div className="title ms-3 mt-1" style={{fontSize:"70%"}}>Min : 300px x 300px</div> */}
										</div>
										<div className="w-100">
											<img src={addimage} className="addimage p-3 mt-2" alt="addimage" />
											<input type="file" accept="image/png, image/gif, image/jpeg" className="hide_file d-none" />
										</div>
									</div>

									<hr className="mt-2" />
									<div className="justify-content end" style={{ fontSize: "80%" }}>
										<button
											type="submit"
											className=" btn-sm float-right me-3  align-self-center  btn btn-danger "
											style={{ backgroundColor: "red", color: "white", cursor: "pointer" }}
											// onClick={handleApi}
											// onClick={()=>dispatch(PhotosAddCenterAction())}
										>
											Save
										</button>
										<button
											type="submit"
											className=" btn-sm float-right bg-white border-0 me-3  align-self-center btn btn-danger "
											style={{ color: "red" }}
											onClick={() => navigate("/dashboard")}
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
			{/* </Container> */}
			{/* fragment div below */}
		</div>
	);
};

export default AddCenter;

// const submitForm = async (values) => {
// 	try {
// 	  // Creating FormData object
// 	  const formData = new FormData();
// 	  // Appending form values to FormData
// 	  Object.keys(values).forEach((key) => {
// 		formData.append(key, values[key]);
// 	  });
// 	  // Appending the selected file to FormData
// 	  formData.append("photos", selectedFile);

// 	  // Dispatching action with FormData
// 	  dispatch(AddCenterAction(formData));
// 	} catch (error) {
// 	  console.error("Form submission failed", error);
// 	}
//   };

// function handleApi(){

// 	const formData = new FormData(); //formdata object
//     formData.append("centerId",id);
//     formData.append("userId", userId);
//     formData.append(`tags_${index}`, "banner");
// 	// formData.append(`files_${index}`,);

// 	const config = {
// 		headers: { "content-type": "multipart/form-data" },
// 	};

// 	axios
// 		.post("https://5a26-2405-201-e059-b805-e529-4831-34fd-ae3b.ngrok-free.app/api/v1/center/photos", formData, config)
// 		.then((response) => {
// 			console.log(response);
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});

// }
