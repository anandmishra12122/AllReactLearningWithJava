import "./About.css";
function About() {
    return (
        <section className="about">

            <div className="about-left">
                <h2>About <span>Me</span></h2>

                <h3>Software Developer</h3>

                <p>
                    I am Anand Mishra, a B.Tech Computer Science student passionate
                    about building scalable and efficient software solutions.
                    I have a strong interest in Java Full Stack Development,
                    Data Structures & Algorithms, and Web Development.
                </p>

                <p>
                    I enjoy solving problems, learning new technologies, and creating
                    responsive applications with clean and optimized code.
                </p>

                <button>Read More</button>
            </div>

            <div className="about-right">
                <div className="box">
                    <h1>01</h1>
                    <h3>Year of Learning</h3>
                    <p>Constantly improving my development skills.</p>
                </div>
            </div>

        </section>
    );
}

export default About;