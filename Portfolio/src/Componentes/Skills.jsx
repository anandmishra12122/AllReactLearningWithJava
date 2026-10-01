import "./Skills.css";

const skills = [
  { name: "Java", level: 85, category: "Programming Language" },
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "SQL", level: 80, category: "Database" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React.js", level: 88, category: "Frontend Library" },
  { name: "GitHub", level: 85, category: "Version Control" },
];

function Skills() {
  return (
    <section className="skills">
      <h2>
        My <span>Skills</span>
      </h2>

      <p className="subtitle">
        Technologies and tools I use to build applications.
      </p>

      <div className="skill-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            
            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span>{skill.level}%</span>
            </div>

            <p className="category">
              {skill.category}
            </p>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;