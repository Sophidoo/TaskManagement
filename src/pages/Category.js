import BoardNavbar from "../components/BoardNavbar";
import Sidebar from "../components/Sidebar";
import Style from "../styles/Add.module.css";
import { useState } from "react";
import Cookies from "universal-cookie";

const Category = () => {

    const[categoryname, setCategoryName] = useState()
    const[statuspop, setStatusPop] = useState(true)
    const[text, setText] = useState("")

    const cookies = new Cookies();
    let token = cookies.get("TOKEN")
    
    const handleSubmit = async (e) => {
        console.log(categoryname)
        e.preventDefault();
        setStatusPop(false)
        setText("Loading, Please wait")

        try{
            await fetch("https://aya-task-management.onrender.com/api/v1/users/category", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    categoryname: categoryname
                })
                

            }).then((response) => response.json())
            .then((data) => {
                console.log(data)
                if(data.status === "success"){
                    setCategoryName("")
                }
                setStatusPop(false)
                setText("Category added Successfully")
                setTimeout(() => {
                    setStatusPop(true)
                }, 3000);
            })
        }catch(error){
            console.log(error)
        }
    }

    return<>
    <BoardNavbar/>
    <Sidebar/>

        <div className={Style.container}>
                <h1>Add Category</h1>
            <div className={!statuspop ? Style.loadingpop : Style.hide}>
                <h3>{text}</h3>
            </div>
            <div className={Style.categoryWrapper}>
                <form action="" method="POST" onSubmit={(e) => handleSubmit(e)}>
                <div className={Style.inputWrapper}>
                            <label htmlFor="fnm">Category Name:</label>
                            <input type="text" name="fnm" id="fnm" required  value={categoryname} onChange={(e) => setCategoryName(e.target.value)}/>
                        </div>
                        <div className={Style.inputWrapper}>
                            <button type="submit">Submit</button>
                        </div>
                </form>
            </div>
        </div>
    </>

}

export default Category