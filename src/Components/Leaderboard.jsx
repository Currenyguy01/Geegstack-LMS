import "./Leaderboard.css"
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "../img/profile.png";
import StudentsProfile from "./StudentsProfile";
const email = localStorage.getItem("emailValue");
const valid = email ? email.split("@")[0] : "";


function Leaderboard(){
    
    return(
        <div id="leaderboard">
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

                <nav className="arrowleft">
                    <i class="fa-solid fa-arrow-left"></i>
                    <p><Link to="/Projects">Go Back</Link></p>
                </nav>

                <h2>Leaderboard</h2>

                <div id="wrapper">
                    <span></span>
                    <div>
                        <li>Student's Leaderboard</li>
                        <p>See how you and your mates are doing.</p>
                    </div>
                </div>

                <StudentsProfile/>
                <li>Geegstack Academy</li>
                <Link to="/" id="logout"/>
            </section>
        </div>
    )
}
export default Leaderboard;