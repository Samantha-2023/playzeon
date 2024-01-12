import React, { useEffect, useState } from "react";
import "../components/playzeon.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import SideBar from "../components/sidebar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FacilityDisplayPageAction } from "../redux/action/actionFaciltyDisplayPage";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FacitilityActionCopyData, FacitilityActionCopyGetData } from "../redux/action/actionCopyFacility";
import { FacitilityActionDeleteData, FacitilityActionGetDeleteData } from "../redux/action/actionDeleteFacility";
import { FacitilityActionPutData } from "../redux/action/actionSportsFacility";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
import addimage from "../images/addimage.svg";
import addplus from "../images/addplus.svg";
import { FacitilityActionEditGetData } from "../redux/action/actionEditFacility";
import { CourtGetAction } from "../redux/action/actionCourtGet";
import { SportsPhotosAction } from "../redux/action/actionSportsPhotos";
import Facilities from "./facilities";

const FacilityDisplayPage = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	// these use states for update modal after clicking the edit modal
	const [startTime, setStartTime] = useState(null);
	const [endTime, setEndTime] = useState(null);

	const [facilityFeatures, setFacilityFeatures] = useState();
	const [addFeatures, setAddFeatures] = useState([]);

	const [chooseDays, setChooseDays] = useState([]);
	
	
	
	// Add state for selected days and times

	
	
	

	

	const [selectedFacilityId, setSelectedFacilityId] = useState(null);
	const [selectedWeekdays, setSelectedWeekdays] = useState([]); // state for adding the weekdays dynamically in the initial values

	const daysOfWeek = [
		{ id: 1, shortName: "Sun", fullName: "Sunday" },
		{ id: 2, shortName: "Mon", fullName: "Monday" },
		{ id: 3, shortName: "Tue", fullName: "Tuesday" },
		{ id: 4, shortName: "Wed", fullName: "Wednesday" },
		{ id: 5, shortName: "Thu", fullName: "Thursday" },
		{ id: 6, shortName: "Fri", fullName: "Friday" },
		{ id: 7, shortName: "Sat", fullName: "Saturday" },
	];
	
	// sports picture modal  state variables
	const [showModal, setShowModal] = useState(false);
	const [showAddSportsModal, setShowAddSportsModal] = useState(false); // Adding another  state for the second modal to open
	
	// state variables for modal 1- edit
	const [showEditModal, setShowEditModal] = useState(false);
	const [selectedFacility, setSelectedFacility] = useState(null);

	// state variables for the edit modal to update the  sports facility data
	const [showUpdateModal, setShowUpdateModal] = useState(false);
	
	// state variables for modal 2 -copy
	const [showCopyModal, setShowCopyModal] = useState(false);
	
	// state variables for modal 3 -copy
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	//facility metas adding
	const [newFacilityMeta, setNewFacilityMeta] = useState("");
	const [facilityMetas, setFacilityMetas] = useState([]);
	
	const centerId = localStorage.getItem("centerIddd");
	
	const data = useSelector((state) => state.facilityDisplayPageData.addfaciltydisplayPage?.data);
	//get api data is here
	//facilityDisplayPageData is from the reducer== index.js//  addfaciltydisplayPage  is the initial values set in reducer//

	//  if there is data navigate to the facilitiesdisplaypage or navigate to the facilities
	console.log(data, "data", data && Object.entries(data)?.length, "length");
	// if (data && data.length > 0) {
	// 	navigate('/facilitiesdisplaypage');
	//   } else {
	// 	navigate('/facilities');
	//   }

	const datacopy = useSelector((state) => state.copyFacilityData?.copyfacility);
	//post api data is here	//copyFacilityData is from the reducer== index.js//copyfacility  is the initial values set in reducer//
	
	const datagetcopy = useSelector((state) => state.copyGetFacilityData?.copygetfacility);
	//get api data is here	//copyGetFacilityData is from the reducer== index.js//copygetfacility  is the initial values set in reducer//
	
	const datadelete = useSelector((state) => state.deleteFacilityData?.deletefacility);
	//delete api data is here // state.deleteFacilityData is from the reducer==index.js//deletefacility is the initial values set in reducer
	
	const datagetdelete = useSelector((state) => state.deleteGetFacilityData?.deletegetfacility);
	
	// selector for put and get api for update modal
	const dataupdateput = useSelector((state) => state.sportsFacilityData.sportsfacilityputdata);
	//put update api is here // sportsFacilityData is from the reducer==index.js//sportsfacilityputdata  is the initial values set in reducer
	
	const dataupdateget = useSelector((state) => state.editGetFacilityData.editgetfacility);
	//get update api is here // editGetFacilityData is from the reducer==index.js// editgetfacility is the initial values set in reducer
	
	// sports facility get the picture and post the data seselector
	
	const dataphoto = useSelector((state) => state.sportsPhotosGetData?.sportsphotos);
	//sportsPhotosGetData is from the reducer== index.js// sportsphotos is the initial values set in reducer//
	const [selectedDaysAndTimes, setSelectedDaysAndTimes] = useState([]);

	const datafacility = useSelector((state) => state.sportsFacilityData?.sportsfacilityputdata?.data);
	// sportsFacilityData is from the reducer== index.js// sportsfacilityputdata is the initial values set in reducer

	const datapostfacility = useSelector((state) => state.sportsFacilityPostdata?.sportsfacilitypostdata);

	// about court detail getting information

	const courtget = useSelector((state) => state.courtGetData.courtgetdisplay);

	localStorage.setItem("facilityid", selectedFacility?.id);

	// Retrieve the value from local storage
	const facilityid = localStorage.getItem("facilityid");

	//  sports picture modal  functionality
    
	//facility hours prepopulate ? trying 




	const handleAddFacility = (facilityId) => {
		// Handle logic for adding a facility
		setSelectedFacilityId(facilityId); // to handle the sports id to pass to another modal for post api to work
		setShowModal(false); // Close the modal after adding
		setShowAddSportsModal(true); // Show the second modal
	};

	// edit modal function
	const openEditModal = (facility) => {
		setSelectedFacility(facility);
		setShowEditModal(true);
	};

	// Function to close the edit modal
	const closeEditModal = () => {
		setSelectedFacility(null);
		setShowEditModal(false);
	};

	// copy modal function
	const openCopyModal = (facility) => {
		setSelectedFacility(facility);
		setShowCopyModal(true);
	};

	const closeCopyModal = () => {
		setSelectedFacility(null);
		setShowCopyModal(false);
	};

	// delete modal function

	const openDeleteModal = (facility) => {
		setSelectedFacility(facility);
		setShowDeleteModal(true);
	};

	const closeDeleteModal = () => {
		setSelectedFacility(null);
		setShowDeleteModal(false);
	};

	// update modal function

	const openUpdateModal = (facility) => {
		setSelectedFacility(facility);
		setShowUpdateModal(true);
	};

	const closeUpdateModal = () => {
		setSelectedFacility(null);
		setShowUpdateModal(false);
	};

	const handleDeleteSelectedDayAndTime = (index) => {
		const updatedSelectedDaysAndTimes = [...selectedDaysAndTimes];
		updatedSelectedDaysAndTimes.splice(index, 1);
		setSelectedDaysAndTimes(updatedSelectedDaysAndTimes);
	};

	//  formik for the update modal
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

	const submitForm = async (values) => {
		// values.sport.id = selectedFacilityId;
		// values.facilityHours[0].startTime = startTime;
		// values.facilityHours[0].endTime = endTime;
		// values.facilityHours[0].weekday = selectedWeekdays.join(",");
		values.reservationAttribute.advanceBookingMin = values.advanceBookingMin;
		values.reservationAttribute.advanceBookingMax = values.advanceBookingMax;
		values.reservationAttribute.durationAllowedMin = values.durationAllowedMin;
		values.reservationAttribute.durationAllowedMax = values.durationAllowedMax;
		values.reservationAttribute.playerAllowedMin = values.playerAllowedMin;
		values.reservationAttribute.playerAllowedMax = values.playerAllowedMax;
		values.facilityMetas = values.facilityMetas; //check only addFeatures before

		values.defaultPlayDuration = values.defaultPlayDuration;
		values.sku = values.sku;
		values.workingPlans = initialValues.workingPlans;

		values.description = values.description;
		values.createdAt = values.createdAt;
		values.createdBy = values.createdBy;
		values.updatedAt = values.updatedAt;
		values.updatedBy = values.updatedBy;

				try {
			// values.facilityMetas = values.addFeatures; //check only addFeatures before
			console.log("values", values);
			// dispatch(FacitilityActionEditGetData(values));
			dispatch(FacitilityActionPutData(dataupdateget.data?.id, values));
		} catch (error) {
			console.error("Form submission failed", error);
		}
	};

	console.log(dataupdateget, "dataupdateget");

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: submitForm,
	});

	const handleDayChange = (day) => {
		// Update selectedWeekdays array
		setSelectedWeekdays((prevSelectedWeekdays) => {
			if (prevSelectedWeekdays.includes(day.fullName)) {
				// If the day is already selected, return the array as is.
				return prevSelectedWeekdays;
			} else {
				// If the day is not selected, create a new array by adding the new day.
				return [...prevSelectedWeekdays, day.fullName];
			}
		});

		// Update chooseDays array
		setChooseDays((prevChooseDays) => {
			if (prevChooseDays.includes(day.shortName)) {
				// If the day is already selected, return the array as is.
				return prevChooseDays;
			} else {
				// If the day is not selected, create a new array by adding the new day.
				return [...prevChooseDays, day.shortName];
			}
		});
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

	// end
	//  function to display the range of weekdays ////////////////////////////////////

	const getWeekdayRange = (selectedDays) => {
		const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		const selectedDayIndices = selectedDays.map((day) => daysInWeek.indexOf(day));
		const sortedIndices = selectedDayIndices.sort((a, b) => a - b);
		const consecutiveRanges = [];

		for (let i = 0; i < sortedIndices.length; i++) {
			let start = sortedIndices[i];
			while (i < sortedIndices.length - 1 && sortedIndices[i] + 1 === sortedIndices[i + 1]) {
				i++;
			}
			let end = sortedIndices[i];
			const range = end > start ? `${daysInWeek[start]} - ${daysInWeek[end]}` : daysInWeek[start];
			consecutiveRanges.push(range);
		}

		return consecutiveRanges.join(", ");
	};
   
	console.log("getWeekdayRange" , getWeekdayRange);



	// const handleAddFacilityMeta = () => {
	//   if (newFacilityMeta.trim() !== '') {
	// 	setFacilityMetas([...facilityMetas, { value: newFacilityMeta }]);
	// 	setNewFacilityMeta('');
	//   }
	// };

	const handleAddFacilityMeta = () => {
		if (newFacilityMeta.trim() !== "") {
			const updatedFacilityMetas = [...formik.values.facilityMetas, { value: newFacilityMeta }];
			setFacilityMetas(updatedFacilityMetas);
			// Assuming formik is defined and has a setFieldValue method
			formik.setFieldValue("facilityMetas", updatedFacilityMetas);
			setNewFacilityMeta("");
		}
	};

	// /////////////////////////////////////////////////////////////////////////////
      
	




	useEffect(() => {
		dispatch(FacilityDisplayPageAction(centerId));
	}, []);

	// copy get api dispatch
	useEffect(() => {
		dispatch(FacitilityActionCopyGetData(centerId));
	}, [datacopy]); //here in dependencecy the post api selector is used

	// this log shows eror why ? console.log(selectedFacility.id,"valuesiddddd");

	// delete get api dispatch
	useEffect(() => {
		dispatch(FacitilityActionGetDeleteData(centerId));
	}, [datadelete]);

	// update modal to show values in the form

	//  formik.setValues(values: object, shouldValidate?: boolean)
	// syntax: input tag initial values (title vs name like data.name )formik.setValues({KEY(intialvalues):value(response name for the key)})
	useEffect(() => {
		formik.setValues({
			title: dataupdateget.data?.title,
			id: dataupdateget.data?.id,
			reservationAttribute: dataupdateget.data?.reservationAttribute,
			playerAllowedMin: dataupdateget.data?.reservationAttribute?.playerAllowedMin,
			playerAllowedMax: dataupdateget.data?.reservationAttribute?.playerAllowedMax,
			durationAllowedMin: dataupdateget.data?.reservationAttribute?.durationAllowedMin,
			durationAllowedMax: dataupdateget.data?.reservationAttribute?.durationAllowedMax,
			advanceBookingMin: dataupdateget.data?.reservationAttribute?.advanceBookingMin,
			advanceBookingMax: dataupdateget.data?.reservationAttribute?.advanceBookingMax,
			facilityMetas: dataupdateget.data?.facilityMetas,
			// facilityHours: dataupdateget.data?.facilityHours,
			facilityHours: dataupdateget.data?.facilityHours,


			name: dataupdateget.data?.name,
			features: dataupdateget.data?.features,
			defaultPlayDuration: dataupdateget.data?.defaultPlayDuration,
			sku: dataupdateget.data?.sku,
			createdAt: dataupdateget.data?.sku,
			createdBy: dataupdateget.data?.createdBy,
			description: dataupdateget.data?.description,
			createdAt: dataupdateget.data?.createdAt,
			workingPlans: dataupdateget.data?.workingPlans,
		});
		 //setSelectedDaysAndTimes(dataupdateget?.data?.facilityHours);

		
		// formik.setFieldValue("title",dataupdateget.data?.title)
	}, [dataupdateget]);





	useEffect(() => {
		if (showModal) {
			dispatch(SportsPhotosAction()); // Dispatching  the action function name  to fetch sports photos from the api
		}
	}, [showModal, dispatch]);

	return (
		<>
			{data && Object.entries(data)?.length ? (
				<div>
					<div className="row">
						<div className="col-lg-2">
							<SideBar />
						</div>
						<div className="col-lg-10 ">
							<div className="container">
								<div className="vh-100" style={{ backgroundColor: "#EDEEF0", color: "black", fontSize: "13px", fontWeight: "400" }}>
									<p className="pt-2 mb-0 ms-2">Facilities </p>
									<hr className="mt-0 pt-0" />
									<div className="card border-0 rounded-3 mt-2 mb-3  ms-2 me-2 cardcolor-fdp" style={{ backgroundColor: "white" }}>
										{data &&
											Object.entries(data).map(([facilityType, facilities]) => (
												<div className="card-body">
													<div className="row  d-flex">
														<div className="col flex-grow-0 pe-1 text-nowrap ms-2 me-1">
															<h5 className="fw-bold">{facilityType}</h5>
														</div>
														<div className="col line flex-grow-1"></div>
														<div
															className="col flex-grow-0 px-1 cursor-pointer"
															//  onClick={() => openEditModal(true)}
															onClick={() => setShowModal(true)}
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
														</div>
														<div className="col flex-grow-0 p-0 me-1 cursor-pointer">
															<small
																className=" d-flex text-primary pointer"
																//    onClick={() =>openEditModal(true)}
																onClick={() => setShowModal(true)}
															>
																Add
															</small>
														</div>

														<div className="row ps-4">
															<div className="text-muted col-xl-1 col-lg-1 col-md-2">
																<p className="mb-2 facilitydpage-p">S.no</p>
															</div>
															<div className="text-muted col-xl-3 col-lg-2 col-md-2">
																<p className="mb-2 facilitydpage-p">Name</p>
															</div>

															<div className="text-muted col-xl-6 col-lg-6 col-md-5 ps-0">
																<p className="mb-2 facilitydpage-p">Features</p>
															</div>

															<div className="text-muted col-xl-2 col-lg-3 col-md-3 ">
																<p className="mb-2  facilitydpage-p">Actions</p>
															</div>
														</div>

														{facilities.map((facility, index) => (
															<div
																key={index}
																className="row mx-0 py-2 px-2 mb-2 border border-black rounded-3 "
																style={{ background: "whitesmoke" }}
															>
																<div className="col-xl-1 col-lg-1  col-md-2 ps-4">
																	<label>{index + 1}</label>
																</div>

																<div className="col-xl-3 col-lg-2 col-md-2 ps-2">
																	<span className="text-secondary pointer">{facility.name}</span>
																</div>

																<div className="col-xl-6 col-lg-6 col-md-5 ps-1">{facility.features.join(",")}</div>

																<div className="col-xl-2 col-lg-3 col-md-2 ps-4">
																	<span
																		className="d-inline-block"
																		onClick={() => {
																			openEditModal(facility);
																			dispatch(CourtGetAction(facility.id));
																		}}
																	>
																		<FaRegEdit className="editicons-fdp" />
																	</span>
																	<label className="vl">&nbsp;|</label>&nbsp;
																	<span className="d-inline-block">
																		<AiFillDollarCircle className="editicons-fdp" />
																	</span>
																	<label className="vl">&nbsp;|</label>&nbsp;
																	<span className="d-inline-block">
																		<AiOutlineSchedule className="editicons-fdp" />
																	</span>
																	<label className="vl">&nbsp;|</label>&nbsp;
																	<span className="d-inline-block" onClick={() => openCopyModal(facility)}>
																		<FaRegCopy className="editicons-fdp" />
																	</span>
																	<label className="vl">&nbsp;|</label>&nbsp;
																	<span className="d-inline-block" onClick={() => openDeleteModal(facility)}>
																		<MdDelete className="editicons-fdp" />
																	</span>
																</div>
															</div>
														))}
													</div>
												</div>
											))}
									</div>

									{/* this is card closing div */}
									{/* all 6 icon modal coding is down  */}
									{/* modal for sports pictures to pop up */}
									<Modal show={showModal} onHide={() => setShowModal(false)}>
										<div style={{ backgroundColor: "#edeef0" }}>
											<Modal.Header closeButton>
												<Modal.Title className="modelonetitle">Add {formik.values.facility?.title} </Modal.Title>
											</Modal.Header>
											<Modal.Body className="text-center">
												<div className="row ">
													{dataphoto?.data?.map((facility, index) => (
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
																		<div
																			className="text-center mt-0"
																			style={{ fontSize: "10px", fontWeight: "bold", fontFamily: "sans-serif" }}
																		>
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

									{/* modal for sports picture add form //  add sports form modal is below */}
									{/* coming... form  */}

									{/* 1st edit modal opening up here  */}
									{/* Edit Facility Modal */}
									{/* ============================================================================================= */}
									<Modal show={showEditModal} onHide={closeEditModal}>
										<Modal.Header closeButton>
											<Modal.Title className="fs-6">Court Detail</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											{selectedFacility && (
												<div>
													<div className="row fontadjustments">
														<div className="col-7" style={{ marginLeft: "-5px" }}>
															<h6 clssName="fw-bold" style={{ fontSize: "12px" }}>
																Name
															</h6>
															<hr className="mt-1"></hr>
															<div className="row">
																<div className="col-sm-5">
																	{courtget?.data?.sport?.title}

																	{/* {selectedFacility.name} {selectedFacility.id} */}
																</div>
																<div className="col-sm-7">
																	<div classname="form-check">
																		<input className=" form-check-input" type="checkbox" id="flexCheckDefault" value />
																		<label className="form-check-label" for="flexCheckDefault" value>
																			Open to Athlitik users
																		</label>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-5 fontadjustments">
															<h6 clssName="fw-bold" style={{ fontSize: "12px" }}>
																Timings
															</h6>
															<hr className="mt-1" style={{ marginRight: "-28px" }}></hr>

															<div className="row">
																<div className="col-12">
																	{courtget?.data?.facilityHours?.map((hour, index) => (
																		<span key={index} className="text-capitalize">
																			{hour.weekday}: {moment(hour.startTime, "HH:mm").format("h:mm A")} -{" "}
																			{moment(hour.endTime, "HH:mm").format("h:mm A")}
																		</span>
																	))}
																</div>
															</div>
														</div>
													</div>
													<div className="row mt-4">
														<div className="col-12 ">
															<h6 className="fw-bold" style={{ fontSize: "12px" }}>
																Reservation attributes
															</h6>
															<hr className="mt-1"></hr>
														</div>
													</div>
													<div className="row">
														<div className="col-sm-11 justify-content-between must">
															<div className="d-flex justify-content-between">
																<div className="">
																	<div className="fontadjustmentstwo text-muted">Players allowed</div>
																	<p className="fontadjustments fw-bold">
																		{courtget?.data?.reservationAttribute?.playerAllowedMin}-
																		{courtget?.data?.reservationAttribute?.playerAllowedMax}
																	</p>
																</div>

																<div className="">
																	<div className="fontadjustmentstwo text-muted">Duration allowed</div>
																	<p className="fontadjustments fw-bold">
																		{courtget?.data?.reservationAttribute?.durationAllowedMin}-
																		{courtget?.data?.reservationAttribute?.durationAllowedMax}
																	</p>
																</div>
																<div className="">
																	<div className="fontadjustmentstwo text-muted">Advanced booking window</div>
																	<p className="fontadjustments fw-bold">
																		{courtget?.data?.reservationAttribute?.advanceBookingMin}-
																		{courtget?.data?.reservationAttribute?.advanceBookingMax}
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											)}
										</Modal.Body>
										<Modal.Footer>
											<Button className="btn btn-link" style={{ textDecoration: "none", color: "red" }} onClick={closeEditModal}>
												Cancel
											</Button>
											<Button
												variant="danger"
												onClick={() => {
													setShowEditModal(false);
													setShowUpdateModal(true);
													dispatch(FacitilityActionEditGetData(selectedFacility?.id));
												}}
											>
												Edit
											</Button>
										</Modal.Footer>
									</Modal>
									{/* ======================================================================= */}

									{/* when the edit button is clicked  this edit modal opens up to update the data */}

									<div className="modal-customwidth">
										<Modal
											size="lg"
											show={showUpdateModal}
											onHide={closeUpdateModal}
											selectedFacilityId={selectedFacilityId}
											style={{ overflow: "auto" }}
										>
											<div style={{ backgroundColor: "#edeef0" }}>
												<form onSubmit={formik.handleSubmit}>
													<Modal.Header closeButton>
														<Modal.Title className="modeltwotitle">Edit </Modal.Title>
													</Modal.Header>
													<Modal.Body>
														{selectedFacility && (
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
																	{formik.touched?.title && formik.errors?.title?.length && (
																		<p className="error-text">{formik.errors?.title}</p>
																	)}

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
																				<ul>
																					{selectedDaysAndTimes.map((selectedDayAndTime, index) => (
																						<li key={index}>
																							{/* {`${selectedDayAndTime.days.join(", ")}: ${selectedDayAndTime.startTime.toLocaleTimeString([], { */}
																							{`${getWeekdayRange(
																								selectedDayAndTime.days
																							)}: ${selectedDayAndTime.startTime.toLocaleTimeString([], {
																								hour: "2-digit",
																								minute: "2-digit",
																							})} - ${selectedDayAndTime.endTime.toLocaleTimeString([], {
																								hour: "2-digit",
																								minute: "2-digit",
																							})}`}
																							{/* {`${selectedDayAndTime.days.join(", ")}: ${selectedDayAndTime.startTime} - ${selectedDayAndTime.endTime}`} */}

																							<span
																								className="delete-icon"
																								style={{ color: "red", cursor: "pointer" }}
																								onClick={() => handleDeleteSelectedDayAndTime(index)}
																							>
																								<svg
																									xmlns="http://www.w3.org/2000/svg"
																									width="16"
																									height="16"
																									viewBox="0 0 16 16"
																								>
																									<path
																										fill="red"
																										d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708"
																									/>
																								</svg>{" "}
																							</span>
																						</li>
																					))}
																				</ul>
																			</div>
																		)}
																	</div>
																</div>

															{console.log("selectedDaysAndTimes",  selectedDaysAndTimes)	}
															{console.log("selectedFacility",  selectedFacility)	}



																<div className="row mt-3">
																	<div className="col-sm-12">
																		<label className="text-muted-50 col-12 labelname  fw-bold mb-0">
																			Reservation attributes
																		</label>
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
																		{formik.errors?.playerAllowedMin?.length && (
																			<p className="error-text">{formik.errors?.playerAllowedMin}</p>
																		)}
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
																		{formik.errors?.playerAllowedMax?.length && (
																			<p className="error-text">{formik.errors?.playerAllowedMax}</p>
																		)}
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
																		{formik.errors?.durationAllowedMin?.length && (
																			<p className="error-text">{formik.errors?.durationAllowedMin}</p>
																		)}
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

																		{formik.errors?.durationAllowedMax?.length && (
																			<p className="error-text">{formik.errors?.durationAllowedMax}</p>
																		)}
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
																		{formik.errors?.advanceBookingMin?.length && (
																			<p className="error-text">{formik.errors?.advanceBookingMin}</p>
																		)}
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
																		{formik.errors?.advanceBookingMax?.length && (
																			<p className="error-text">{formik.errors?.advanceBookingMax}</p>
																		)}
																	</div>
																	<div className="col-sm-2"></div>
																</div>

																<div className="row mt-3">
																	<div className="col-sm-12">
																		<label className="text-muted-50 col-12 labelname  fw-bold mb-0">
																			Court highlights{" "}
																		</label>
																		<hr className="pt-0  mt-2" />
																	</div>
																</div>

																<div className="row">
																	<div className="col-sm-12">
																		<label className="text-muted   reservationlabelname">Features</label>
																	</div>
																</div>
																<div className="row">
																	<div className="col-6">
																		<input
																			maxLength={50}
																			type="text"
																			className="form-control"
																			onChange={(e) => setNewFacilityMeta(e.target.value)}
																			value={newFacilityMeta}

																			// onChange={formik.handleChange}
																			// value={formik.values?.facilityMetas}
																		/>
																	</div>
																	<div className="col-sm-2" style={{ opacity: "0.5", cursor: "pointer" }}>
																		<div
																			className=" d-flex align-items-center gap-0"
																			// onClick={() => {
																			// 	setAddFeatures([...addFeatures, { value: facilityFeatures }]);
																			// 	console.log("add clickkkk");
																			// }}
																		>
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				width="13"
																				height="13"
																				fill="currentColor"
																				class="bi bi-plus-circle-fill"
																				viewBox="0 0 16 16"
																				onClick={handleAddFacilityMeta}
																			>
																				<path
																					d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
																					style={{ backgroundColor: "#2d77d2", color: "#2d77d2" }}
																				/>
																			</svg>
																			<small
																				className=" d-flex text-primary"
																				onClick={handleAddFacilityMeta}
																				style={{ fontSize: "13px" }}
																			>
																				Add
																			</small>
																		</div>
																	</div>
																</div>

																{/* facility metas display code  */}

																{console.log("formik.values?.facilityMetas", formik.values?.facilityMetas)}

																<div className="row">
																	<div className="col-sm-12 d-flex">
																		{formik.values?.facilityMetas &&
																			formik.values.facilityMetas.map((facility, index) => (
																				<div key={index} className="d-flex align-items-center mt-2">
																					<span className="" style={{ fontSize: "8px" }}>
																						{facility.value}
																					</span>
																					<svg
																						xmlns="http://www.w3.org/2000/svg"
																						width="16"
																						height="16"
																						viewBox="0 0 16 16"
																						className="cursor-pointer"
																						onClick={() => {
																							const updatedFacilityMetas = [...formik.values.facilityMetas];
																							updatedFacilityMetas.splice(index, 1);
																							formik.setFieldValue("facilityMetas", updatedFacilityMetas);
																						}}
																					>
																						<path
																							fill="red"
																							d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708"
																						/>
																					</svg>
																				</div>
																			))}
																	</div>
																</div>

																{/*  =============*/}

																<div className="row">
																	<div className="col-sm-12">
																		<label className="text-muted  reservationlabelname">Images</label>
																	</div>
																</div>
																<div className="row">
																	<div className="w-100">
																		<img src={addimage} className="addimage p-3 mt-2" alt="addimage" />
																		<input
																			type="file"
																			accept="image/png, image/gif, image/jpeg"
																			className="hide_file d-none"
																		/>
																	</div>
																</div>
															</div>
														)}
													</Modal.Body>
													<Modal.Footer>
														<div className="justify-content end" style={{ fontSize: "80%" }}>
															<button
																type="submit"
																className=" btn-sm float-right me-3  align-self-center  btn btn-danger "
																style={{ backgroundColor: "red", color: "white" }}
																// onClick={() => dispatch(FacitilityActionPutData(dataupdateget.data?.id, formik?.values))}
															>
																Update
															</button>

															{/* understand the changes done here in values,data why??? */}

															{/* here we are sending this dispatch action data to  action  and telling what value should be sent remember here .....*/}
															<button
																type="button"
																className="btn btn-link modaltwocancelbutton "
																onClick={() => {
																	setShowEditModal(true);
																	setShowUpdateModal(false);
																}}
															>
																Cancel
															</button>
}
														</div>
													</Modal.Footer>
												</form>
											</div>
										</Modal>
									</div>

									{/* copy modal  */}
									<Modal show={showCopyModal} onHide={closeCopyModal}>
										<Modal.Header closeButton>
											<Modal.Title className="fs-6">Copy </Modal.Title>
										</Modal.Header>
										<Modal.Body className="d-flex flex-column align-items-center">
											{selectedFacility && (
												<div className="d-flex flex-column align-items-center ">
													<FaRegCopy className=" editiconsmodal-fdp" />

													<p>
														Would you like to copy <strong>{selectedFacility.name} </strong>?
													</p>
												</div>
											)}
										</Modal.Body>
										<Modal.Footer className="d-flex justify-content-center">
											<Button className="btn btn-link" style={{ textDecoration: "none", color: "red" }} onClick={closeCopyModal}>
												Cancel
											</Button>
											<Button variant="danger" onClick={() => dispatch(FacitilityActionCopyData(selectedFacility?.id))}>
												Copy
											</Button>
											{/* Add a Save changes button or any other actions you need */}
										</Modal.Footer>
									</Modal>

									{/* delete modal  */}
									<Modal show={showDeleteModal} onHide={closeDeleteModal}>
										<Modal.Header closeButton>
											<Modal.Title className="fs-6">Delete</Modal.Title>
										</Modal.Header>
										<Modal.Body className="d-flex flex-column align-items-center">
											{selectedFacility && (
												<div className="d-flex flex-column align-items-center">
													<MdDelete className=" editiconsmodal-fdp" />

													<p>
														Are you sure you want to delete <strong>{selectedFacility.name} </strong>?
													</p>
												</div>
											)}
										</Modal.Body>
										<Modal.Footer className="d-flex justify-content-center">
											<Button className="btn btn-link" style={{ textDecoration: "none", color: "red" }} onClick={closeDeleteModal}>
												Cancel
											</Button>
											<Button variant="danger" onClick={() => dispatch(FacitilityActionDeleteData(selectedFacility?.id))}>
												Delete
											</Button>
											{/* Add a Save changes button or any other actions you need */}
										</Modal.Footer>
									</Modal>
								</div>
								{/* this is col -10 complate background color closing div */}
							</div>
						</div>
						{/* {fragment  div and row div below  */}
					</div>
				</div>
			) : (
				<Facilities />
			)}
		</>
	);
};

export default FacilityDisplayPage;

// {selectedFacility && (
// 	<div>
// 		<p>Name: {selectedFacility.name}</p>
// 		{/* ... (other fields) ... */}
// 	</div>
// )}

// const handleAddFacility = (facilityId) => {
// 	// Handle logic for adding a facility
// 	setSelectedFacilityId(facilityId); // to handle the sports id to pass to another modal for post api to work
// 	setShowModal(false); // Close the modal after adding
// 	setShowAddSportsModal(true); // Show the second modal
// };

// const handleDayChange = (day) => {
// 	if (selectedWeekdays.includes(day.fullName)) {
// 		setSelectedWeekdays(selectedWeekdays.filter((selectedDay) => selectedDay !== day.fullName));
// 	} else {
// 		setSelectedWeekdays([...selectedWeekdays, day.fullName]);

// 	}

// 	if (chooseDays.includes(day.shortName)) {
// 		setChooseDays(chooseDays.filter((chooseDays) => chooseDays !== day.shortName));
// 	} else {
// 		setChooseDays([...chooseDays, day.shortName]);
// 	}

// };
