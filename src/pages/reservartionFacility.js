import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReservationGetFacilityType } from "../redux/action/reservationAction";
import { ReservationGetListFacility } from "../redux/action/reservationListFacilityAction";
import { GetListReservationAction } from "../redux/action/listReservationAction";
import { AllFacilitiesList } from "../redux/action/allFacilitiesListAction";
// import { useNavigate } from "react-router-dom";

const ReservationFacility = (props) => {
	const dispatch = useDispatch();

	const [facilityValue, setFacilityValue] = useState([]);

	const [allsports, setAllSports] = useState([]);

	const [sportsfacilitylist, setSportsFacilityList] = useState([]);

	const [facilityNames, setFacilityNames] = useState([]);

	// This selector is for sports photos
	const reservationfacilitytypeselector = useSelector((state) => state.reservationfacilitytypeget?.reservationfacilitytype);
	//get api data is here	//reservationfacilitytypeget is from the reducer== index.js//reservationfacilitytype is the initial values set in reducer//
	console.log("reservationfacilitytypeselector", reservationfacilitytypeselector);

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

	const handleSelectChange = (event) => {
		const selectedFacilityType = event.target.value;
		setFacilityValue(selectedFacilityType);
		dispatch(ReservationGetListFacility(selectedFacilityType));

		dispatch(AllFacilitiesList(selectedFacilityType));
	};

	const handleSearchClick = () => {
		console.log(allsports, "all sports", sportsfacilitylist, "sportsfacilitylist");
		dispatch(GetListReservationAction(allsports));
	};
	//just to show only the names
	useEffect(() => {
		if (reservationlistselector && reservationlistselector?.data) {
			console.log("test name", reservationlistselector);
			const names = Object.values(reservationlistselector?.data).map((item) =>
					item?.map((val)=>{
						return { id: val.id, title: val.name }
					})
			  );

			console.log(names[0], "names[0]");
			props.setDndAllSports(names)
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
							<button type="button" className="me-3 text-white btn btn-danger" style={{ marginTop: "32px" }}>
								Add a booking
							</button>
						</div>
					</div>
				</div>
			</div>
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
