import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import addbanner from "../images/addbanner.svg";
import "./addcenter.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import addimage from "../images/addimage.svg";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";
import Container from "react-bootstrap/Container";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AddCenterAction } from "../redux/action/actionAddCenter";

const AddCenter = () => {
    const dispatch = useDispatch();

	const startTimeRef = useRef();
	const [showstarttime, setShowStartTime] = useState(null);
	const [showendtime, setShowEndTime] = useState(null);

	// just for use in case
	//  const [startTime, setStartTime] = useState(null);
	//  const [endTime, setEndTime] = useState(null);
	 const [date, setDate] = useState();
// above use state 

const [startTime, setStartTime] = useState(null);
const [endTime, setEndTime] = useState(null);
 
	const [name, setName] = useState("");
    const[street, setStreet] = useState("");
	const[city,setCity] = useState("");
	const[state,setState] = useState("");
	const[zip, setZip] = useState("");
    const[phonenumber, setPhoneNumber] = useState("");
    const[email, setEmail] =useState("");
	const[businesshours,setBusinessHours]= useState("");
	const[timezone,setTimeZone]= useState(" ");

	const [chooseDays, setChooseDays] = useState([]);
	const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const initialValues={
       displayName:" ",
	   title:" ",
	   streetAddress:" ",
	   suite:" ",
	   city:" ",
	   stateProvince:" " ,
	   zipCode:" ",
	   phoneNumber:" ",
	   email:" " ,
	   organization:{
		id:" ",
	   },
	  timezone:{
		id:" ",
	  },
	   centerHours:[{
		weekday:" ",
		startTime:" ",
		endTime:" ",
		createdAt:" ",
		updatedAt:" ",
   }],
	};

	const validationSchema = Yup.object().shape({
     
		phoneNumber: Yup.string()
		.matches(/^[0-9]{10}$/, 'Phone number must be a 10-digit number')
		.required('Phone number is required'),

		email: Yup.string()
			.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/, 'Enter a valid email')
			.required('Enter a valid mail id'),

		displayName: Yup.string()
           .min(2, 'Name is required !')
           .max(50, 'Too Long!')
           .required('Name is Required'),

        streetAddress: Yup.string()
         .min(2, ' Street is required!')
         .max(50, 'Too Long!')
         .required('Street  is Required'),
		
		 city: Yup.string()
		 .min(2, 'City is required!')
         .max(50, 'Too Long!')
         .required('City is Required'),

		 stateProvince: Yup.string()
		 .min(2, 'State is required!')
         .max(50, 'Too Long!')
         .required('State is Required'),

		 zipCode: Yup.string()
		.required('Zip code is required'),
	
	});


	const submitForm = async (values) => {
		try {
		  dispatch( AddCenterAction(values))
		}
			catch(error) {
				console.error("Form submission failed", error);
			}

		    }





    const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: submitForm,
	});

	console.log( formik.errors?.email);
	console.log( formik.errors?.name);
	console.log( formik.errors?.phonenumber);


	const handleDayChange = (day) => {
		if (chooseDays.includes(day)) {
		  setChooseDays(chooseDays.filter((chooseDays) => chooseDays !== day));
		} else {
		  setChooseDays([...chooseDays, day]);
		}
	  };






	const handleTimeChange = (time) => {
			setShowStartTime(time);
			// setStartTime(time);
	}
	const handleEndTimeChange = (time) => {
			setShowEndTime(time);
			// setEndTime(time);
		}

	return (
		<div>
      		{/* <Container className="flex-fill"><div className="d-flex">*/}

			 <div className='row'>
			 <div className='col-lg-2'> <SideBar /> </div> 
			 <div className='col-lg-10 '> 
			<div className="card w-100" style={{ backgroundColor: "#edeef0"  }}>
				<div className="card-body">
					<Form className="form-control form-control-sm"  onSubmit={formik.handleSubmit}>
						<div classname="row">
							<div className="col-xl-4">
								<label htmlFor="name" className="form-label">
									Name
								</label>
								<label>
									<span className="text-danger">*</span>
								</label>
								<input  className="form-control" id="inputname" 
								placeholder="" 
								name="displayName"
								type="text"
								onChange={formik.handleChange}
								value={formik.values.displayName}/>
							</div>
						</div>
						{ formik.touched.displayName && formik.errors?.displayName?.length && (
  <p className="error-text">{formik.errors?.displayName}</p>
)}
						{/* 1st row in form- name */}
						<div className="col-12 mt-1">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" id="gridCheck" />
								<label className="form-check-label" for="gridCheck">
									Display this name to Athlitik users
								</label>
							</div>
						</div>
						
						{/*  */}
						<div className="col-12 mt-4">
							<h6 className="text-dark">Address & timings</h6>
							<hr />
						</div>
						{/*  */}
						<div className="row">
							<div class="col-xl-4  col-md-6 mt-2">
								<label htmlFor="street" className="form-label">
									Street
								</label>
								<label>
									<span className="text-danger">*</span>
								</label>
								<input className="form-control" id="inputname"
								 placeholder="" 
								 name="streetAddress"
								 type="text"
								onChange={formik.handleChange}
								value={formik.values.streetAddress}
								 
								 />
							</div>

							{ formik.touched.streetAddress && formik.errors?.streetAddress?.length && (
  <p className="error-text">{formik.errors?.streetAddress}</p>
)}

							<div class="col-xl-1  col-md-3 mt-2">
								<label htmlFor="suite" className="form-label">
									Suite
								</label>
								<input type="text" className="form-control" id="inputname" placeholder="" />
							</div>

							<div class="col-xl-2  col-md-4 mt-2">
								<label htmlFor="city" className="form-label">
									City
								</label>
								<label>
									<span className="text-danger">*</span>
								</label>
								<input  className="form-control" id="inputname"
								 placeholder=""
								 name="city"
								 type="text"
								onChange={formik.handleChange}
								value={formik.values.city}
																 
								 />
								 { formik.touched.city && formik.errors?.city?.length && (
  <p className="error-text">{formik.errors?.city}</p>)}

							</div>
							{/* { formik.touched.city && formik.errors?.city?.length && (
  <p className="error-text">{formik.errors?.city}</p>)} */}



							<div class="col-xl-2  col-md-4 mt-2">
								<label htmlFor="state" className="form-label">
									State
								</label>
								<label>
									<span className="text-danger">*</span>
								</label>
								<input className="form-control" id="inputname"
								 placeholder=""
								 name="stateProvince"
								 type="text"
								onChange={formik.handleChange}
								value={formik.values.stateProvince}
								 
							 />

{ formik.touched.stateProvince && formik.errors?.stateProvince?.length && (
  <p className="error-text">{formik.errors?.stateProvince}</p>)}	
							</div>

									




							<div class="col-xl-2  col-md-4 mt-2">
								<label htmlFor="zip" className="form-label">
									Zip
								</label>
								<label>
									<span className="text-danger">*</span>
								</label>
								<input  className="form-control" id="inputname"
								 placeholder=""
								 name="zipCode"
								 type="text"
								onChange={formik.handleChange}
								value={formik.values.zipCode}
								 
								 
								 />
								 { formik.touched.zipCode && formik.errors?.zipCode?.length && (
  <p className="error-text">{formik.errors?.zipCode}</p>)}			

							</div>

							

						</div>
						{/*  */}

						<div className="row mt-4">
							<div class="col-sm-4">
								<label htmlFor="phonenumber" className="form-label">
									Phone number
								</label>
								<label>
									<span className="text-danger">*</span>
								</label>
								<input  className="form-control" id="inputname" 
								placeholder=""
								name="phoneNumber"
								type="number"
							   onChange={formik.handleChange}
							   value={formik.values.phoneNumber}
																
								/>
							</div>

							{ formik.touched.phoneNumber && formik.errors?.phoneNumber?.length && (
  <p className="error-text">{formik.errors?.phoneNumber}</p>)}
			


							<div class="col-sm-4">
								<label for="email" className="form-label">
									Email
								</label>
								<label>
									<span className="text-danger">*</span>
								</label>
								<input  className="form-control" id="input_AddLocationEmail" 
								placeholder=""
								name="email"
								type="text"
							   onChange={formik.handleChange}
							   value={formik.values.email}
								
								/>
								{ formik.touched.email && formik.errors?.email?.length && (
  <p className="error-text">{formik.errors?.email}</p>)}
							</div>

							



						</div>

						<div className="row mt-4">
							<div className="col-sm-4">
								<label for="timezone" className="form-label">
									Time Zone
								</label>
								<label>
									<span className="text-danger">*</span>
								</label>
								{/* <input type=""  name ="timezone" className="form-control" id="input_Timezone" placeholder=""/> */}
								<select class="form-select form-select-sm" aria-label="Small select example"  name ="timezone"
								//  type="timezone"
							   onChange={formik.handleChange}
							   value={formik.values.timezone} >
										
																
									<option selected>Select the Time Zone</option>
									<option value="1">Alaska Time</option>
									<option value="2">Central Time</option>
									<option value="3">Eastern Time</option>
									<option value="3">Pacific Time</option>
									<option value="3">Hawaii Time</option>
									<option value="3">Mountain Time</option>
								</select>
							</div>
						</div>
						{/*  */}

						<div className="row mt-4">
							<label className="title">
								Business hours
								<label>
									<span className="text-danger">*</span>
								</label>
							</label>
						</div>
						{/*  */}
													
													
													
		<div className="row">
        <div className="col-lg-7 d-flex flex-row pe-0">
          {daysOfWeek.map((day) => (
            <div key={day} className="form-check form-check-inline mt-2 me-2">
              <input
                className="form-check-input"
                type="checkbox"
                id={`day-${day}`}
                value={day}
                checked={chooseDays.includes(day)}
                onChange={() => handleDayChange(day)}
              />
              <label className="form-check-label" htmlFor={`day-${day}`}>
                {day}
              </label>
            </div>
          ))}
        </div>
      </div>







							
						{/*  */}
						<div className="row mt-4">
							<div className="col-lg-12 my-2 d-flex ">
							<div className="d-flex gap-3 align-items-baseline mt-2">
                      <div className="">
                        <DatePicker
                          className="form-control ps-1 cursor-pointer "
                          popperPlacement="bottom"
                          selected={startTime}
                          onChange={(time)=> setStartTime(time)}
                           showTimeSelect
                          showTimeSelectOnly
                          timeFormat="h:mm aa"
                          timeIntervals={30}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          placeholderText="Please select start time"
                        />
                        {/* <div className="arrow-select">
                          <Icon icon="fe:arrow-down" />
                        </div> */}
                      </div>
                      <div className="">
                        <DatePicker
                          className="form-control ps-1 cursor-pointer "
                          popperPlacement="bottom"
                          selected={endTime}
                          onChange={(time)=> setEndTime(time)}
                           showTimeSelect
                          showTimeSelectOnly
                          timeFormat="h:mm aa"
                          timeIntervals={30}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          placeholderText="Please select end time"
                        />
                         {/* <div className="arrow-select">
                          <Icon icon="fe:arrow-down" />
                        </div>  */}
                      </div>
                      <div className="">
                        {/* <Icon icon="gridicons:add" color="#2d77d2" /> */}
                        <small className="text-primary fs-6">Add</small>
                      </div>
                    </div>
											
							</div>
						</div>

						{/*  */}
						<div className="row mt-5">
							<h6 className="text-dark m-0"> Upload images</h6>
						</div>
						<hr />
						<div className="row mt-2">
							<div className="col-sm-3">
								<div className="row text-muted mb-2">
									<div className="col-xl-6 title " style={{ fontsize: "89%" }}>
										Banner image
									</div>
									<div className="col-xl-6  text-end title  mt-1" style={{ fontSize: "70%" }}>
										Min:800px x 600px
									</div>
								</div>
								<div>
									<img src={addbanner} className="w-100 bannerimage" alt="browse to add images " style={{ width: "175px" }} />
								</div>
								<div className=" mt-2 btn btn-outline-primary px-xl-4 px-lg-2 px-md-0  browse">
									Browse
									<input type="file" accept="image/png, image/gif, image/jpeg" className="hide_file d-none" />
								</div>
							</div>
							{/*  */}
							<div className=" col-5 ps4">
								<div className="row text-muted ps-2">
									<div className="small title">
										Add more images
										<label>
											<span className="text-danger">*</span>
										</label>
										<label>
											<span style={{ fontSize: "70%" }}>&nbsp; Min : 300px x 300px</span>
										</label>
									</div>
									{/* <div className="title ms-3 mt-1" style={{fontSize:"70%"}}>Min : 300px x 300px</div> */}
								</div>
								<div className="w-100">
									<img src={addimage} className="addimage p-3 mt-2" alt="addimage" />
									<input type="file" accept="image/png, image/gif, image/jpeg" className="hide_file d-none" />
								</div>
							</div>

							<hr className="mt-2" />
							<div className="justify-content end" style={{ fontSize: "80%" }}>
								<button
									className=" btn-sm float-right me-3  align-self-center  btn btn-danger "
									style={{ backgroundColor: "red", color: "white" }}
								>
									Save
								</button>
								<button type="submit" className=" btn-sm float-right bg-white text-primary border-0 me-3  align-self-center btn btn-danger ">
									Cancel
								</button>
							</div>
						</div>
					</Form>

					{/* card div below */}
				</div>
			</div>
      </div>
      </div>
{/* </Container> */}
			{/* fragment div below */}
		</div>
	);
};

