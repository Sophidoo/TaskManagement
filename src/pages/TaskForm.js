import BoardNavbar from "../components/BoardNavbar";
import Sidebar from "../components/Sidebar";
import Style from "../styles/Add.module.css";

const TaskForm = () => {

    return<>
    <BoardNavbar/>
    <Sidebar/>

        <div className={Style.container}>
            <h1>Add Task</h1>
            <div className={Style.categoryWrapper}>
                <form action="" method="put">
                    <div className={Style.inputWrapper}>
                        <label htmlFor="fnm">Task Name:</label>
                        <input type="text" name="fnm" id="fnm" required/>
                    </div>
                    <div className={Style.inputWrapper}>
                        <label htmlFor="sdate">Task Start Time:</label>
                        <input type="datetime-local" name="sdate" id="sdate" required/>
                    </div>
                    <div className={Style.inputWrapper}>
                        <label htmlFor="edate">Task End Time:</label>
                        <input type="datetime-local" name="edate" id="edate" required/>
                    </div>
                    
                    <div className={Style.inputWrapper}>
                        <label htmlFor="category">Select Category:</label>
                        <select name="category" id="">
                            <option value="Research">Research</option>
                            <option value="Research">School</option>
                        </select>
                    </div>
                    
                    <div className={Style.inputWrapper}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>

}

export default TaskForm