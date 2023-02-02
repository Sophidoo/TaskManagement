import BoardNavbar from "../components/BoardNavbar";
import Sidebar from "../components/Sidebar";
import Style from "../styles/Add.module.css";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

const TaskForm = () => {
    const [taskName, setTaskName] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)
    const [endDate, setEnddate] = useState()
    const [category, setCategory] = useState()
    const [categoryList, setCategoryList] = useState([])
    
    const cookies = new Cookies();
    let token = cookies.get("TOKEN")

    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://aya-task-management.onrender.com/api/v1/users/category", {
                  method: "get",
                  headers: {
                      Authorization: `Bearer ${token}`
                  },
                })
                .then((response) => response.json())
                .then((data) => {
                console.log(data)
                setIsCompleted(false)
                  setCategoryList(data.data)
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
            await fetch("https://aya-task-management.onrender.com/api/v1/users/task", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    taskName: taskName,
                    isCompleted: isCompleted,
                    endTime: endDate,
                    category: category
                })
                

            }).then((response) => response.json())
            .then((data) => {
                console.log(token)
                console.log(data)
                setTaskName("")
                setEnddate("")
                setCategory("")
            })
        }catch(error){
            console.log(error)
        }
    }
    
    console.log(categoryList)
    return<>
    <BoardNavbar/>
    <Sidebar/>

        <div className={Style.container}>
            <h1>Add Task</h1>
            <div className={Style.categoryWrapper}>
                <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
                    <div className={Style.inputWrapper}>
                        <label htmlFor="fnm">Task Name:</label>
                        <input type="text" name="fnm" id="fnm" required value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                    </div>
                    <div className={Style.inputWrapper}>
                        <label htmlFor="edate">Task End Time:</label>
                        <input type="datetime-local" name="edate" id="edate" required  value={endDate} onChange={(e) => setEnddate(e.target.value)}/>
                    </div>
                    
                    <div className={Style.inputWrapper}>
                        <label htmlFor="category">Category:</label>
                        <select name="categories" id="" onChange={(e) => setCategory(e.target.value)}>
                        <option value="Perosnal">Personal</option>
                        <option value="Work">Work</option>
                            {
                                categoryList.map((data) => {
                                    return(
                                        <option value={data.categoryname}>{data.categoryname}</option>
                                    )
                                })
                            }
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