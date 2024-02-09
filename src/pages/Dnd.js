import React, { useEffect, useState } from "react";
import { Calendar, globalizeLocalizer, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import moment from "moment";
import { GetListReservationAction } from "../redux/action/listReservationAction";
import { useDispatch, useSelector } from "react-redux";


const Dnd = () => {
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
          console.log("title",title);
          setEvents([{ title:title, start: new Date(), end: new Date() }]); 
          
        }
      }, [getlistreservation]);



	return (
        <>
        <DnDCalendar 
            localizer={localizer}
            defaultView="day"
            events={events}

         />
        </>
    );
};
export default Dnd;













