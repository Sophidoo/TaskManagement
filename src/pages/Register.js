import Style from "../styles/Register.module.css"
import register from "../images/register.svg"

const Register = () => {

    return <>
        <div className={Style.wrapper}>
            <div className={Style.leftWrapper}>
                <div className={Style.formWrapper}>
                    <div className={Style.head}>
                        <h2>Create An Account</h2>
                        <p>Already have an account? <a href="login">Login</a></p>
                    </div>
                    <form action="" method="post">
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
                            <input type="text" name="psw" id="psw" required/>
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

            <div className={Style.rightWrapper}>
                <img src={register} alt="Registeration svg" />
            </div>
        </div>
    </>

}

export default Register