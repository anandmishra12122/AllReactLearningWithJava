import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <Link to="/" className="brand">
          <span className="brand-icon">N</span>
          <span>NoteFlow</span>
        </Link>

        <div className="nav-actions">
          <Link to="/login" className="login-link">
            Login
          </Link>

          <Link to="/register" className="signup-btn">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            ✦ Your thoughts, organized
          </div>

          <h1>
            Capture your ideas.
            <br />
            <span>Keep them organized.</span>
          </h1>

          <p>
            A simple and beautiful place to write, organize,
            and revisit your notes whenever you need them.
          </p>

          <div className="hero-actions">
            <Link to="/register" className="primary-btn">
              Start Taking Notes
              <span>→</span>
            </Link>

            <Link to="/login" className="secondary-btn">
              Sign In
            </Link>
          </div>

          <div className="hero-info">
            <span>✓ Simple to use</span>
            <span>✓ Fast & organized</span>
            <span>✓ Your notes, your way</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="notes-window">
            <div className="window-top">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="window-title">My Notes</span>
            </div>

            <div className="notes-preview">
              <div className="preview-header">
                <div>
                  <small>Tuesday, September 21</small>
                  <h3>My Notes</h3>
                </div>

                <button>+</button>
              </div>

              <div className="preview-search">
                🔍 Search your notes...
              </div>

              <div className="preview-card purple">
                <div className="card-top">
                  <span>React</span>
                  <span>📌</span>
                </div>
                <h4>React Hooks</h4>
                <p>
                  Revising useState, useEffect and custom hooks...
                </p>
              </div>

              <div className="preview-card yellow">
                <div className="card-top">
                  <span>Ideas</span>
                  <span>⋮</span>
                </div>
                <h4>Project Ideas</h4>
                <p>
                  Build something useful and practice every day.
                </p>
              </div>

              <div className="preview-card blue">
                <div className="card-top">
                  <span>JavaScript</span>
                  <span>⋮</span>
                </div>
                <h4>JS Revision</h4>
                <p>
                  Array methods, promises and async/await.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="features">
        <div className="feature">
          <div className="feature-icon purple-icon">✎</div>
          <h3>Write freely</h3>
          <p>
            Quickly capture ideas, tasks and important thoughts.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon blue-icon">⌕</div>
          <h3>Find anything</h3>
          <p>
            Search through your notes whenever you need them.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon yellow-icon">★</div>
          <h3>Stay organized</h3>
          <p>
            Pin important notes and keep everything in one place.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Landing;