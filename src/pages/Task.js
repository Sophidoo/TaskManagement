import BoardNavbar from "../components/BoardNavbar";
import Sidebar from "../components/Sidebar";
import Style from "../styles/Task.module.css";
import {TbDotsVertical} from "react-icons/tb"

const Task = () => {

    return <>
    <BoardNavbar/>
    <Sidebar/>
    <div className={Style.hero}>
    <h2>Research</h2>
        <div className={Style.tasks}>
            <div className={Style.task}>
                <div className={Style.leftWrapper}>
                    <form action="" method="post">
                        <input type="checkbox" name="isCompleted" id="" />
                    </form>
                    <h3>Analyze Research in Laboratory</h3>
                    <div className={Style.timeWrap}>
                        <p>Duration: <span>0.00</span></p>
                        <p>Time Left: <span>0.00</span></p>
                    </div>
                </div>
                <div className={Style.rightWrapper}>
                    <TbDotsVertical/>
                </div>
            </div>
        </div>
    </div>

    </>

}

export default Task