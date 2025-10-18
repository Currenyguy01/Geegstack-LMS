import "./CourseDetail.css"
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "../img/profile.png";
import Roadmap from "./Roadmap";
const email = localStorage.getItem("emailValue");
// const removeEmail = email.split("@");
const valid = email;

function CourseDetail(){
    
    return(
        <div id="detail">
            <NavBar/>
            <section>
                <nav>
                    <i class="fa-solid fa-bars"></i>
                    <div>
                        <nav>
                            <img src={Profile} alt="profile" />
                            <h4>Hi, {valid} <i class="fa-solid fa-sort-down"></i></h4>
                        </nav>
                        <aside>
                            <h4><i class="fa-solid fa-user"></i> Profile</h4>
                            <p onClick={() => {
                                document.querySelector("#logout").click();
                            }}><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</p>
                        </aside>
                    </div>
                </nav>

                <h2>My Course Details</h2>

                <div id="wrapper">
                    <span></span>
                    <div>
                        <li>You're enrolled in Frontend Development (Full time)</li>
                        <p>Here's what you need to know about your course.</p>
                    </div>
                </div>

                <Roadmap/>
                <li>Geegstack Academy</li>
                <Link to="/" id="logout"/>
            </section>
        </div>
    )
}
export default CourseDetail;