import Style from "../styles/Sidebar.module.css";
import Calendar from "react-calendar";
import { useState } from "react";
// import 'react-calendar/dist/Calendar.css';

const Sidebar = () => {
    const [date, setDate] = useState(new Date())

    return <>
        <div className={Style.sideWrapper}>
            <div className={Style.topWrapper}>
                <h1>Today</h1>
                <div className={Style.cardContainer}>
                    <div className={Style.card}>
                        <p>Total task</p>
                        <h3>100</h3>
                    </div>
                    <div className={Style.card}>
                        <p>In Progress</p>
                        <h3>100</h3>
                    </div>
                    <div className={Style.card}>
                        <p>Completed</p>
                        <h3>100</h3>
                    </div>
                    <div className={Style.card}>
                        <p>Overdue</p>
                        <h3>100</h3>
                    </div>
                </div>
            </div>
            <div className={Style.bottomWrapper}>
                <h1>Calendar</h1>
                <Calendar value={date}/>
            </div>
        </div>
    </>

}

export default Sidebar