import Style from "../styles/Register.module.css"
import register from "../images/register.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const[user, setUser] = useState({
        firstname: "",
        lastname: "",
        othername: "",
        email: "",
        password: "",
        cpassword: ""
    })
    const[PswError, setPswError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPswError("")

        if(user['password'] !== user['cpassword']){
            setPswError("Password does not match")
        }else{
            try{
                let res = await fetch("https://aya-task-2-production.up.railway.app/api/v1/users/register", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstname: user['firstname'],
                        lastname: user['lastname'],
                        othername: user['othername'],
                        email: user['email'],
                        password: user['password']
                    })
                    

                });
                // let resJson = await res.json();
                if(res.status === 200){
                    console.log(user['password'])
                    setUser({
                        firstname: "",
                        lastname: "",
                        othername: "",
                        email: "",
                        password: ""
                    })
                    navigate("/overview")
                }
            }catch(error){
                console.log(error)
            }
        }
        

    }

    return <>
        <div className={Style.wrapper}>
            <div className={Style.leftWrapper}>
                <div className={Style.formWrapper}>
                    <div className={Style.head}>
                        <h2>Create An Account</h2>
                        <p>Already have an account? <a href="login">Login</a></p>
                    </div>
                    <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="fnm">First Name:</label>
                            <input type="text" name="fnm" id="fnm" value = {user['firstname']} onChange={(e) => setUser({...user, firstname: e.target.value})} required />
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="lnm">Last Name:</label>
                            <input type="text" name="lnm" id="lnm" value = {user['lastname']} onChange={(e) => setUser({...user, lastname: e.target.value})} required/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="onm">Other Name:</label>
                            <input type="text" name="onm" id="onm" value = {user['othername']} onChange={(e) => setUser({...user, othername: e.target.value})}/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="eml">Email Address:</label>
                            <input type="text" name="eml" id="eml" value = {user['email']} onChange={(e) => setUser({...user, email: e.target.value})} required />
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="psw">Password:</label>
                            <input type="password" name="psw" id="psw" value = {user['password']} onChange={(e) => setUser({...user, password: e.target.value})} required/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <label htmlFor="cpsw">Confirm Password:</label>
                            <input type="password" name="cpsw" id="cpsw" value = {user['cpassword']} onChange={(e) => setUser({...user, cpassword: e.target.value})} required/>
                            <p className={Style.error}>{PswError}</p>
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

export default Register