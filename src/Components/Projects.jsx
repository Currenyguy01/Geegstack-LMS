import "./Challenges.css"
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "../img/profile.png";
import { useState } from "react";
const email = localStorage.getItem("emailValue");
// const removeEmail = email.split("@");
const valid = email;

const topics = ["HTML", "CSS", "JavaScript", "React", "NodeJS", "Git & GitHub", "ExpressJS Basics", "MongoDB", "Web Hosting", "ExpressJS (Cont'd)"];

function Projects(){
    const [selected, setSelected] = useState('HTML');
    const [loading, setLoading] = useState(false);

    const handleClick = (topic) => {
        setLoading(true);
        setSelected(topic);

        // Simulate loading
        setTimeout(() => {
        setLoading(false);
        }, 1000); 
    };
    return(
        <div id="lecture">
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
                    <p><Link to="/Challenges">Go Back</Link></p>
                </nav>

                <h2>Projects</h2>

                <div id="wrapper">
                    <span></span>
                    <div>
                        <li>Are you ready?</li>
                        <p>Remember the only way to be a developer is by developing!</p>
                    </div>
                </div>

                <div className="tabs">
                    {topics.map((topic) => (
                    <button
                        key={topic}
                        onClick={() => handleClick(topic)}
                        className={selected === topic ? 'active' : ''}
                    >
                        {topic}
                    </button>
                    ))}
                </div>

                <div className="content">
                    {loading ? (
                    <p>Fetching technology projects...</p>
                    ) : (
                    <p>No project has been added for {selected} yet.</p>
                    )}
                </div>
                <li>Geegstack Academy</li>
                <Link to="/" id="logout"/>
            </section>
        </div>
    )
}
export default Projects;