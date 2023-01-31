import Style from "../styles/Overview.module.css";
import BoardNavbar from "../components/BoardNavbar";
import Sidebar from "../components/Sidebar";
import {ImDropbox} from "react-icons/im"
import {BsBoxArrowInDownLeft} from "react-icons/bs"
import { NavLink } from "react-router-dom";



const Overview = () => {
    
    return <>
        <BoardNavbar/>
        <Sidebar/>
        <div className={Style.hero}>
            <div className={Style.emptyWrapper}>
                <div className={Style.wrap}>
                    <ImDropbox/>
                    <h1>No Task Currently</h1>
                </div>
            </div>
            <div className={Style.taskWrapper}>
                <div className={Style.taskBox}>
                    <div className={Style.taskHead}>
                        <h3>Research</h3>
                        <NavLink to="/overview/task" end><BsBoxArrowInDownLeft/></NavLink>
                    </div>
                    <div className={Style.taskBottom}>
                        <p><span>Tasks: </span> 7</p>
                        <p><span>Created At: </span> 10:04:34</p>
                    </div>
                </div>
                <div className={Style.taskBox}>
                    <div className={Style.taskHead}>
                        <h3>Research</h3>
                        <BsBoxArrowInDownLeft/>
                    </div>
                    <div className={Style.taskBottom}>
                        <p><span>Tasks: </span> 7</p>
                        <p><span>Created At: </span> 10:04:34</p>
                    </div>
                </div>
                <div className={Style.taskBox}>
                    <div className={Style.taskHead}>
                        <h3>Research</h3>
                        <BsBoxArrowInDownLeft/>
                    </div>
                    <div className={Style.taskBottom}>
                        <p><span>Tasks: </span> 7</p>
                        <p><span>Created At: </span> 10:04:34</p>
                    </div>
                </div>
            </div>
        </div>

    </>

}

export default Overview