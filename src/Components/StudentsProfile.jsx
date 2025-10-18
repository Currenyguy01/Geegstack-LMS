import Profile from "../img/profile.png";

const students = [
  {
    name: "Adebayo Umar",
    track: "FULLSTACK STUDENT",
    projects: 10,
    challenges: 25,
    stars: "1,290",
  },
  {
    name: "Abdulrasheed Ibraheem",
    track: "FULLSTACK STUDENT",
    projects: 9,
    challenges: 21,
    stars: "1,010",
  },
  {
    name: "Olayiwola Abdulrahman",
    track: "FRONTEND STUDENT",
    projects: 7,
    challenges: 20,
    stars: 995,
  },
  {
    name: "Habeeb Ismail",
    track: "FULLSTACK STUDENT",
    projects: 6,
    challenges: 19,
    stars: 990,
  }
];

function StudentsProfile() {
  return (
    <div className="leaderboard-box">
      <div className="leaderboard">
        <h4>Learners Ranking</h4>
      </div>
      
      {
        students.map((student, index) => (
          <div className="student" key={index}>
            <div className="profile">
              <div className="icon">
                <img src={Profile} alt="profile" />
              </div>
              <div>
                <p className="name">{student.name}</p>
                <p className="track">{student.track}</p>
              </div>
            </div>
            <div className="stats">
              <div ><strong>{student.projects}</strong><br /><p className="pro">Projects</p></div>
              <div><strong>{student.challenges}</strong><br /><p className="pro">Challenges</p></div>
              <div><strong>{student.stars}</strong><br /><p className="pro">Stars</p></div>
            </div>
          </div>
        ))
      }
    </div>
    
  );
}

export default StudentsProfile;
