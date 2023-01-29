import Style from "../styles/Navbar.module.css";
import { BsBarChartFill } from "react-icons/bs";

const Navbar = () => {

    return <>
        <div className={Style.nav}>
            <div className={Style.logo}>
                <BsBarChartFill/>
                <p>TaskPal</p>
            </div>
            <div className={Style.buttons}>
                <a href="register">
                    <button>Create New Account</button>
                </a>
                <a href="login">
                    <button>Login</button>
                </a>
            </div>
        </div>
    </>
}

export default Navbar