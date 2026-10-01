import "./Project.css";

const projects = [
  {
    title: "News Website",
    desc: "A responsive live news website with dynamic news interface.",
    tech: "HTML • CSS • JavaScript",
    live: true,
    link: "https://anandmishra12122.github.io/news-app/",
  },
  {
    title: "Todo PWA",
    desc: "Progressive Web App for managing daily tasks with offline support.",
    tech: "HTML • CSS • JavaScript • PWA",
    live: true,
    link: "https://anandmishra12122.github.io/TodoPwa/index.html",
  },
  {
    title: "Contact Management System",
    desc: "A system to manage contacts with CRUD operations.",
    tech: "Java • JDBC • Servlet • JavaScript",
    live: false,
    link: "YOUR_GITHUB_LINK",
  },
  {
    title: "Student Management System",
    desc: "Application to manage student records efficiently.",
    tech: "Java • JDBC • Servlet",
    live: false,
    link: "YOUR_GITHUB_LINK",
  },
  {
    title: "Government Complaint Portal",
    desc: "Portal for registering and tracking government complaints.",
    tech: "Java • JDBC • Servlet",
    live: false,
    link: "YOUR_GITHUB_LINK",
  },
];

function Project() {
  return (
    <section className="projects">

      <h2>
        My <span>Projects</span>
      </h2>

      <p className="project-subtitle">
        Some projects I have built using different technologies.
      </p>


      <div className="project-container">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-top">

              <h3>{project.title}</h3>

              {project.live && (
                <span className="live">
                  LIVE
                </span>
              )}

            </div>


            <p>
              {project.desc}
            </p>


            <div className="tech">
              {project.tech}
            </div>


            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project
            </a>


          </div>
        ))}

      </div>

    </section>
  );
}

export default Project;
