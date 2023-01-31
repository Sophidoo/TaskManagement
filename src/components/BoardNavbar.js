import Style from "../styles/BoardNavbar.module.css";
import { BsBarChartFill } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import {MdOutlineSpaceDashboard} from "react-icons/md"
import {BsCheckCircle} from "react-icons/bs"
import {BsFillPlusCircleFill} from "react-icons/bs"
import {MdSchedule} from "react-icons/md"


const BoardNavbar = () => {

    return <>
        <div className={Style.wrapper}>
            <div className={Style.topNav}>
                <div className={Style.leftTopNav}>
                    <BsBarChartFill />
                    <p>TaskPal</p>
                </div>
                <div className={Style.rightTopNav}>
                    <BsBell/>
                    <BsGear/>

                </div>
            </div>
            <div className={Style.bottomNav}>
                <div className={Style.leftBottomNav}>
                    <div className={Style.link}>
                        <MdOutlineSpaceDashboard/>
                        <p>Overview</p>
                    </div>
                    <div className={Style.link}>
                        <BsCheckCircle/>
                        <p>Completed</p>
                    </div>
                    <div className={Style.link}>
                        <MdSchedule/>
                        <p>Overdue</p>
                    </div>
                </div>
                <div className={Style.rightBottomNav}>
                    <BsFillPlusCircleFill/>
                </div>
            </div>
        </div>
    </>;

}

export default BoardNavbar
