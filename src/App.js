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


export default function App() {
  return (
    <div className="App">

<BrowserRouter>
       <Routes>
      <Route path="/" element={<Login/>} />
       <Route path="/dashboard" element={<>  <NavBar/>  <Combine/>     </> } /> 

        <Route path="/addcenter"  element={<>    <NavBar/> <AddCenter/> </> }  >
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