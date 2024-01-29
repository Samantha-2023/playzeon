import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReservationGetFacilityType } from "../redux/action/reservationAction";
import { ReservationGetListFacility } from "../redux/action/reservationListFacilityAction";
import { GetListReservationAction } from "../redux/action/listReservationAction";
// import { useNavigate } from "react-router-dom";

const ReservationFacility = () => {
	const dispatch = useDispatch();

	const [facilityValue, setFacilityValue] = useState([]);

	const reservationfacilitytypeselector = useSelector((state) => state.reservationfacilitytypeget?.reservationfacilitytype);
	//get api data is here	//reservationfacilitytypeget is from the reducer== index.js//reservationfacilitytype is the initial values set in reducer//
	console.log("reservationfacilitytypeselector", reservationfacilitytypeselector);


   const reservationlistselector= useSelector((state)=> state.reservationfacilitylist?.reservationlistfacility);
   console.log("reservationlistselector",   reservationlistselector);



   const getlistreservation =useSelector((state)=> state.getlistreservation?.listreservationinitial);
   console.log("getlistreservation",getlistreservation);




	const handleSelectChange = (event) => {
		const selectedFacilityType = event.target.value;
		setFacilityValue(selectedFacilityType);
		dispatch(ReservationGetFacilityType(selectedFacilityType));
	};
	//   here changes of another api action remember to change


	const handleSearchClick=()=>{
		const action = GetListReservationAction();
		dispatch(action);
	}

	 useEffect(() => {
		dispatch(ReservationGetListFacility());
	 }, []);



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
									<option key={facility.id} value={facility.id} className="fw-semibold" style={{ fontSize: "10px" }}>
										{facility.title}
									</option>
								))}
						</select>
					</div>

					<div className="flex-grow-1">
						<label className="booking-text form-label">
							Facilities<span className="text-danger">*</span>
						</label>
						<select placeholder="Please select an option" className="mb-2 w-75  form-select">
							<option value="All court" label="All court"></option>
							<option className="fw-semibold" value="1">
								New sports center
							</option>
						</select>
					</div>

					<div className="me-3">
						<label className="bookingtext form-label">Date</label>
						<input type="date" className="form-control" value="" style={{ width: "200px" }}></input>
					</div>

					<div className="d-flex justify-content-between">
						<div>
							<button type="button" className="me-3 text-white btn btn-primary" style={{ marginTop: "32px" }}>
								<div className="d-flex align-items-center">
									<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
										<path
											fill="white"
											d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
										/>
									</svg>
									<span
									 onClick={handleSearchClick} style={{cursor:"pointer"}}> Search </span>
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

//   <option className="fw-semibold" value="1">
// 		Tennis Court
// 	</option>
// 	<option className="fw-semibold" value="2">
// 		Football field
// 	</option>
// 	<option className="fw-semibold" value="1">
// 		Racquetball Court
// 	</option>
// 	<option className="fw-semibold" value="1">
// 		Basketball Court
// 	</option>
// 	<option className="fw-semibold" value="1">
// 		Baseball field
// 	</option>
// 	<option className="fw-semibold" value="1">
// 		Soccer field
// 	</option>
// 	<option className="fw-semibold" value="1">
// 		Ping pong table
// 	</option>
// 	<option className="fw-semibold" value="1">
// 		Ice hockey rink
// 	</option>
// 	<option className="fw-semibold" value="1">
// 		Swimming pool
// 	</option>
// 	<option className="fw-semibold" value="1">
// 		Yoga room
// 	</option>
// 	<option className="fw-semibold" value="1">
// 		Pickle ball court
// 	</option>
