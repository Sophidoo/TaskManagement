import Style from "../styles/Sidebar.module.css";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';

const Sidebar = () => {
    let today = new Date()

    return <>
        <div className={Style.sideWrapper}>
            <div className={Style.bottomWrapper}>
                <h1>Calendar</h1>
                <Calendar value={today}/>
            </div>
        </div>
    </>

}

export default Sidebar