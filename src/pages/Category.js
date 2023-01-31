import BoardNavbar from "../components/BoardNavbar";
import Sidebar from "../components/Sidebar";
import Style from "../styles/Add.module.css";

const Category = () => {

    return<>
    <BoardNavbar/>
    <Sidebar/>

        <div className={Style.container}>
                <h1>Add Category</h1>
            <div className={Style.categoryWrapper}>
                <form action="" method="put">
                <div className={Style.inputWrapper}>
                            <label htmlFor="fnm">Category Name:</label>
                            <input type="text" name="fnm" id="fnm" required/>
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