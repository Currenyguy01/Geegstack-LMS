import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../img/logo.e27fef5934cb4e730d77.png";


function Login(){
    function ValidLogin(){
        if(document.querySelector("#email").value === "" || document.querySelector("#password").value === ""){
            alert("Enter a valid Info");
        }else{
            document.querySelector("#dashboards").click();
            const email = document.querySelector("#email").value;
            window.localStorage.setItem("emailValue", email);
        }
    }
    return(
        <div id="login">
            <form onSubmit={(e) => e.preventDefault()}>
                <img src={Logo} alt="LOGO" />
                <div>
                    <legend>Login</legend>
                    <nav>
                        <aside>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                        </aside>
                        <aside>
                            <section>
                                <label htmlFor="password">Password</label>
                                <li>Forgot Password?</li>
                            </section>
                            <input type="password" id="password" />
                        </aside>
                        <aside>
                            <button onClick={ValidLogin}>Login</button>
                        </aside>
                    </nav>
                </div>
                <p>Copyright &copy; Geegstack Academy 2022</p>
            </form>
            <Link to="/Dashboard" id="dashboards"/>
        </div>
    )
}
export default Login;