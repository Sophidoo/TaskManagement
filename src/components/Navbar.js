import Style from "../styles/Navbar.module.css";
import { BsBarChartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return <>
        <div className={Style.nav}>
            <div className={Style.logo}>
                <BsBarChartFill/>
                <p>TaskPal</p>
            </div>
            <div className={Style.buttons}>
                <NavLink to="/register">
                    <button>Create New Account</button>
                </NavLink>
                <NavLink to="/login">
                    <button>Login</button>
                </NavLink>
            </div>
        </div>
    </>
}

export default Navbar

