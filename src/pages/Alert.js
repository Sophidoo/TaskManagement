import Style from "../styles/Alert.module.css"

const Alert = ({name, message}) => {
    return<>
        <div className={Style.alert} >
            <h3>{name}</h3>
            <p>{message}</p>
        </div>
    </>
}


export default Alert