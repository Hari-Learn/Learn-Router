import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import Service from "./routes/Service"
import { Link } from "react-router-dom"
import DashboardLayout from "./routes/DashboardLayout"
import Profile from "./routes/Profile"
import Status from "./routes/Status"
function App() {
 
  return (
   
    

    <div>
      <Link to="/">Home - </Link>
      <Link to="/about">About - </Link>
      <Link to="/service">Service - </Link>
      <Link to="/dashboard">Dashboard  </Link>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        
        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route path="status" element={<Status/>}/>
          <Route path="profile" element={<Profile/>}/>        
        </Route>       
      </Routes>
    </div>
  
  )
}

export default App
