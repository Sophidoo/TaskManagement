import Style from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import task1 from "../images/task1.svg"

const Home = () => {

    return <>

        <Navbar/>

        <div className={Style.hero}>
            <div className={Style.heroContent}>
                <h1>Manage Your Day With Task<span>Pal</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aperiam optio id iste, sunt vitae rem ab. Facilis ab modi, voluptas, fugit at recusandae quam, repellat laboriosam eius possimus aliquid.</p>
                <a href="register"><button>Get Started</button></a>
            </div>
            <div className={Style.pictures}>
                <img src={task1} alt="" />
            </div>
        </div>

    </>

}

export default Home