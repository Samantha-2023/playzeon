import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ReservationGetFacilityType } from "../redux/action/reservationAction";
import { ReservationGetListFacility } from "../redux/action/reservationListFacilityAction";
import { GetListReservationAction } from "../redux/action/listReservationAction";
import { AllFacilitiesList } from "../redux/action/allFacilitiesListAction";
import "../components/playzeon.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Offcanvas } from "react-bootstrap";
import { checkAvailabilityAction } from "../redux/action/checkAvailabilityAction";
import { pricingRuleAction } from "../redux/action/pricingRuleAction";
import { pricingCostAction } from "../redux/action/pricingCostAction";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// import { useNavigate } from "react-router-dom";

const ReservationFacility = (props) => {
	const dispatch = useDispatch();

	const [facilityValue, setFacilityValue] = useState([]);

	const [allsports, setAllSports] = useState([]);

	const [sportsfacilitylist, setSportsFacilityList] = useState([]);
	const [isEditMode, setIsEditMode] = useState(false);

	const [facilityNames, setFacilityNames] = useState([]);
	const [startDate, setStartDate] = useState(new Date());
	// const [endDate, setEndDate] = useState(new Date());
	const [sportId, setSportId] = useState([]);
	const [selectedDays, setSelectedDays] = useState([]);
	const [facilityId, setFacilityId] = useState([]);

	const [selectedFacilityTitle, setSelectedFacilityTitle] = useState("");

	const [bookingType, setBookingType] = useState("single");
	const [endDate, setEndDate] = useState();

	const [show, setShow] = useState(false);
	const [showSmallModal, setShowSmallModal] = useState(false);
	const [selectedPricingRuleCost, setSelectedPricingRuleCost] = useState("");
	console.log(selectedPricingRuleCost, "selectedPricingRuleCost");

	const [showConfirmation, setShowConfirmation] = useState(false);

	// const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const utcDate = new Date();

	// const utcTime = utcDate.toISOString( `${startDate}`).slice(11, 16);

	// This selector is for sports photos
	const reservationfacilitytypeselector = useSelector((state) => state.reservationfacilitytypeget?.reservationfacilitytype);
	//get api data is here	//reservationfacilitytypeget is from the reducer== index.js//reservationfacilitytype is the initial values set in reducer//
	console.log("reservationfacilitytypeselector", reservationfacilitytypeselector);

	console.log(
		" reservationfacilitytypeselector=====sportid",
		reservationfacilitytypeselector?.data?.map((item) => item.sport?.id)
	);

	//this selector  is  for facilities list  for the choosen sports .
	const reservationlistselector = useSelector((state) => state.reservationfacilitylist?.reservationlistfacility);
	console.log("reservationlistselector", reservationlistselector);

	// this selector is used for search api.....dynamically pass the id
	const getlistreservation = useSelector((state) => state.getlistreservation?.listreservationinitial);
	console.log("getlistreservation", getlistreservation);

	// this allfacilityapi selector is used for allsports api
	const allfacilityapi = useSelector((state) => state.AllListApiFacility?.allfacilitylistreservation);
	console.log("allfacilityapi", allfacilityapi);

	// This ReservationGetListFacility is for facility  list , // this AllFacilitiesList is for all sports api

	const getCheckAvailability = useSelector((state) => state.CheckAvailabilty?.checkavailabilityinitial);
	console.log("getCheckAvailability?????", getCheckAvailability);

	// This selector is for the pricing rule list
	const pricingRule = useSelector((state) => state.PricingRule?.pricingRuleInitial);

	console.log("pricingRule", pricingRule);

	console.log(
		" pricingRule",
		pricingRule?.data?.map((item) => item.pricingRuleId)
	);
	// console.log(pricingRuleId,"pricingRuleId");

	// this selector is for the pricing cost  for the prcing rule
	const pricingCostSelector = useSelector((state) => state.pricingCost?.pricingCostInitial);
	console.log("pricingCost", pricingCostSelector);

	const handleSave = () => {
		// the details should be displayed in the table  logic
	};

	const handleClose = () => {
		setShow(false);
		setShowConfirmation(true);
	};

	const handleCloseModal = () => {
		setShowSmallModal(true);
		setShowConfirmation(false);
		setShow(false);
	};

	const handleConfirmClose = () => {
		setShowConfirmation(false);
		setShow(false);
	};

	const initialValues = {
		phoneNumber: " ",
		email: " ",
		firstName: "",
		lastName: "",
		facility: "",
		pricingRule1: "",
	};

	const validationSchema = Yup.object().shape({
		phoneNumber: Yup.string()
			.matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number")
			.required("please enter a phon number"),

		email: Yup.string()
			.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/, "Enter a valid email")
			.required("please enter a valid mail id"),

		firstName: Yup.string().min(2, "Name is required !").max(50, "Too Long!").required("please enter a first name"),

		lastName: Yup.string().min(2, " lastName is required!").max(50, "Too Long!").required("please enter a last name"),
		facility: Yup.string().required(),

		pricingRule1: Yup.string().required(),
	});

	const submitForm = (values) => {
		console.log("values:::", values);

		try {
			dispatch(pricingCostAction());
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
	console.log(formik.errors?.name);
	console.log(formik.errors?.phonenumber);

	console.log(formik);

	const handleBookingTypeChange = (event) => {
		setBookingType(event.target.value);
		if (event.target.value === "single") {
			setEndDate(null);
		}
	};

	const handleEndDateChange = (date) => {
		setEndDate(date);
	};

	// const handleSaveClick = () => {
	// 	setIsEditMode(true);
	// 	// dispatch
	// };
	const handleSelectChange = (event) => {
		const selectedFacilityType = event.target.value;
		console.log(selectedFacilityType, "cvb");
		const selectedFacilityTitle = event.target.options[event.target.selectedIndex].text;

		const selectedSportId = event.target.value;

		setFacilityValue(selectedFacilityType);
		setSelectedFacilityTitle(selectedFacilityTitle);

		setSportId(selectedSportId);
		dispatch(ReservationGetListFacility(selectedFacilityType));

		dispatch(AllFacilitiesList(selectedFacilityType));
	};

	const handleBookingType = (event) => {};

	const utcStartTime = moment.utc(`${startDate}`).format();

	const utcEndTime = moment.utc(`${endDate}`).format();
	const handleCheckAvailability = () => {

		dispatch(checkAvailabilityAction(sportId, utcStartTime, utcEndTime, datesInRange));
	};

	const handleSearchClick = () => {
		console.log(allsports, "all sports", sportsfacilitylist, "sportsfacilitylist");
		dispatch(GetListReservationAction(allsports));
	};

	// Function to generate an array of dates between start date and end date

	const getDatesBetweenDates = (startDate, endDate) => {
		const dates = [];
		let currentDate = new Date(startDate);
		const end = new Date(endDate);
		while (currentDate <= end) {
			dates.push(new Date(currentDate));
			currentDate.setDate(currentDate.getDate() + 1);
		}
		return dates;
	};

	const handleStartDateChange = (date) => {
		setStartDate(date);
	};

	const handleCheckboxChange = (index) => {
		setSelectedDays((prevSelectedDays) => {
			const isSelected = prevSelectedDays.includes(index);
			if (isSelected) {
				return prevSelectedDays.filter((day) => day !== index);
			} else {
				return [...prevSelectedDays, index];
			}
		});
	};

	const datesInRange = startDate && endDate ? getDatesBetweenDates(startDate, endDate) : [];

	//just to show only the names
	useEffect(() => {
		if (reservationlistselector && reservationlistselector?.data) {
			console.log("test name", reservationlistselector);
			const names = Object.values(reservationlistselector?.data).map((item) =>
				item?.map((val) => {
					return { id: val.id, title: val.name };
				})
			);

			console.log(names[0], "names[0]");
			props.setDndAllSports(names);
		}
	}, [reservationlistselector]);

	console.log(facilityNames, "facilityNames");

	// this AllFacilitiesList is for all sports api,

	const handleChange = (event) => {
		const choosenValue = event.nativeEvent.target.name;
		const selectedIndex = event.target.selectedIndex;
		const choosenName = event.target.options[selectedIndex].getAttribute("name");
		console.log(choosenName, "choosenNM");
		// -------------------------------------------------------
		const selectedId = event.target.value;
		const selectedTitle = choosenName;
		console.log(" selectedId", selectedId);
		console.log(selectedTitle, " selectedTitle");

		props.setDndFacilityList([{ id: selectedId, title: selectedTitle }]);

		console.log(props.dndfacilitylist, "dndfacilitylist");

		setSportsFacilityList(event.target.value);

		dispatch(AllFacilitiesList(choosenValue));
		if (choosenName === "All Sports") {
			console.log("allfacilityapi:::", allfacilityapi);
			const joinedString = allfacilityapi?.data.join(",");
			setAllSports(joinedString);

			console.log("joinedString", joinedString);

			//  props.setDndAllSports(facilityNames);
		} else {
			setAllSports(event.target.value);
		}
		if (choosenName === "") {
			console.log("");
		}
	};
	console.log("allsports", allsports);

	//const extractFacilityIds = pricingRule?.data?.map((item) => item.facilityId) || [];
	const handlePricingChange = (id) => {
		setFacilityId(id);
		dispatch(pricingRuleAction(id));
	};

	const handlePricingRuleCost = (pricingRuleId, startTime, endTime, datesInRange,values) => {
		console.log(pricingRuleId, "pricingRuleId");
		console.log("handlePricingRuleCost");
		console.log("009",values);
		setIsEditMode(true);

		setSelectedPricingRuleCost(pricingRuleId);

		dispatch(pricingCostAction(pricingRuleId, utcStartTime, utcEndTime, datesInRange));
	};

	console.log(selectedPricingRuleCost, "selectedPricingRuleCost");

	// this  dispatch is for playzeon  sports photos
	useEffect(() => {
		dispatch(ReservationGetFacilityType());
	}, []);

	useEffect(() => {
		if (reservationfacilitytypeselector?.data?.length) dispatch(ReservationGetListFacility(reservationfacilitytypeselector?.data[0].sport.id));
	}, [reservationfacilitytypeselector]);

	// this allfacilityapi is used for allsports api

	// useEffect(() => {
	// 	if (allfacilityapi && allfacilityapi?.data) {
	// 		const joinedString = allfacilityapi?.data.join(", ");
	// 		setAllSports(joinedString);
	// 	}
	// }, [allfacilityapi]);

	return (
		<div>
			<div className="table-responsive  calendars" style={{ padding: "15px" }}>
				<div className="d-flex justify-content-between">
					<div className=" flex-grow-1">
						<label className="bookingtext  form-label">
							Facility Type
							<span className="text-danger">*</span>
						</label>

						<select aria-label="Facility Type" className="mb-3  form-select " value={facilityValue} onChange={handleSelectChange}>
							{reservationfacilitytypeselector &&
								reservationfacilitytypeselector?.data &&
								reservationfacilitytypeselector?.data?.map((facility) => (
									<option key={facility.id} value={facility.sport.id} className="fw-semibold" style={{ fontSize: "10px" }}>
										{facility.title}
									</option>
								))}
						</select>
					</div>

					<div className="flex-grow-1">
						<label className="booking-text form-label">
							Facilities<span className="text-danger">*</span>
						</label>

						<select
							aria-label="Facilities"
							placeholder="Please select an option"
							className="mb-2 w-75 form-select "
							value={sportsfacilitylist}
							onChange={handleChange}
						>
							<option value="" label="All court" name="All Sports">
								All Sports
							</option>

							{reservationlistselector &&
								typeof reservationlistselector?.data === "object" &&
								Object.values(reservationlistselector?.data).map((facilityDetails) => {
									console.log("facilityDetails", facilityDetails);

									return facilityDetails.map((facilityList) => (
										<option key={facilityList.id} className="fw-semibold" value={facilityList.id} name={facilityList?.name}>
											{facilityList.name}
										</option>
									));
								})}
						</select>
					</div>

					<div className="me-3">
						<label className="bookingtext form-label">Date</label>
						<input type="date" className="form-control" value="" style={{ width: "200px" }}></input>
					</div>

					<div className="d-flex justify-content-between">
						<div>
							<button
								type="button"
								//  onClick={handleSearchClick}
								onClick={() => handleSearchClick(allfacilityapi?.data)}
								className="me-3 text-white btn btn-primary"
								style={{ marginTop: "32px" }}
							>
								<div className="d-flex align-items-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
										<path
											fill="white"
											d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
										/>
									</svg>
									<span style={{ cursor: "pointer" }}>Search</span>
								</div>
							</button>
							<button
								type="button"
								className="me-3 text-white btn btn-danger"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasRight"
								aria-controls="offcanvasRight"
								style={{ marginTop: "32px" }}
							>
								Add a booking
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="offcanvas offcanvas-end custom-offcanvas" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
				<div className="offcanvas-header bg-lightgray" style={{ background: "lightgray" }}>
					<p className="offcanvas-title bg-lightgray fw-bold " id="offcanvasRightLabel" style={{ fontSize: "13px" }}>
						Booking
					</p>
					<button
						type="button button-danger"
						className="btn-close custom-btn-close  text-danger"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
						style={{ color: "red" }}
					></button>
				</div>
				{/* ---------------------------------------------- */}
				<div class="offcanvas-body">
					<div className="row">
						<div className="col-sm-8">
							<div className="d-flex justify-content-between gap-2">
								<div className="flex-grow-1">
									<label className="bookingtext  form-label">
										Booking Type
										<span className="text-danger">*</span>
									</label>

									<select aria-label="Facility Type" className="mb-3  form-select " onChange={handleBookingType}>
										<option value="Player" style={{ fontSize: "8px" }}>
											Player
										</option>
										<option value="Tournament" style={{ fontSize: "8px" }}>
											Tournament
										</option>
										<option value="Maintenance" style={{ fontSize: "8px" }}>
											Maintenance
										</option>
										<option value="Coach" style={{ fontSize: "8px" }}>
											Coach
										</option>
										<option value="Admin" style={{ fontSize: "8px" }}>
											Admin
										</option>
									</select>
								</div>
								{/* /////////////////////////////////////////////////////////////// */}
								<div className=" flex-grow-1">
									<label className="bookingtext  form-label">
										Facility Type
										<span className="text-danger">*</span>
									</label>

									<select aria-label="Facility Type" className="mb-3  form-select " value={facilityValue} onChange={handleSelectChange}>
										{reservationfacilitytypeselector &&
											reservationfacilitytypeselector?.data &&
											reservationfacilitytypeselector?.data?.map((facility) => (
												<option key={facility.id} value={facility.sport.id} style={{ fontSize: "8px" }}>
													{facility.title}
												</option>
											))}
									</select>
								</div>

								{/* this is a row div  down */}
							</div>
							<div className="row">
								<div className="col">
									<label className=" fw-bold form-label" style={{ fontSize: "13px" }}>
										Booking Occurence
									</label>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div class="form-check d-flex flex-row mb-2 gap-5">
										<div>
											<input
												class="form-check-input"
												type="radio"
												name="flexRadioDefault"
												id="flexRadioDefault1"
												value="single"
												checked={bookingType === "single"}
												onChange={handleBookingTypeChange}
											/>

											<label class="form-check-label" for="flexRadioDefault1">
												Single Booking
											</label>
										</div>
										<div>
											<input
												class="form-check-input"
												type="radio"
												name="flexRadioDefault"
												id="flexRadioDefault1"
												value="multiple"
												checked={bookingType === "multiple"}
												onChange={handleBookingTypeChange}
												disabled={bookingType === "multiple"}
											/>
											<label class="form-check-label" for="flexRadioDefault1">
												Multiple Booking
											</label>
										</div>
									</div>
								</div>
							</div>

							<div className=" col mt-2 d-flex justify-content-between gap-1">
								<div className="flex-grow-1">
									<label className="bookingtext  form-label">
										Start Date
										<span className="text-danger">*</span>
									</label>

									<DatePicker
										showIcon
										selected={startDate}
										//  onChange={(date) => setStartDate(date)}
										className="react-datepicker-wrapper"
										onChange={handleStartDateChange}
									/>
								</div>
								{bookingType === "multiple" && (
									<div className=" flex-grow-1">
										<label className="bookingtext  form-label">
											End Date
											<span className="text-danger">*</span>
										</label>

										<DatePicker
											showIcon
											selected={endDate}
											//    onChange={(date) => setEndDate(date)}
											className="react-datepicker-wrapper"
											onChange={handleEndDateChange}
										/>
									</div>
								)}
								<div className=" flex-grow-1">
									<label className="bookingtext  form-label">
										Start Time
										<span className="text-danger">*</span>
									</label>

									<DatePicker
										selected={startDate}
										// selected={utcDate}
										onChange={(date) => setStartDate(date)}
										showTimeSelect
										showTimeSelectOnly
										timeIntervals={15}
										timeCaption="Time"
										dateFormat="h:mm aa"
									/>
								</div>

								<div className=" flex-grow-1">
									<label className="bookingtext  form-label">
										End Time
										<span className="text-danger">*</span>
									</label>

									<DatePicker
										selected={endDate}
										// selected={utcDate}
										onChange={(date) => setEndDate(date)}
										showTimeSelect
										showTimeSelectOnly
										timeIntervals={15}
										timeCaption="Time"
										dateFormat="h:mm aa"
									/>
								</div>
							</div>

							{/* the choosen days in the calendar will be displayed down  */}
							<div className="row mt-2">
								{datesInRange.length > 0 && (
									<div>
										<label className="fw-semibold form-label" style={{ fontSize: "12px" }}>
											Select Days
										</label>
										<div className="d-flex" style={{ fontSize: "11px" }}>
											{datesInRange.map((date, index) => (
												<div key={index} className="d-flex align-items-center mr-3 mb-2	">
													<input
														type="checkbox"
														id={`day-${index}`}
														checked={selectedDays.includes(index)}
														onChange={() => handleCheckboxChange(index)}
													/>
													<label htmlFor={`day-${index}`}>{date.toLocaleDateString("en-US", { weekday: "short" })}</label>
												</div>
											))}
										</div>
									</div>
								)}
							</div>

							<div className=" row mt-3">
								<div className="col">
									<button type="submit" className="btn btn-danger" onClick={handleCheckAvailability}>
										check availability
									</button>
								</div>
							</div>

							<div className="row mt-3">
								<div className="col">
									<b style={{ fontSize: "13px" }}>Available Facility</b>
									<br />
									{console.log("getCheckAvailability", getCheckAvailability)}

									{/* {getCheckAvailability?.data &&
										Object.keys(getCheckAvailability?.data).length > 0 &&
										getCheckAvailability?.data?.map((item, index) => {
											console.log(item, "itemitemitem");
											return (
												<button
													key={item.id}
													value={item.title}
													type="button"
													className="btn btn-success mt-1"
													style={{ fontSize: "12px" }}
												>
													{item.title}
												</button>
											);
										})} */}

									{/* // 		or    tricky way   */}
									{reservationlistselector &&
										typeof reservationlistselector?.data === "object" &&
										Object.values(reservationlistselector?.data).map((facilityDetails) => {
											console.log("facilityDetails", facilityDetails);

											return facilityDetails.map((facilityList) => (
												<button
													key={facilityList.id}
													className="btn btn-success mt-1"
													value={facilityList.id}
													name={facilityList?.name}
												>
													{facilityList.name}
												</button>
											));
										})}
								</div>
							</div>

							<div className="row mt-2">
								<form class="row g-2" onSubmit={formik.handleSubmit}>
									{console.log(formik.values,"12345")}
									<div className="col-md-12">
										<b style={{ fontSize: "13px" }}>Player Details</b>
										<br />
										<div className="row g-2">
											<div class="col-md-6">
												<label for="inputPassword4" className="form-label fw-semibold" style={{ fontSize: "11px" }}>
													First name
												</label>

												<input
													className="form-control"
													aria-label="First name"
													name="firstName"
													type="text"
													onChange={formik.handleChange}
													value={formik.values.firstName}
												/>

												{formik.touched.firstName && formik.errors?.firstName?.length && (
													<p className="error-text">{formik.errors?.firstName}</p>
												)}
											</div>
											<div class="col-md-6">
												<label for="inputPassword4" className="form-label fw-semibold " style={{ fontSize: "11px" }}>
													Last name
												</label>

												<input
													className="form-control"
													aria-label="Last name"
													name="lastName"
													type="text"
													onChange={formik.handleChange}
													value={formik.values.lastName}
												/>
                                           
												{formik.touched.lastName && formik.errors?.lastName?.length && (
													<p className="error-text">{formik.errors?.lastName}</p>
												)}
											</div>
										</div>
										<div className="row g-2">
											<div class="col-md-6">
												<label for="inputPassword4" className="form-label  fw-semibold " style={{ fontSize: "11px" }}>
													Phone number
												</label>
												<input
													className="form-control"
													id="inputPassword4"
													name="phoneNumber"
													type="number"
													onChange={formik.handleChange}
													value={formik.values.phoneNumber}
												/>

												{formik.touched.phoneNumber && formik.errors?.phoneNumber?.length && (
													<p className="error-text">{formik.errors?.phoneNumber}</p>
												)}
											</div>
                                  {console.log(formik.values,"formikval")}
											<div class="col-md-6">
												<label for="inputEmail4" className="form-label fw-semibold " style={{ fontSize: "11px" }}>
													Email address
												</label>
												<input
													className="form-control"
													id="inputEmail4"
													name="email"
													type="email"
													onChange={formik.handleChange}
													value={formik.values.email}
												/>
												{formik.touched.email && formik.errors?.email?.length && <p className="error-text">{formik.errors?.email}</p>}
											</div>
										</div>
									</div>
									{/* </div> */}

									<div className="row mt-2">
										<div className="col-sm-6">
											<label className="booking-text form-label fw-semibold" style={{ fontSize: "10px" }}>
												Facility<span className="text-danger">*</span>
											</label>
											{/* <div className="border">
										 {getCheckAvailability?.data &&
											Object.keys(getCheckAvailability?.data).length > 0 &&
											getCheckAvailability?.data?.map((item, index) => {
												console.log(item, "itemitemitem");
												return (
													<div className="form-check">
														<input
															className="form-check-input"
															key={item.id}
															value={item.title}
															type="radio"
															name="flexRadioDefault"
															id="flexRadioDefault1"
															onClick={handlePricingChange(item.id)}
														/>
														<label className="form-check-label" for="flexRadioDefault1">
															{item.title}
														</label>
													</div>
												);
											})} 
											</div> */}
											{/* trick way 2 same mapping */}
											<div className="border">
												{reservationlistselector &&
													typeof reservationlistselector.data === "object" &&
													Object.values(reservationlistselector.data).map((facilityDetails) => {
														console.log("facilityDetails", facilityDetails.name);

														return facilityDetails.map((facilityList) => (
															<div key={facilityList.id}>
																{console.log(formik.values.facility, "formik.values.facility")}
																{console.log(facilityList?.id, "facilityList?.id")}

																<input
																	className="btn btn-success mt-1"
																	// value={facilityList.id}
																	value={formik.values.facility}
																	name={"facility"}
																	type="radio"
																	onChange={() => formik.handleChange({ target: { name: 'facility', value: facilityList?.name } })}
																	//id={`flexRadioDefformikault_${facilityList.id}`}
																	//defaultChecked={formik.values.facility === facilityList?.name}
																	onClick={() => handlePricingChange(facilityList.id)}
																//	onChange={formik.handleChange}
																/>
																<label htmlFor={`flexRadioDefault_${facilityList.id}`}>{facilityList.name}</label>
															</div>
														));
													})}
											</div>

											{formik.touched.facility && formik.errors?.facility?.length && (
												<p className="error-text">{formik.errors?.facility}</p>
											)}

											{/* col div down */}
										</div>

										<div className="col-sm-6">
											<label className="booking-text form-label fw-semibold" style={{ fontSize: "10px" }}>
												Pricing rule<span className="text-danger">*</span>
											</label>
											<div className="border">
												{pricingRule?.data &&
													Object.keys(pricingRule?.data).length > 0 &&
													pricingRule?.data?.map((item, index) => {
														
															console.log(formik.values.item, "formik.values.pricingRule");
														
														{console.log(item?.pricingRule.ruleName,"items");}
															console.log(item.pricingRuleId, "pricingRuleId");
														
														return (
															<div className="form-check">
																<input
																	className="form-check-input"
																//	key={item.id}
																	value={formik.values.pricingRule1}
																	type="radio"
																	name="pricingRule1"
																	id={`flexRadioDefault_${item.id}`}
																	// checked={formik.values.pricingRule === pricingRule.id}
																	onChange={() => formik.handleChange({ target: { name: 'pricingRule1', value: item?.pricingRule.ruleName } })}
																/>
																<label className="form-check-label" for="flexRadioDefault1">
																	{item.pricingRule.ruleName}
																</label>
															</div>
														);
													})}
											</div>
										</div>
									</div>

									<div className=" row mt-3">
										<div className="col  d-flex justify-content-end">
											<button
												className={`btn ${isEditMode ? "btn-warning" : "btn-success"}`}
												type="submit"
												//onClick={() =>handlePricingRuleCost(formik.values)}
											>
												{isEditMode ? "Edit" : "Save"}
											</button>
										</div>
									</div>
								</form>
							</div>

							<div className=" row mt-3">
								<div className="col">
									<button className="btn btn-danger" type="button" onClick={handleShow}>
										Add player
									</button>
								</div>
							</div>
							{/* table */}
							{/* <div className=" row mt-3">
								<div className="col">
									<label className="fw-semibold" style={{ fontSize: "12px" }}>
										Added player's
									</label>
									<table className="table table-striped table-secondary" style={{ fontSize: "9px" }}>
										<thead>
											<tr className="">
												<th scope="col">S.no</th>
												<th scope="col">First name</th>
												<th scope="col">Last name</th>
												<th scope="col">Facility name</th>
												<th scope="col">Pricing rule name</th>
												<th scope="col">Price</th>

												<th scope="col">Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<th scope="row">1</th>
												<td>Mark</td>
												<td>Otto</td>
												<td>@mdo</td>
											</tr>
											<tr>
												<th scope="row">2</th>
												<td>Jacob</td>
												<td>Thornton</td>
												<td>@fat</td>
											</tr>
											<tr>
												<th scope="row">3</th>
												<td colspan="2">Larry the Bird</td>
												<td>@twitter</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div> */}

							<div className="row">
								<div className="col-sm-12 mt-3">
									<label className="fw-bold form-label">Notes</label>
									<textarea placeholder="Leave a comment here" className="form-control" style={{ height: "100px" }}></textarea>
								</div>
							</div>
						</div>

						<div className="col-sm-4  border border-gray border-2">
							<label className="fw-normal" style={{ fontSize: "13px" }}>
								Booking Type
							</label>
							<br />
							<p className="fw-bold" style={{ fontSize: "12px" }}>
								Player Booking
							</p>
							<hr />
							<div>
								<p style={{ fontSize: "12px" }}>Start date and time</p>
								<p className="semi-bold" style={{ fontSize: "11px" }}>
									{startDate && (
										<>
											{console.log(startDate, "startDate")}
											{startDate.toLocaleString()}
										</>
									)}
								</p>
							</div>
							<div>
								<p style={{ fontSize: "12px" }}>End date and time</p>
								<p className="semi-bold" style={{ fontSize: "11px" }}>
									{endDate && (
										<>
											{console.log(endDate, "endDate")}
											{endDate.toLocaleString()}
										</>
									)}
								</p>
							</div>

							<div>
								<p style={{ fontSize: "13px" }}>Facility type</p>
								<p className="semi-bold">{selectedFacilityTitle}</p>
								<hr />
							</div>

							<div className="mb-3">
								<h6 style={{ fontSize: "13px", fontWeight: "bold" }}>Players Facility and Pricing Details</h6>

								<div className=" row mt-3">
									<div className="col">
										<label className="fw-semibold" style={{ fontSize: "12px" }}>
											Added player's
										</label>
										<table className="table table-striped table-secondary" style={{ fontSize: "9px" }}>
											<thead>
												<tr className="">
													<th scope="col">Name</th>
													<th scope="col">Facility</th>
													<th scope="col">Pricing rule</th>
													<th scope="col">Per hour ($)</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>Jacob</td>
													<td>Thornton</td>
													<td>@fat</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td colspan="2">Larry the Bird</td>
													<td>@twitter</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row mt-4">
					<div className="col-sm-12 d-flex justify-content-end align-items-center">
						<button type="button" className="btn btn-primary">
							Proceed to book
						</button>
					</div>
				</div>
			</div>

			{/* 2nd off canvas for add a player  */}

			<Offcanvas show={show} onHide={handleClose} placement="end">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>
						<p className="offcanvas-title bg-lightgray fw-bold " id="offcanvasRightLabel" style={{ background: "lightgray", fontSize: "11px" }}>
							Add Player
						</p>
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<form class="row g-2" onSubmit={formik.handleSubmit}>
						<div className="col-md-12">
							<div className="row g-2">
								<div class="col-md-6">
									<label for="inputPassword4" className="form-label fw-semibold" style={{ fontSize: "11px" }}>
										First name
									</label>

									<input
										className="form-control"
										aria-label="First name"
										name="firstName"
										type="text"
										onChange={formik.handleChange}
										value={formik.values.firstName}
									/>

									{formik.touched.firstName && formik.errors?.firstName?.length && <p className="error-text">{formik.errors?.firstName}</p>}
								</div>
								<div class="col-md-6">
									<label for="inputPassword4" className="form-label fw-semibold " style={{ fontSize: "11px" }}>
										Last name
									</label>

									<input
										className="form-control"
										aria-label="Last name"
										name="lastName"
										type="text"
										onChange={formik.handleChange}
										value={formik.values.lastName}
									/>

									{formik.touched.lastName && formik.errors?.lastName?.length && <p className="error-text">{formik.errors?.lastName}</p>}
								</div>
							</div>
						</div>
						{/* </div> */}

						<div className="row mt-2">
							<div className="col-sm-6">
								<label className="booking-text form-label fw-semibold" style={{ fontSize: "10px" }}>
									Facility<span className="text-danger">*</span>
								</label>
								{/* <div className="border">
										 {getCheckAvailability?.data &&
											Object.keys(getCheckAvailability?.data).length > 0 &&
											getCheckAvailability?.data?.map((item, index) => {
												console.log(item, "itemitemitem");
												return (
													<div className="form-check">
														<input
															className="form-check-input"
															key={item.id}
															value={item.title}
															type="radio"
															name="flexRadioDefault"
															id="flexRadioDefault1"
															onClick={handlePricingChange(item.id)}
														/>
														<label className="form-check-label" for="flexRadioDefault1">
															{item.title}
														</label>
													</div>
												);
											})} 
											</div> */}
								{/* trick way 2 same mapping */}
								<div className="border">
									{reservationlistselector &&
										typeof reservationlistselector.data === "object" &&
										Object.values(reservationlistselector.data).map((facilityDetails) => {
											console.log("facilityDetails", facilityDetails);

											return facilityDetails.map((facilityList) => (
												<div key={facilityList.id}>
													{console.log(formik.values.facility, "formik.values.facility")}
													{console.log(facilityList?.id, "facilityList?.id")}

													<input
														className="btn btn-success mt-1"
														// value={facilityList.id}
														value={formik.values.facility}
														name={"facility"}
														type="radio"
														//id={`flexRadioDefault_${facilityList.id}`}
														defaultChecked={formik.values.facility === facilityList?.name}
														onClick={() => handlePricingChange(facilityList.id)}
														onChange={formik.handleChange}
													/>
													<label htmlFor={`flexRadioDefault_${facilityList.id}`}>{facilityList.name}</label>
												</div>
											));
										})}
								</div>

								{formik.touched.facility && formik.errors?.facility?.length && <p className="error-text">{formik.errors?.facility}</p>}

								{/* col div down */}
							</div>

							<div className="col-sm-6">
								<label className="booking-text form-label fw-semibold" style={{ fontSize: "10px" }}>
									Pricing rule<span className="text-danger">*</span>
								</label>
								<div className="border">
									{pricingRule?.data &&
										Object.keys(pricingRule?.data).length > 0 &&
										pricingRule?.data?.map((item, index) => {
											{
												console.log(formik.values.item, "formik.values.pricingRule");
											}
											{
												console.log(item.pricingRuleId, "pricingRuleId");
											}
											return (
												<div className="form-check">
													<input
														className="form-check-input"
														key={item.id}
														value={item.pricingRule.ruleName}
														type="radio"
														name="flexRadioDefault"
														id={`flexRadioDefault_${item.id}`}
														// checked={formik.values.pricingRule === pricingRule.id}
														onChange={(event) => {
															formik.handleChange(event);
															handlePricingRuleCost(item.pricingRuleId);
														}}
													/>
													<label className="form-check-label" for="flexRadioDefault1">
														{item.pricingRule.ruleName}
													</label>
												</div>
											);
										})}
								</div>
							</div>
						</div>

						<div className=" row mt-3">
							<div className="col -md-12 d-flex justify-content-center">
								<button className="btn  btn-lg btn-success" type="submit" onClick={handleSave} style={{ fontSize: "11px" }}>
									Add
								</button>
							</div>
							<br />
							<div className=" mt-3 d-flex justify-content-center">
								<button className="btn  btn-lg btn-danger" onClick={handleCloseModal} style={{ fontSize: "11px" }}>
									Close
								</button>
							</div>
						</div>
					</form>
				</Offcanvas.Body>
			</Offcanvas>

			<Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>Are you sure you want to close?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Yes
					</Button>
					<Button variant="primary" onClick={handleConfirmClose}>
						No
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default ReservationFacility;

//just to show only the names  how to map and place console inside the map function
//  useEffect(() => {
// 	if (reservationlistselector && reservationlistselector?.data) {
// 		console.log("test name",reservationlistselector);
// 	  const names = Object.values(reservationlistselector?.data).map(item => console.log("item",item));
// 	  console.log(names,"names");
// 	  setFacilityNames(names);
// 	}
//   }, [reservationlistselector]);

// console.log(facilityNames,"facilityNames");

// ====================================================================================

{
	/* <div className="modal show" style={{ display: "block", position: "initial" }}>
				<Modal.Dialog show={showSmallModal} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Are you sure you want to close?</Modal.Title>
					</Modal.Header>

					<Modal.Footer>
						<Button variant="secondary">Yes</Button>
						<Button variant="primary">No</Button>
					</Modal.Footer>
				</Modal.Dialog>
			</div> */
}
