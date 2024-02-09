
import React from "react";
import { render } from "react-dom";
import events from "./events";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const DragAndDropCalendar = withDragAndDrop(Calendar);

const localizer = momentLocalizer(moment);

class Dnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events
    };

    this.moveEvent = this.moveEvent.bind(this);
    this.newEvent = this.newEvent.bind(this);
  }

  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    const { events } = this.state;

    const idx = events.indexOf(event);
    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = { ...event, start, end, allDay };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    this.setState({
      events: nextEvents
    });

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state;

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents
    });

    //alert(`${event.title} was resized to ${start}-${end}`)
  };

  newEvent(event) {
    // let idList = this.state.events.map(a => a.id)
    // let newId = Math.max(...idList) + 1
    // let hour = {
    //   id: newId,
    //   title: 'New Event',
    //   allDay: event.slots.length == 1,
    //   start: event.start,
    //   end: event.end,
    // }
    // this.setState({
    //   events: this.state.events.concat([hour]),
    // })
  }

  render() {
    return (
      <DragAndDropCalendar
        style={{ height: 700 }}
        selectable
        popup
        localizer={this.props.localizer}
        events={this.state.events}
        onEventDrop={this.moveEvent}
        resizable
        onEventResize={this.resizeEvent}
        onSelectSlot={this.newEvent}
        onDragStart={console.log}
        defaultView={Views.MONTH}
        defaultDate={new Date(2015, 3, 12)}
      />
    );
  }
}

const App = () => <Dnd localizer={localizer} />;

render(<App />, document.getElementById("root"));





// ----------------------------------------------------------------------------------------------------------

// import React, { Fragment, useMemo } from 'react'
// import PropTypes from 'prop-types'
// import { Calendar, Views, DateLocalizer } from 'react-big-calendar'

// const events = [
//   {
//     id: 0,
//     title: 'Board meeting',
//     start: new Date(2018, 0, 29, 9, 0, 0),
//     end: new Date(2018, 0, 29, 13, 0, 0),
//     resourceId: 1,
//   },
//   {
//     id: 1,
//     title: 'MS training',
//     allDay: true,
//     start: new Date(2018, 0, 29, 14, 0, 0),
//     end: new Date(2018, 0, 29, 16, 30, 0),
//     resourceId: 2,
//   },
//   {
//     id: 2,
//     title: 'Team lead meeting',
//     start: new Date(2018, 0, 29, 8, 30, 0),
//     end: new Date(2018, 0, 29, 12, 30, 0),
//     resourceId: [2, 3],
//   },
//   {
//     id: 11,
//     title: 'Birthday Party',
//     start: new Date(2018, 0, 30, 7, 0, 0),
//     end: new Date(2018, 0, 30, 10, 30, 0),
//     resourceId: 4,
//   },
// ]

// const resourceMap = [
//   { resourceId: 1, resourceTitle: 'Board room' },
//   { resourceId: 2, resourceTitle: 'Training room' },
//   { resourceId: 3, resourceTitle: 'Meeting room 1' },
//   { resourceId: 4, resourceTitle: 'Meeting room 2' },
// ]

// export default function Resource({ localizer }) {
//   const { defaultDate, views } = useMemo(
//     () => ({
//       defaultDate: new Date(2018, 0, 29),
//       views: ['day', 'work_week'],
//     }),
//     []
//   )

//   return (
//     <Fragment>
//       <div className="height600">
//         <Calendar
//           defaultDate={defaultDate}
//           defaultView={Views.DAY}
//           events={events}
//           localizer={localizer}
//           resourceIdAccessor="resourceId"
//           resources={resourceMap}
//           resourceTitleAccessor="resourceTitle"
//           step={60}
//           views={views}
//         />
//       </div>
//     </Fragment>
//   )
// }
// Resource.propTypes = {
//   localizer: PropTypes.instanceOf(DateLocalizer),
// }
















// ------------------------------------------------------------------------------------------------------

// import React from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// // import 'react-calendar/dist/Calendar.css';

// const ReservationCalendar = (props) => {
// 	const { myEventsList } = props;

// 	const localizer = momentLocalizer(moment);

// 	return (
// 		<div>
// 			<Calendar
// 				localizer={localizer}
// 				events={myEventsList}
// 				startAccessor="start"
// 				endAccessor="end"
// 				defaultView={"day"}
// 				views={["month", "week", "day"]}
// 				style={{ height: 500 }}
// 			/>
// 		</div>
// 	);
// };
// export default ReservationCalendar;
