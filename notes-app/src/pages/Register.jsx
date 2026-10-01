import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setErrors({});
    setSuccess("");
    setLoading(true);

    try {
      const result = await registerUser(
        name,
        email,
        password
      );

      setSuccess(
        result.message || "User registered successfully"
      );

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      // Backend validation response
      if (typeof err === "object") {
        setErrors(err);
      } else {
        setErrors({
          general: err || "Registration failed",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">N</div>

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Start organizing your thoughts
        </p>

        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />

            {errors.name && (
              <p className="field-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />

            {errors.email && (
              <p className="field-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />

            {errors.password && (
              <p className="field-error">
                {errors.password}
              </p>
            )}
          </div>

          {errors.general && (
            <p className="auth-error">
              {errors.general}
            </p>
          )}

          {success && (
            <p className="auth-success">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="auth-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loader"></span>
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