export default AddCenter;

{
	/* <div className="react-datepicker-wrapper">
<div className="react-datepicker-container">
  <span  role="alert" aria-live="polite" className='react-datepicker_aria-live'>
Selected time:
  </span>
<input type="text" placeholder='Please select end time' className="form-control ps-1" value/>
</div> */
}


// =======================================
// <div className="form-check form-check-inline mt-2 me-2">
// 									<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
// 									<label className="form-check-label" for="inlineCheckbox1">
// 										Sun
// 									</label>
// 								</div>
// 								<div className="form-check form-check-inline mt-2 me-2">
// 									<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
// 									<label className="form-check-label" for="inlineCheckbox2">
// 										Mon
// 									</label>
// 								</div>
// 								<div className="form-check form-check-inline mt-2 me-2">
// 									<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
// 									<label className="form-check-label" for="inlineCheckbox2">
// 										Tue
// 									</label>
// 								</div>
// 								<div className="form-check form-check-inline mt-2 me-2">
// 									<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
// 									<label className="form-check-label" for="inlineCheckbox2">
// 										Wed
// 									</label>
// 								</div>
// 								<div className="form-check form-check-inline mt-2 me-2">
// 									<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
// 									<label className="form-check-label" for="inlineCheckbox2">
// 										Thu
// 									</label>
// 								</div>
// 								<div className="form-check form-check-inline mt-2 me-2">
// 									<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
// 									<label className="form-check-label" for="inlineCheckbox2">
// 										Fri
// 									</label>
// 								</div>
// 								<div className="form-check form-check-inline mt-2 me-2">
// 									<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
// 									<label className="form-check-label" for="inlineCheckbox2">
// 										Sat
// 									</label>
// 								</div>
//  =====================time picker =======================================
{/* <div className="react-datepicker-wrapper">
  <div className="react-datepicker_input-container  ">
  <span role="alert" aria-live="polite" class="react-datepicker_aria-live"></span>
    <input type="text" placeholder='Please select start time' className="form-control ps-1 react-datepicker-ignore-onclickoutside" /> 
    </div></div> */}
								{/* <TimePickerComponent  placeholder="Select a start time" style={{borderRadius:"1px solid"}}>  </TimePickerComponent> */}


								// -----------------------------------------
								{/* <div className="react-datepicker-wrapper">
  <div className="react-datepicker_input-container"> 
  <span role="alert" aria-live="polite" class="react-datepicker_aria-live"></span>
     <input type="text" placeholder='Please select end time' className="form-control ps-1" /> 
    </div></div>  */}
	// ======================================================================================


	// <DatePicker
	// 								className="form-control ps-1"
	// 								ref={startTimeRef}
	// 								popperPlacement="bottom"
	// 								selected={showstarttime}
	// 								onChange={(time) => handleTimeChange(time)}
	// 								showTimeSelect
	// 								showTimeSelectOnly
	// 								timeFormat="h:mm aa"
	// 								timeIntervals={30}
	// 								timeCaption="Time"
	// 								dateFormat="h:mm aa"
	// 								placeholderText="Please select start time"
	// 							/>
	
								{/*  */}
								// &nbsp; &nbsp;
								
								// <DatePicker
								// 	className="form-control ps-1"
								// 	ref={startTimeRef}
								// 	popperPlacement="bottom"
								// 	selected={showendtime}
								// 	onChange={(time) => handleEndTimeChange(time)}
								// 	showTimeSelect
								// 	showTimeSelectOnly
								// 	timeFormat="h:mm aa"
								// 	timeIntervals={30}
								// 	timeCaption="Time"
								// 	dateFormat="h:mm aa"
								// 	placeholderText="Please select end time"
								// />
								// <div className="ms-1 mt-2 text-secondary d-flex add">
								// 	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-2 -2 24 24">
								// 		<g transform="rotate(-90 10 10)">
								// 			<path
								// 				fill="#2d77d2"
								// 				d="M11 11h4a1 1 0 0 0 0-2h-4V5a1 1 0 0 0-2 0v4H5a1 1 0 1 0 0 2h4v4a1 1 0 0 0 2 0v-4zm-1 9C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10z"
								// 			/>
								// 		</g>
								// 	</svg>
								// 	Add
								// </div>