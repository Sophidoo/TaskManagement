import BoardNavbar from "../components/BoardNavbar";
import Sidebar from "../components/Sidebar";
import Style from "../styles/Setting.module.css";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
// import axios from "axios";

const Settings = () => {
    const cookies = new Cookies()
    let token = cookies.get("TOKEN")
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [othername, setOthername] = useState()
    const [email, setEmail] = useState()


    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://aya-task-management.onrender.com/api/v1/users/specificUser", {
                  method: "get",
                  headers: {
                      Authorization: `Bearer ${token}`
                  },
                })
                .then((response) => response.json())
              .then((data) => {
                console.log(data)
                  console.log(data.data.foundUser.firstname)
                  console.log(token)
                  setFirstname(data.data.foundUser.firstname)
                  setLastname(data.data.foundUser.lastname)
                  setOthername(data.data.foundUser.othername)
                  setEmail(data.data.foundUser.email)
              })
              .catch((error) => {
                console.log(error)
              })
        }

        fetchData()
    }, [token])


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await fetch("https://aya-task-management.onrender.com/api/v1/users/update", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    othername: othername,
                    email: email
                })
                

            }).then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
        }catch(error){
            console.log(error)
        }
    }


    return <>
        <BoardNavbar/>
        <Sidebar/>

        <div className={Style.settingsWrapper}>
            <div className={Style.accountWrapper}>
                <h1>Account Details</h1>
                <form action="" method="put" onSubmit={(e) => handleSubmit(e)}>
                <div className={Style.inputWrapper}>
                            <label htmlFor="fnm">First Name:</label>
                            <input type="text" name="fnm" id="fnm"  value = {firstname} onChange={(e) => setFirstname(e.target.value)}  required/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="lnm">Last Name:</label>
                            <input type="text" name="lnm" id="lnm"  value = {lastname} onChange={(e) => setLastname(e.target.value)}  required/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="onm">Other Name:</label>
                            <input type="text" name="onm" id="onm"   value = {othername} onChange={(e) => setOthername(e.target.value)} />
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="eml">Email Address:</label>
                            <input type="text" name="eml" id="eml"   value = {email} onChange={(e) => setEmail(e.target.value)}  required/>
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