
function Roadmap() {
    return(
        <div class="container">
            <div class="header">
                <h4>Your Learning Path</h4>
                <button class="download-btn"><i class="fa-solid fa-download"></i> Download Outline</button>
            </div>

            <div class="timeline">
                <div class="timeline-item">
                    <div class="icon"><i class="fa-solid fa-up-down-left-right"></i></div>
                    <div class="content">
                        <h4>Environment Setup & Introduction to Web Development.</h4>
                        <p>1 day</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="icon"><i class="fa-solid fa-up-down-left-right"></i></div>
                    <div class="content">
                        <h4>Creating Web page Markups with HTML</h4>
                        <p>2 Weeks, 3 days</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="icon"><i class="fa-solid fa-up-down-left-right"></i></div>
                    <div class="content">
                        <h4>HTML Project</h4>
                        <p>3 day</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="icon"><i class="fa-solid fa-up-down-left-right"></i></div>
                    <div class="content">
                        <h4>Styling web pages with CSS</h4>
                        <p>4 weeks</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="icon"><i class="fa-solid fa-up-down-left-right"></i></div>
                    <div class="content">
                        <h4>CSS Projects</h4>
                        <p>4 days</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="icon"><i class="fa-solid fa-up-down-left-right"></i></div>
                    <div class="content">
                        <h4>Managing projects versions with Git & Management and collaboration with Github</h4>
                        <p>1 day</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="icon"><i class="fa-solid fa-up-down-left-right"></i></div>
                    <div class="content">
                        <h4>JavaScript Programming Deep Dive</h4>
                        <p>5 weeks</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="icon"><i class="fa-solid fa-up-down-left-right"></i></div>
                    <div class="content">
                        <h4>JavaScript Projects</h4>
                        <p>1 week</p>
                    </div>
                </div>
                
            </div> 
            <button class="complete-btn">Mark as completed</button>
        </div>
    )
}

export default Roadmap;