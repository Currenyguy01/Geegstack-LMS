import { useState } from "react";

const topics = {
    Introduction: [
    {
      description: "Introduction to Web Development",
      duration: "00:24:04",
      status: "Watched"
    }
  ],
  HTML: [
    {
      description: "Introduction to HTML",
      duration: "00:29:30",
      status: "Watched",
    },
    {
      description: "HTML Attributes",
      duration: "00:10:00",
      status: "Watched",
    },
    {
      description: "HTML Links",
      duration: "00:27:27",
      status: "Pending",
    }
  ],
  CSS: [
    {
      description: "Introduction to CSS",
      duration: "00:12:45",
      status: "Watched",
    },
    {
      description: "CSS Colors",
      duration: "00:32:45",
      status: "Pending",
    }
  ],
  JavaScript: [
    {
      description: "Introduction to JavaScript",
      duration: "00:12:45",
      status: "Watched",
    },
    {
      description: "JavaScript Basics",
      duration: "00:32:45",
      status: "Pending",
    }
  ],
  React: [
    {
      description: "Introduction to React",
      duration: "00:12:45",
      status: "Watched",
    },
    {
      description: "React Components",
      duration: "00:32:45",
      status: "Pending",
    }
  ],
  "Git & GitHUb": [
    {
      description: "Introduction to Git & Githud",
      duration: "00:12:45",
      status: "Watched",
    },
    {
      description: "Basic Git Commands",
      duration: "00:32:45",
      status: "Pending",
    }
  ],
  NodeJs: [
    {
      description: "Introduction to Backend",
      duration: "00:12:45",
      status: "Watched",
    },
    {
      description: "HTTP Request Methods",
      duration: "00:32:45",
      status: "Pending",
    }
  ],
  "ExpressJs Basics": [
    {
      description: "Introduction to ExpressJs",
      duration: "00:12:45",
      status: "Watched",
    },
    {
      description: "ExpressJs Response and Response",
      duration: "00:32:45",
      status: "Pending",
    }
  ],
  MongoDB: [
    {
      description: "Introduction to Databases",
      duration: "00:12:45",
      status: "Watched",
    },
    {
      description: "Using MongoDB from the CLI",
      duration: "00:32:45",
      status: "Pending",
    }
  ],
  "Web Hosting": [
    {
      description: "Introduction to Web Hosting",
      duration: "00:12:45",
      status: "Watched",
    },
    {
      description: "Setting up Domain Name",
      duration: "00:32:45",
      status: "Pending",
    }
  ],
  "ExpressJs (cont'd)": [
    {
      description: "ExpressJS Authentication and Authorization 1",
      duration: "00:12:45",
      status: "Watched",
    },
    {
      description: "ExpressJS Authentication and Authorization 2",
      duration: "00:32:45",
      status: "Pending",
    },
    {
      description: "Template Rendering with ExpressJS 1",
      duration: "00:32:45",
      status: "Pending",
    }
  ],
};

function LearningPath() {
  const [selected, setSelected] = useState("Introduction");

  return (
    <section id="container">
        <h4>learning path</h4>
        <aside id="content">
          <div className="sidebar">
            <ul>
              {
                Object.keys(topics).map((topic) => (
                <li
                  key={topic}
                  onClick={() => setSelected(topic)}
                  className={selected === topic ? "active" : ""}
                >
                  {topic}
                </li>
                ))
              }
            </ul>
          </div>

          <div className="content">
              <h4>{selected} Modules. Total: {topics[selected].length}</h4>
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
                  {
                    topics[selected].map((item, index) => (
                    <tr key={index}>
                      <td>{item.description}</td>
                      <td>{item.duration}</td>
                      <td>
                      <span className={item.status === "Pending" ? "status-pending" : "done"}>
                        {item.status}
                      </span>
                      </td>
                      <td>
                      <button className="watch-btn"><i class="fa-solid fa-play"></i> Watch</button>
                      </td>
                    </tr>
                    ))
                  }
                </tbody>
              </table>
          </div>
        </aside>
    </section>
  );
}

export default LearningPath ;