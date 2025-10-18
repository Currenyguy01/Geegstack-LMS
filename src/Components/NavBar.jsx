import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
function NavBar({ className, onClose }){
    return(
        <div id="navbar" className={`navbar ${className}`}>
            <section onClick={onClose}>
                <h2>GEEGSTACK ACADEMY</h2>
                <div >
                    <NavLink to="/Dashboard" className={({isActive})=> isActive ? "nav-link active" : "nav-link" } >
                        <i class="fa-solid fa-house"></i>
                        <p>Dashboard</p>
                    </NavLink>
                    <NavLink to="/Lecture" className={({isActive})=> isActive ? "nav-link active" : "nav-link" } >
                        <i class="fa-solid fa-chalkboard-user"></i>
                        <p>My Lectures</p>
                    </NavLink>
                    <NavLink to="/Challenges" className={({isActive})=> isActive ? "nav-link active" : "nav-link" } >
                        <i class="fa-solid fa-laptop-code"></i>
                        <p>Challenges</p>
                    </NavLink>
                    <NavLink to="/Projects" className={({isActive})=> isActive ? "nav-link active" : "nav-link" } >
                        <i class="fa-solid fa-diagram-project"></i>
                        <p>Projects</p>
                    </NavLink>
                    <NavLink to="/Leaderboard" className={({isActive})=> isActive ? "nav-link active" : "nav-link" } >
                        <i class="fa-solid fa-fire"></i>
                        <p>Leaderboard</p>
                    </NavLink>
                    <NavLink to="/Submission" className={({isActive})=> isActive ? "nav-link active" : "nav-link" } >
                        <i class="fa-solid fa-upload"></i>
                        <p>My Submissions</p>
                    </NavLink>
                    <NavLink to="/Quiz" className={({isActive})=> isActive ? "nav-link active" : "nav-link" } >
                        <i class="fa-solid fa-shapes"></i>
                        <p>Quizzes</p>
                    </NavLink>
                </div>
                <button onClick={() => {
                    document.querySelector("#details").click();
                }} >
                    <i class="fa-solid fa-graduation-cap"></i>
                    My Course Details
                </button>
            </section>
            <Link to="/CourseDetail" id="details"/>
        </div>
    )
}
export default NavBar;