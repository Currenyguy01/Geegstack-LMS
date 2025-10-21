import "./Lecture.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "../img/profile.png";
import LearningPath from "./LearningPath";
import { useState } from "react";

const email = localStorage.getItem("emailValue");
const valid = email ? email.split("@")[0] : "";

function Lecture(){
    const [menuOpen, setMenuOpen] = useState(false)
    const handleclick = () => {
        if (window.innerWidth <= 920) {
            setMenuOpen(!menuOpen);
        }
    }
    return(
        <div id="lecture">
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

                <nav className="arrowleft">
                    <i class="fa-solid fa-arrow-left"></i>
                    <p><Link to="/Dashboard">Go Back</Link></p>
                </nav>

                <h2>Lecture</h2>

                <div id="wrapper">
                    <span></span>
                    <div>
                        <li>Hi, Welcome {valid}!</li>
                        <p>What would you like to do now?</p>
                    </div>
                </div>

                {/* <section id="container">
                    <h4>learning path</h4>
                    <aside id="content">
                        <div class="sidebar">
                            <ul>
                                <li class="active">Introduction</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Git & GitHub</li>
                                <li>NodeJS</li>
                                <li>ExpressJS Basics</li>
                                <li>MongoDB</li>
                                <li>Web Hosting</li>
                                <li>ExpressJS (Cont’d)</li>
                            </ul>
                        </div>

                        <div class="content">
                            <h4>Introduction Modules. Total: 1</h4>
                            <table>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Duration</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Introduction to Web Development</td>
                                    <td>00:24:04</td>
                                    <td><span class="status-pending">Pending</span></td>
                                    <td><button class="watch-btn"> Watch</button></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </aside>
                </section> */}
                <LearningPath/>
                <li>Geegstack Academy</li>
                <Link to="/" id="logout"/>
            </section>
        </div>
    )
}
export default Lecture;