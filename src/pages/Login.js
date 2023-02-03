import Style from "../styles/Login.module.css"
import register from "../images/register.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Cookies from "universal-cookie"

const Login = () => {

    const[user, setUser] = useState({
        email: "",
        password: ""
    })
    const[status, setStatus] = useState(true)
    const navigate = useNavigate()
    const cookies = new Cookies();

    const handleSubmit = async (e) => {
        setStatus(false)
        e.preventDefault();
        // setStatus(false)

        try{
            await fetch("https://aya-task-management.onrender.com/api/v1/users/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: user['email'],
                    password: user['password'].toString()
                })
                

            }).then((response) => response.json())
            .then((data) => {
                console.log(data)
                console.log(data.status)
                if(data.status !== "success"){
                    setStatus(true)
                    alert(data.message)
                }
                console.log(data.status)
                cookies.set("TOKEN", data.data.token, {path: "/"})
                if(data.status === "success"){
                    setUser({
                        email: "",
                        password: ""
                    })
                    // setStatus(true)
                    setStatus(true)
                    navigate("/overview")

                    
                }
            })
        }catch(error){
            console.log(error.message)
        }
    }
    
    
    return <>
        <div className={!status ? Style.loading : Style.hide}>
            <h3>Loading...</h3>
        </div>
        <div className={Style.wrapper}>
            <div className={Style.leftWrapper}>
                <div className={Style.formWrapper}>
                    <div className={Style.head}>
                        <h2>Login</h2>
                        <p>Don't have an account? <a href="register">Create an account</a></p>
                    </div>
                    <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="eml">Email Address:</label>
                            <input type="text" name="eml" id="eml"  value = {user['email']} onChange={(e) => setUser({...user, email: e.target.value})} required/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="psw">Password:</label>
                            <input type="password" name="psw" id="psw" value = {user['password']} onChange={(e) => setUser({...user, password: e.target.value})} required/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className={Style.rightWrapper}>
                <img src={register} alt="Registeration svg" />
            </div>
        </div>
    </>

}

export default Login