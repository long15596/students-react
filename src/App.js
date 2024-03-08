import './App.css';
import {Route, Routes} from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/Home";
import ShowAll from "./pages/home/student/ShowAll";
import Add from "./pages/home/student/Add";
import Edit from "./pages/home/student/Edit";

function App() {
  return (
    <>
        <div className="container-fluid">
            <Routes>
                <Route path={``} element={<Login></Login>}></Route>
                <Route path={`register`} element={<Register></Register>}></Route>
                <Route path={`home`} element={<Home></Home>}>
                    <Route path={``} element={<ShowAll></ShowAll>}></Route>
                    <Route path={`add`} element={<Add></Add>}></Route>
                    <Route path={`edit/:id`} element={<Edit></Edit>}></Route>
                </Route>
            </Routes>
        </div>
    </>
  );
}

export default App;
