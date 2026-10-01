import "./Home.css";
import profile from "./img.jpeg";
import resume from "./resume.pdf";
function Home() {
    return (
        <div className="maindiv">
            <h3> Hello  I'm</h3>
            <h2 className="name">Anand Mishra</h2>
            <h2>A Software Devloper</h2>
            <p>B.TECH CSE Student passionate about Java FullStack Devloper <br />
                Data Structure & Algorith and Web Devlopment
            </p>
            <a href={resume} download className="button">
                Download Resume
            </a>
            <img
                src={profile}
                alt="Profile"
            />
        </div>

    );
}

export default Home;