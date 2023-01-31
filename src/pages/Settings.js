import BoardNavbar from "../components/BoardNavbar";
import Sidebar from "../components/Sidebar";
import Style from "../styles/Settings.module.css";

const Settings = () => {

    return <>
        <BoardNavbar/>
        <Sidebar/>

        <div className={Style.settingsWrapper}>
            <div className={Style.accountWrapper}>
                <h1>Account Details</h1>
                <form action="" method="put">
                <div className={Style.inputWrapper}>
                            <label htmlFor="fnm">First Name:</label>
                            <input type="text" name="fnm" id="fnm" required/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="lnm">Last Name:</label>
                            <input type="text" name="lnm" id="lnm" required/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="onm">Other Name:</label>
                            <input type="text" name="onm" id="onm"/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="eml">Email Address:</label>
                            <input type="text" name="eml" id="eml" required/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="psw">Password:</label>
                            <input type="text" name="psw" id="psw"/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="cpsw">Confirm Password:</label>
                            <input type="text" name="cpsw" id="cpsw"/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <button type="submit">Submit</button>
                        </div>
                </form>
            </div>
            
            <div className={Style.passwordWrapper}>
                <h1>Password</h1>
                <form action="" method="put">
                    <div className={Style.inputWrapper}>
                        <label htmlFor="opsw">Old Password:</label>
                        <input type="text" name="psw" id="psw" required/>
                    </div>
                    <div className={Style.inputWrapper}>
                        <label htmlFor="cpsw">New Password:</label>
                        <input type="text" name="cpsw" id="cpsw" required/>
                    </div>
                    <div className={Style.inputWrapper}>
                        <label htmlFor="cpsw">Confirm Password:</label>
                        <input type="text" name="cpsw" id="cpsw" required/>
                    </div>
                    <div className={Style.inputWrapper}>
                        <button type="submit">Submit</button>
                    </div>
                
                </form>
            </div>
        </div>
    </>

}

export default Settings