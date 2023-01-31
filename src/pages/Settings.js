import BoardNavbar from "../components/BoardNavbar";
import Sidebar from "../components/Sidebar";
import Style from "../styles/Settings.module.css";
// import { useEffect } from "react";
// import Cookies from "universal-cookie";
// import axios from "axios";

const Settings = () => {
    // const cookies = new Cookies()
    // let token = cookies.get("Token")
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await fetch("https://aya-task-2-production.up.railway.app/api/v1/users/specificUser", {
    //               method: "get",
    //               headers: {
    //                   authorization: 'Bearer ' + token
    //               }
    //           })
    //           .then((response) => response.json())
    //           .then((data) => {
    //               console.log(data)
    //               console.log(token)
    //           })
    //           .catch((error) => {
    //             console.log(error)
    //           })
    //     }

    //     fetchData()
    // }, [])

    // useEffect(() => {
    //     // set configurations for the API call here
    //     const configuration = {
    //       method: "get",
    //       url: "https://aya-task-2-production.up.railway.app/api/v1/users/specificUser",
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     };
    
    //     // make the API call
    //     axios(configuration)
    //       .then((result) => {
    //         // assign the message in our result to the message we initialized above
    //         console.log(result.data.message);
    //       })
    //       .catch((error) => {
    //         error = new Error();
    //       });
    //   }, []);

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