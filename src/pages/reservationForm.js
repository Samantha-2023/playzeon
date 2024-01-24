import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomInput from "../pages/customInput";
import CustomTimeInput from "./custtomTimeInput";

const ReservationForm = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	return (
		<div>
			<div className="content  d-flex flex-column bg-lightgrey px-2">
				<div className="overflow-hidden container-fluid">
					<div className="row">
						<div className="col-sm-12 text-end mt-3">
							<button disabled className="btn btn-danger me-4">
								Cancel
							</button>
						</div>

						<div className="row" style={{ marginBottom: "2rem" }}>
							<div className="pe-1 col-sm-3">
								<form className="tablecard p-3 mt-2" id="grow">
									<p>Select filter</p>
									<div className="col-lg-12 col-md-12 col-sm-12">
										<div className="row">
											<div className="mb-0 me-2 position-relative">
												<label className="me-2 bookingtext form-label">Reservation number</label>
												<input
													label="Reservation number"
													className="bookingtext form-control"
													placeholder="Reservation number"
													name="reservationNumber"
													type="text"
													value="Reservation number"
												/>
											</div>
										</div>

										<div className="row">
											<div className="mb-0 me-2 position-relative">
												<label className="me-2 bookingtext form-label">First name</label>
												<input
													label="First name"
													className="bookingtext form-control"
													placeholder="First name"
													name="firstName"
													type="text"
													value="First name"
												/>
											</div>
										</div>

										<div className="row">
											<div className="mb-0 me-2 position-relative">
												<label className="me-2 bookingtext form-label">Last name</label>
												<input
													label="Last name"
													className="bookingtext form-control"
													placeholder="Last name"
													name="lastName"
													type="text"
													value="Last name"
												/>
											</div>
										</div>

										<div className="row">
											<div className="mb-0 me-2 position-relative">
												<label className="me-2 bookingtext form-label">Start Date</label>
												<DatePicker
													toggleCalendarOnIconClick
													selected={startDate}
													onChange={(date) => setStartDate(date)}
													showIcon
													customInput={<CustomInput />}
												/>
											</div>
										</div>

										<div className="row">
											<div className="mb-0 me-2 position-relative">
												<label className="me-2 bookingtext form-label">End Date</label>
												<DatePicker
													toggleCalendarOnIconClick
													selected={endDate}
													onChange={(date) => setEndDate(date)}
													showIcon
													customInput={<CustomInput />}
												/>
											</div>
										</div>

										<div className="row">
											<div className="mb-0 me-2 position-relative">
												<label className="me-2 bookingtext form-label">Start time</label>
												<DatePicker
													selected={startDate}
													onChange={(date) => setStartDate(date)}
													showTimeSelect
													showTimeSelectOnly
													timeIntervals={15}
													timeCaption="Time"
													dateFormat="h:mm aa"
													customInput={<CustomTimeInput />}
												/>
											</div>
										</div>

										<div className="row">
											<div className="mb-0 me-2 position-relative">
												<label className="me-2 bookingtext form-label">End time</label>
												<DatePicker
													selected={endDate}
													onChange={(date) => setEndDate(date)}
													showTimeSelect
													showTimeSelectOnly
													timeIntervals={15}
													timeCaption="Time"
													dateFormat="h:mm aa"
													customInput={<CustomTimeInput />}
												/>
											</div>
										</div>
									</div>
								
								<div className="mt-2 d-flex justify-content-end">
									<label className="text-danger cursor-pointer text-decoration-none me-3 align-self-center">Clear</label>
									<button type="submit" className="btn btn-danger py-1 cursor-pointer">
										Apply
									</button>
								</div>
								</form>
							</div>

							<div className="col-sm-9">
								<div className="container px-0">
									<div className="card tablecard mt-2">
										<div className="card-body  pt-0" style={{ overflowX: "auto" }}>
											<table className="table border-0 table-spacing text-nowrap">
												<thead style={{ position: "sticky", top: "0px", zIndex: "1" }}>
													<tr className="tableheadrow bg-white">
														<th className="text-muted  border-0"> Reservation no.</th>
														<th className="text-muted  border-0"> First name</th>
														<th className="text-muted  border-0"> Last name</th>
														<th className="text-muted  border-0"> Reservation date&time</th>
														<th className="text-muted  border-0"> Description</th>
														<th className="text-muted  border-0"> Type of booking</th>
														<th className="text-muted  border-0"> Booking date&time</th>
														<th className="text-muted  border-0">
															<div>
																<input type="checkbox" className="form-check-input" />
															</div>
														</th>
														<th className="text-muted  border-0">Action</th>
													</tr>
												</thead>
												<tbody>
													<tr style={{ background: "white" }}>
														<td className="border border-white" colspan="12"></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReservationForm;
