import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Task from "./pages/Task";

function App(){

  return <> 

    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/overview" element = {<Overview/>}/>
        <Route path = "/overview/task" element = {<Task/>}/>
      </Routes>
    </Router>
    

  </>

}

export default App;
