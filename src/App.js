import ReactDOM from "react-dom";
import Login from "./components/login"
import LoginMain from "./components/loginmain"
import Loginpartner from "./components/loginpartner"
import DashBoard from "./pages/dashboard";
import { BrowserRouter, Route, Routes, } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>} />
       <Route path="/dashboard" element={<DashBoard/>} />

      {/* <Route path="/LoginMain" element={<LoginMain/>} />
      <Route path="/Loginpartner" element={<Loginpartner/>} /> */}
    </Routes>
    </BrowserRouter>
    </div>
  )
}



{/* // <LoginMain/>
    <Loginpartner  />
    // <Login />
    </Routes> */}