import React, { useState, useEffect, useRef } from "react";
import addplus from "../images/addplus.svg";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import baseball from "../images/baseball.jpg";
import SideBar from "../components/sidebar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SportsPhotosAction } from "../redux/action/actionSportsPhotos";
import "../components/playzeon.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
import addimage from "../images/addimage.svg";
import { FacitilityActionPutData } from "../redux/action/actionSportsFacility";
import { FacitilityActionPostData } from "../redux/action/actionSportsFacility";
import moment from "moment";
import { Link } from "react-router-dom";

const Facilities = () => {
	const navigate = useNavigate();

	const [chooseDays, setChooseDays] = useState([]);

	// to display the features in the ui 2 use states 
	const [facilityFeatures, setFacilityFeatures] = useState();
	const [addFeatures, setAddFeatures] = useState([]);

	// const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const daysOfWeek = [
		{ id: 1, shortName: "Sun", fullName: "Sunday" },
		{ id: 2, shortName: "Mon", fullName: "Monday" },
		{ id: 3, shortName: "Tue", fullName: "Tuesday" },
		{ id: 4, shortName: "Wed", fullName: "Wednesday" },
		{ id: 5, shortName: "Thu", fullName: "Thursday" },
		{ id: 6, shortName: "Fri", fullName: "Friday" },
		{ id: 7, shortName: "Sat", fullName: "Saturday" },
	];

	const [startTime, setStartTime] = useState(null);
	const [endTime, setEndTime] = useState(null);

	const [showModal, setShowModal] = useState(false);
	const [showAddSportsModal, setShowAddSportsModal] = useState(false); // Adding another  state for the second modal to open
	const dispatch = useDispatch();

	const [selectedDaysAndTimes, setSelectedDaysAndTimes] = useState([]); // Add state for selected days and times

	 // For post Api
    const [selectedFacilityId, setSelectedFacilityId] = useState(null);
	const [selectedWeekdays, setSelectedWeekdays] = useState([]); // state for dding the weekdays dynamically in the initial values

	const data = useSelector((state) => state.sportsPhotosGetData?.sportsphotos);
	//sportsPhotosGetData is from the reducer== index.js// sportsphotos is the initial values set in reducer//


	const datafacility = useSelector((state) => state.sportsFacilityData?.sportsfacilityputdata?.data);
	// sportsFacilityData is from the reducer== index.js// sportsfacilityputdata is the initial values set in reducer

	const datapostfacility = useSelector((state) => state.sportsFacilityPostdata?.sportsfacilitypostdata);

	const initialValues = {
		reservationAttribute: {
			advanceBookingMax: "",
			advanceBookingMin: "",
			durationAllowedMax: "",
			durationAllowedMin: "",
			playerAllowedMax: "",
			playerAllowedMin: "",
		},
		title: "",
		defaultPlayDuration: "30",
		sku: "",
		description: "",
		workingPlans: {
			sunday: "0",
			monday: "1",
			tuesday: "1",
			wednesday: "0",
			thursday: "0",
			friday: "0",
			saturday: "1",
			startTime: "",
			endTime: "",
		},
		center: {
			id: localStorage.getItem("centerIddd") ? parseInt(localStorage.getItem("centerIddd"), 10) : null,
		},
		sport: {
			id: selectedFacilityId,
		},
		createdAt: moment().utc(),
		updatedAt: moment().utc(),
		createdBy: "",
		updatedBy: "",
		photos: null,
		id: "",
		facilityHours: [
			{
				//weekday: selectedWeekdays.join(','), // Dynamically set weekdays
				// weekday: "sunday,monday,tuesday,wednesday,thursday,friday,saturday",  //(static)
				weekday: selectedWeekdays.join(","),
				startTime: startTime,
				endTime: endTime,
				createdAt: moment().utc(),
				updatedAt: moment().utc(),
			},
		],
		facilityMetas: [],
		video: null,
	};

	const validationSchema = Yup.object().shape({
		title: Yup.string().min(2, "Name is required !").max(30, "Too Long!").required("Name is Required"),

		advanceBookingMax: Yup.number("advanceBookingMax use only number")
			.min(1, "Minimum should be less than maximum")
			.max(10, "Enter maximum value")
			.required("Maximum value is required"),

		advanceBookingMin: Yup.number("advanceBookingMin use only number")
			.min(1, "Minimum should be less than maximum")
			.max(10, "Enter maximum value")
			.required("Minimum should be less than maximum"),

		durationAllowedMax: Yup.number("durationallowed use only number")
			.min(1, "Minimum should be less than maximum")
			.max(10, "Enter maximum value")
			.required(" Maximum value is required"),

		durationAllowedMin: Yup.number("durationallowedmin use only number")
			.min(1, "Minimum should be less than maximum")
			.max(10, "Enter maximum value")
			.required("Minimum should be less than maximum"),

		playerAllowedMax: Yup.number("players allowed use only number")
			.min(1, "Minimum should be less than maximum")
			.max(10, "Enter maximum value")
			.required("Maximum value is required"),

		playerAllowedMin: Yup.number("players allowed use only number")
			.min(1, "Minimum should be less than maximum")
			.max(10, "Enter maximum value")
			.required("Minimum should be less than maximum"),
	});

	//  useEffect(() => {
	//  	console.log("Data post facility :", datapostfacility);
	// 	dispatch(FacitilityActionPostData());
	//  }, []);

	const submitForm = async (values) => {
		values.sport.id = selectedFacilityId;
			values.facilityHours[0].startTime = startTime;
			values.facilityHours[0].endTime = endTime;
			values.facilityHours[0].weekday = selectedWeekdays.join(",");
			values.reservationAttribute.advanceBookingMin = values.advanceBookingMin;
			values.reservationAttribute.advanceBookingMax = values.advanceBookingMax;
			values.reservationAttribute.durationAllowedMin = values.durationAllowedMin;
			values.reservationAttribute.durationAllowedMax = values.durationAllowedMax;
			values.reservationAttribute.playerAllowedMin = values.playerAllowedMin;
			values.reservationAttribute.playerAllowedMax = values.playerAllowedMax;
			values.facilityMetas = addFeatures;
		try {			
			console.log(values, "values");
			console.log(addFeatures, "addFeatures");
			dispatch(FacitilityActionPostData(values));
		} catch (error) {
			console.error("Form submission failed", error);
		}
	};

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: submitForm,
	});

	const handleAddFacility = (facilityId) => {
		// Handle logic for adding a facility
		setSelectedFacilityId(facilityId); // to handle the sports id to pass to another modal for post api to work
		setShowModal(false); // Close the modal after adding
		setShowAddSportsModal(true); // Show the second modal
	};
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
	};

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

	useEffect(() => {
		if (showModal) {
			dispatch(SportsPhotosAction()); // Dispatching  the action function name  to fetch sports photos from the api
		}
	}, [showModal, dispatch]);

	// useEffect(() => {
	// 	console.log("Data facility :", datafacility);
	// 	dispatch(FacitilityActionPutData());
	// }, [showModal, dispatch]);

	// object entries to find the length of the object as a string
	useEffect(() => {
		if (datapostfacility.data && Object.entries(datapostfacility.data)?.length) {
			navigate("/facilitiesdisplaypage");
		}
	}, [datapostfacility]);

	return (
		<div>
			<div className="row">
				<div className="col-lg-2">
					<SideBar />
				</div>
				<div className="col-lg-10 ">
					<Container Fluid className="flex-fill">
						<div className="vh-100" style={{ backgroundColor: "#EDEEF0", color: "black", fontSize: "13px", fontWeight: "400" }}>
							<p className="pt-2 mb-0 ms-2">Facilities </p>
							<hr className="mt-0 pt-0" />
							<div className="row">
								<div className="container">
									<div className="card border-0 rounded-4 mx-2 mb-2">
										<div className="card-body">
											<div className="row">
												<div className="col-xl-3 col-lg-4 col-md-6 my-2">
													<div
														className="text-center rounded-3 addlocation "
														onClick={() => setShowModal(true)}
														style={{ cursor: "pointer" }}
													>
														<div className="d-flex justify-content-center">
															<img
																src={addplus}
																alt="logo"
																className="  addplus"
																// onClick={() => navigate("")}
															/>
														</div>
														<div className="text-center  text-muted  f5">Add facilities</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</div>
			</div>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<div style={{ backgroundColor: "#edeef0" }}>
					<Modal.Header closeButton>
						<Modal.Title className="modelonetitle">Add {formik.values.facility?.title} </Modal.Title>
					</Modal.Header>
					<Modal.Body className="text-center">
						<div className="row ">
							{data?.data?.map((facility, index) => (
								<div className="col-3  d-flex justify-content-between gap-3 mb-2 ">
									<div
										key={facility.id}
										className="card  rounded pointer text-black border "
										style={{ borderColor: "GrayText", cursor: "pointer" }}
										onClick={() => handleAddFacility(facility?.sport?.id)}
									>
										<div
											className="card-body"
											style={{ backgroundColor: "white" }}
											// onClick={() => {
											// 	// setShowModal(false); // Close the first modal
											// 	 setShowAddSportsModal(true); // Open the second modal
											// }}
										>
											<div className="d-flex flex-column align-items-center">
												{/* image style div is below */}
												<div
													style={{
														width: "40px",
														height: "40px",
														borderRadius: "50%",
														overflow: "hidden",
														marginBottom: "2px",
													}}
												>
													<img
														src={facility.url}
														alt={facility.title}
														style={{ width: "100%", height: "100%", objectFit: "cover" }}
													/>
												</div>
												<div className="text-center mt-0" style={{ fontSize: "10px", fontWeight: "bold", fontFamily: "sans-serif" }}>
													{facility.title}
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</Modal.Body>
					<Modal.Footer></Modal.Footer>
				</div>
			</Modal>

			{/* add sports form modal is below  */}

			<div className="modal-customwidth">
				<Modal size="lg" show={showAddSportsModal} onHide={() => setShowAddSportsModal(false)} style={{ overflow: "auto" }}>
					<div style={{ backgroundColor: "#edeef0" }}>
						<form onSubmit={formik.handleSubmit}>
							<Modal.Header closeButton>
								<Modal.Title className="modeltwotitle"> Add{formik.values.facility?.title} </Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<div className="bg-lightgrey">
									<div className="row">
										<div className="col-sm-12">
											<label className="text-muted-50 col-12  labelname fw-bold mb-0">Name</label>
											<hr className="pt-0  mt-2" />
										</div>
									</div>

									<div className="row">
										<div className="col-6">
											<input
												maxLength={50}
												className="form-control"
												id="input_addfacilityname"
												aria-describedby="name"
												name="title"
												type="text"
												onChange={formik.handleChange}
												value={formik.values?.title}
											/>
										</div>
										{formik.touched.title && formik.errors?.title?.length && <p className="error-text">{formik.errors?.title}</p>}

										<div className="col-6">
											<input className="form-check-input " type="checkbox" value="checkbox" />
											&nbsp;
											<label className="form-check-label labelname ">Open to Athlitik users</label>
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
												<div key={day.id} className="form-check form-check-inline  labelweek mt-2 me-2">
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
												<small className=" d-flex text-primary  modeltwoadd" onClick={handleAddButtonClick}>
													Add
												</small>
											</div>
										</div>
									</div>

									{/* selected time and days displaying code  */}

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
												maxLength={10}
												name="playerAllowedMin"
												className="form-control form-control"
												type="number"
												onChange={formik.handleChange}
												value={formik.values?.playerAllowedMin}
											/>
											{formik.errors?.playerAllowedMin?.length && <p className="error-text">{formik.errors?.playerAllowedMin}</p>}
										</div>

										<div className="col-sm-3">
											<input
												placeholder="Max"
												maxLength={10}
												name="playerAllowedMax"
												type="number"
												className="form-control form-control"
												onChange={formik.handleChange}
												value={formik.values?.playerAllowedMax}
											/>
											{formik.errors?.playerAllowedMax?.length && <p className="error-text">{formik.errors?.playerAllowedMax}</p>}
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
												maxLength={10}
												name="durationAllowedMin"
												className="form-control form-control"
												type="number"
												onChange={formik.handleChange}
												value={formik.values?.durationAllowedMin}
											/>
											{formik.errors?.durationAllowedMin?.length && <p className="error-text">{formik.errors?.durationAllowedMin}</p>}
										</div>
										<div className="col-sm-3">
											<input
												placeholder="Max"
												maxLength={10}
												name="durationAllowedMax"
												type="number"
												className="form-control form-control"
												onChange={formik.handleChange}
												value={formik.values?.durationAllowedMax}
											/>

											{formik.errors?.durationAllowedMax?.length && <p className="error-text">{formik.errors?.durationAllowedMax}</p>}
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
												maxLength={10}
												name="advanceBookingMin"
												type="number"
												className="form-control form-control"
												onChange={formik.handleChange}
												value={formik.values?.advanceBookingMin}
											/>
											{formik.errors?.advanceBookingMin?.length && <p className="error-text">{formik.errors?.advanceBookingMin}</p>}
										</div>
										<div className="col-sm-3">
											<input
												placeholder="Max"
												maxLength={10}
												name="advanceBookingMax"
												type="number"
												className="form-control form-control"
												onChange={formik.handleChange}
												value={formik.values?.advanceBookingMax}
											/>
											{formik.errors?.advanceBookingMax?.length && <p className="error-text">{formik.errors?.advanceBookingMax}</p>}
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
											<label className="text-muted   reservationlabelname"> Features</label>
										</div>
									</div>
									<div className="row">
										<div className="col-6">
											<input
												maxLength={50}
												type="text"
												className="form-control"
												value={facilityFeatures}
												onChange={(e) => {
													setFacilityFeatures(e.target.value);
												}}
											/>
										</div>
										<div className="col-sm-2" style={{ opacity: "0.5", cursor: "pointer" }}>
											<div
												className=" d-flex align-items-center gap-0"
												onClick={() => {
													setAddFeatures([...addFeatures, { value: facilityFeatures }]);
													console.log("add clickkkk");
												}}
											>
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
											<label className="text-muted  reservationlabelname">Images</label>
										</div>
									</div>
									<div className="row">
										<div className="w-100">
											<img src={addimage} className="addimage p-3 mt-2" alt="addimage" />
											<input type="file" accept="image/png, image/gif, image/jpeg" className="hide_file d-none" />
										</div>
									</div>
								</div>
							</Modal.Body>
							<Modal.Footer>
								<div className="justify-content end" style={{ fontSize: "80%" }}>
									<button
										type="submit"
										className=" btn-sm float-right me-3  align-self-center  btn btn-danger "
										style={{ backgroundColor: "red", color: "white" }}
									>
										Save
									</button>

									<button type="button" className="btn btn-link modaltwocancelbutton " onClick={() => navigate("/dashboard")}>
										Cancel
									</button>
									{/* <Link
										type="button"
										className="btn btn-link float-right  border-0 me-3  align-self-center btn btn-danger modaltwocancelbutton "
										onClick={() => navigate("/facilities")}
									>
										Cancel
										</Link>  */}
								</div>
							</Modal.Footer>
						</form>
					</div>
				</Modal>
			</div>
		</div>
	);
};

export default Facilities;
