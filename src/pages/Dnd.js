import React, { useEffect, useState } from "react";
import { Calendar, globalizeLocalizer, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import moment from "moment";
import { GetListReservationAction } from "../redux/action/listReservationAction";
import { useDispatch, useSelector } from "react-redux";
import "../components/playzeon.css";

const Dnd = (props) => {
	const DnDCalendar = withDragAndDrop(Calendar);
	const localizer = momentLocalizer(moment);
	const dispatch = useDispatch();
	const [events, setEvents] = useState([]);

	// this selector is used for search api.....dynamically pass the id
	const getlistreservation = useSelector((state) => state.getlistreservation?.listreservationinitial);
	console.log("getlistreservation", getlistreservation?.data?.myresources?.title);

	

	useEffect(() => {
		dispatch(GetListReservationAction());
	}, [dispatch]);
	

	useEffect(() => {
		if (getlistreservation) {
			const title = getlistreservation?.data?.myresources?.[0]?.title;
			const id = getlistreservation?.data?.myresources?.[0]?.id;
			console.log("getlistreservation", getlistreservation);
			console.log("title", title, "id", id);
			setEvents([{ id: id, title: title, start: new Date(), end: new Date() }]);
		}
	}, [getlistreservation]);

	console.log("props::",props.dndallsports[0]);
	return (
		<>
			<DnDCalendar
				localizer={localizer}
				defaultView="day"
				// resources={props.dndfacilitylist}
				 resources={props&&props.dndfacilitylist[0]?.title === "All Sports"?props.dndallsports[0]:props.dndfacilitylist}
				//  eventStyleGetter={eventStyleGetter}
			/>
		</>
	);
};
export default Dnd;








// const eventStyleGetter = (event, start, end, isSelected) => {
	// 	return {
	// 		style: {
	// 			backgroundColor: "red",
	// 			color: "white",
	// 			borderRadius: "5px",
	// 			boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
	// 		},
	// 	};
	// };