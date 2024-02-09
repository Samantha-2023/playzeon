import ReactDOM from "react-dom";
import Login from "./components/login"
import LoginMain from "./components/loginmain"
import Loginpartner from "./components/loginpartner"
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import AddCenter from "./pages/addcenter";
import Combine from "./combine";
import DashBoard from "./pages/dashboard";
import { Switch} from "react";
import { RiDashboard2Fill } from "react-icons/ri";
import Layout from "./components/layout";
import Organisation from "./pages/organisation";
import Facilities from "./pages/facilities";
import FacilityDisplayPage from "./pages/facilityDisplayPage";
import Refunds from "./pages/refunds";
import Past from "./pages/past";
import Reservation from "./pages/reservation";
// import ReservationCalendar from "./pages/reservationCalendar";
import ReservationFacility from "./pages/reservartionFacility";


export default function App() {
  return (
    <div className="App">

 <BrowserRouter>
       <Routes>
      <Route path="/" element={<Login/>} />
       <Route path="/dashboard" element={<>  <NavBar/>  <Combine/>     </> } /> 

        <Route path="/addcenter"  element={<>    <NavBar/> <AddCenter/> </> }  >
       </Route>    


       <Route path="/organization"  element={<>    <NavBar/> <Organisation/> </> }  >
       </Route> 

       
       <Route path="/facilities"  element={<>    <NavBar/> <Facilities/> </> }  >
       </Route>  
       
       <Route path="/facilitiesdisplaypage"  element={<>    <NavBar/> < FacilityDisplayPage/> </> }  >
       </Route>  

       <Route path="/refunds"  element={<>    <NavBar/> < Refunds/> </> }  >
       </Route> 

       <Route path="/refunds_past"  element={<>    <NavBar/> <Past/> </> }  >
       </Route> 

       <Route path="/reservation"  element={<>    <NavBar/> <Reservation/> </> }  >
       </Route> 

        </Routes>
     </BrowserRouter>  

     </div>
  )
}


{/* <Route path="/navbar"  element={<NavBar/>}   /> */}
       {/* <Route path="/sidebar" element={<SideBar />}  /> */}
{/* // <LoginMain/>
    <Loginpartner  />
    // <Login />
    </Routes> */}
    // <NavBar/>

      {/* <NavBar  /> */}
      {/* <SideBar /> */}
      // <DashBoard/>
      {/* <NavBar  />  */}



      // ========================
       {/* <Route path="/LoginMain" element={<LoginMain/>} />
      <Route path="/Loginpartner" element={<Loginpartner/>} /> */}




    //   =============This works well==========================================


    //   <BrowserRouter>
    //   <Routes>
    //   <Route path="/" element={<Login/>} />
    //    <Route path="/dashboard" element={<>  <NavBar/>  <Combine/>     </> } /> 

    //    <Route path="/addcenter"  element={<>    <NavBar/> <AddCenter/> </> }  >
    //    </Route>     
    //    </Routes>
    // </BrowserRouter> 
    // =======================================================================================