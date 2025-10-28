import "./Submission.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";
import Profile from "../img/profile.png";
const email = localStorage.getItem("emailValue");
const valid = email ? email.split("@")[0] : "";


function Submission(){
    const [menuOpen, setMenuOpen] = useState(false)
    const handleclick = () => {
        if (window.innerWidth <= 920) {
            setMenuOpen(!menuOpen);
        }
    }
    
    return(
        <div id="submission">
            <NavBar className={menuOpen ? "open" : ""}  onClose={() => setMenuOpen(false)}/>
            <section>
                <nav>
                    <i class="fa-solid fa-bars" onClick={handleclick}></i>
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

                <div class="soon-container">
                    <h1>Soon...</h1>
                    <p>Don't fret. The Submissions page is under engineering. You will be notified once it is up!</p>
                    <h4 href="#"><Link to="/Dashboard">Back to Dashboard</Link></h4>
                </div>

                <li>Geegstack Academy</li>
                <Link to="/" id="logout"/>
            </section>
        </div>
    )
}
export default Submission;