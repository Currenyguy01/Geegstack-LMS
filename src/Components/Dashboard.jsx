import "./Dashboard.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "../img/profile.png";
import { useState } from "react";

const email = localStorage.getItem("emailValue");
const removeEmail = email.split("@");
const valid = removeEmail[0];


function Dashboard(){
    const [menuOpen, setMenuOpen] = useState(false)
    const handleclick = () => {
        if (window.innerWidth <= 920) {
            setMenuOpen(!menuOpen);
        }
    }
    return(
        <div id="dashboard">
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

                <h2>Dashboard</h2>

                <div id="wrapper">
                    <span></span>
                    <div>
                        <li>Hi, Welcome {valid}!</li>
                        <p>What would you like to do now?</p>
                    </div>
                </div>

                <section id="container">
                    <div>
                        <aside>
                            <i class="fa-solid fa-chalkboard-user" style={{fontSize: "60px"}}></i>
                        </aside>
                        <nav>
                            <h4>Continue Learning</h4>
                            <p>Proceed with your lectures. You're currently in the Introduction module and there are 2 more videos to go.</p>
                            <li onClick={() => {
                                document.querySelector("#Lecture").click();
                            }}>Continue Learning <i class="fa-solid fa-angle-right"></i></li>
                        </nav>
                    </div>
                    <div>
                        <aside>
                            <i class="fa-solid fa-laptop-code" style={{fontSize: "60px"}}></i>
                        </aside>
                        <nav>
                            <h4>Enter new challenge</h4>
                            <p>Take a new challenge on your path to get more stars and stand a chance to win Geegstack Perks.</p>
                            <li onClick={() => {
                                document.querySelector("#Challenges").click();
                            }}>Enter Challenge <i class="fa-solid fa-angle-right"></i></li>
                        </nav>
                    </div>
                </section>

                <section id="container">
                    <div>
                        <aside>
                            <i class="fa-solid fa-users" style={{fontSize: "60px"}}></i>
                        </aside>
                        <nav>
                            <h4>Go to Forum</h4>
                            <p>Visit the academy forum to join discussion or ask a question and get help from co-learners.</p>
                            <li onClick={() => {
                                document.querySelector("#Leaderboard").click();
                            }}>Visit Forum <i class="fa-solid fa-angle-right"></i></li>
                        </nav>
                    </div>
                    <div>
                        <aside>
                            <i class="fa-solid fa-shapes" style={{fontSize: "60px"}}></i>
                        </aside>
                        <nav>
                            <h4>Take a Quiz</h4>
                            <p>Test your knowledge with Quizzes. Get more stars and stand a chance to win Geegstack Perks.</p>
                            <li onClick={() => {
                                document.querySelector("#Quiz").click();
                            }}>Take Quiz <i class="fa-solid fa-angle-right"></i></li>
                        </nav>
                    </div>
                </section>
                <li id="li">Geegstack Academy</li>
                <Link to="/" id="logout"/>
                <Link to="/Lecture" id="Lecture"/>
                <Link to="/Challenges" id="Challenges"/>
                <Link to="/Leaderboard" id="Leaderboard"/>
                <Link to="/Quiz" id="Quiz"/>

            </section>
        </div>
    )
}
export default Dashboard;