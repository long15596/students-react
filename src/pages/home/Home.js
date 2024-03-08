import '../css/Home.css'
import Navbar from "../../components/Navbar";
import Logo from "../../components/Logo";
import Banner from "../../components/Banner";
import {Outlet} from "react-router";

export default function Home(){
    return(
        <>
            <div className="row">
                <div className="col-5" id={`logo`}>
                    <Logo></Logo>
                </div>
                <div className="col-7" id={`banner`}>
                    <Banner></Banner>
                </div>
            </div>
            <div className="row">
                <div className="col-12" id={`navbar`}>
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="row">
                <div className="col-3" id={`side-bar`}></div>
                <div className="col-9" id={`main-view`}>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}