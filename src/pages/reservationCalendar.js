import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";

// import 'react-calendar/dist/Calendar.css';

const ReservationCalendar = (props) => {

    const { myEventsList } = props; 

    const localizer = momentLocalizer(moment)
   
    return(
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
    );
    }
export default ReservationCalendar;









