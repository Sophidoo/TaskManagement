import Style from "../styles/Overview.module.css";
import BoardNavbar from "../components/BoardNavbar";
import Sidebar from "../components/Sidebar";
import {ImDropbox} from "react-icons/im"
import {BsBoxArrowInDownLeft} from "react-icons/bs"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import {TbDotsVertical} from "react-icons/tb"


const Overview = () => {

    const[categories, setCategories] = useState([])
    const[categoryname, setCategoryName] = useState([])
    const[task, setTask] = useState([])
    const[redirect, setRedirect] = useState(false)
    const[checked, setChecked] = useState(false)

    

    const cookies = new Cookies();
    let token = cookies.get("TOKEN")

    useEffect(() => {
        setRedirect(false)
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
                  console.log(data.data)
                  console.log(token)
                  setCategories(data.data)
              })
              .catch((error) => {
                console.log(error)
              })
        }

        fetchData()
    }, [token])


    const getTasks = async (category) => {
        setCategoryName(category)

        try{
            await fetch(`https://aya-task-management.onrender.com/api/v1/users/taskandcategory/${category}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
                

            }).then((response) => response.json())
            .then((data) => {
                console.log(data.data)
                setTask(data.data)
                setRedirect(true)
            })
        }catch(error){
            console.log(error)
        }
    }

    // const taskList = task
    return <>
        <BoardNavbar onClick={() => setRedirect(false)}/>
        <Sidebar/>
        <div className={!redirect ? Style.hero : Style.hide}>
            <div className={Style.emptyWrapper}>
                <div className={Style.wrap}>
                    <ImDropbox/>
                    <h1>No Task Currently</h1>
                </div>
            </div>
            <div className={Style.taskWrapper}>
                <div className={Style.taskBox}>
                    <div className={Style.taskHead}>
                        <h3>Personal</h3>
                        <BsBoxArrowInDownLeft  onClick={() => getTasks("Personal")}/>
                    </div>
                    <div className={Style.taskBottom}>
                        <p><span>Tasks: </span> 7</p>
                        <p><span>Created: </span> 10:04:34</p>
                    </div>
                </div>
                <div className={Style.taskBox}>
                    <div className={Style.taskHead}>
                        <h3>Work</h3>
                        <BsBoxArrowInDownLeft  onClick={() => getTasks("Work")}/>
                    </div>
                    <div className={Style.taskBottom}>
                        <p><span>Tasks: </span> 7</p>
                        <p><span>Created: </span> 10:04:34</p>
                    </div>
                </div>
                {
                    categories.map((data, index) => {
                        return(
                            <div className={Style.taskBox} key={index}>
                                <div className={Style.taskHead}>
                                    <h3>{data.categoryname}</h3>
                                    <BsBoxArrowInDownLeft onClick={() => getTasks(data.categoryname)}/>
                                </div>
                                <div className={Style.taskBottom}>
                                    <p><span>Tasks: </span> 7</p>
                                    <p><span>Created: </span> {data.createdAt.split("T")[0]}</p>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>

        <div className={redirect ? Style.show : Style.hide}>
            <div className={Style.taskhero}>
                <h2>{categoryname} <span onClick={() => setRedirect(false)}>Back</span></h2>
                <div className={!task.length <= 0 ? Style.tasks : Style.hide}>
                    {
                        task.map((data, index) => {
                            const endTime = new Date(data.endTime.split(".")[0]) / 1000
                            var elapsed = new Date() / 1000;
                            var totalSec =  endTime - elapsed;
                            var h = parseInt( totalSec / 3600 )
                            var m = parseInt( totalSec / 60 ) % 60;
                            var s = parseInt(totalSec % 60, 10);
                            var result = h + " hours, " + m + " minutes " + s + " seconds";

                            return(
                                <div className={Style.task} key={index}>
                                    <div className={Style.leftWrapper}>
                                        <form action="" method="post">
                                            <input type="checkbox" name="isCompleted" id="" onChange={(e) => setChecked(e.target.checked)}/>
                                        </form>
                                        <h3 className={!checked ? Style.norm : Style.cancel}>{data.taskName}</h3>
                                        <div className={Style.timeWrap}>
                                            <p>Time Left: <span>{result}</span></p>
                                        </div>
                                    </div>
                                    <div className={Style.rightWrapper}>
                                        <TbDotsVertical/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    </>

}
export default Overview