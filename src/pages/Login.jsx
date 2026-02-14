import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";

function Login({ close }) {
  const navigate = useNavigate();

  const [role, setRole] = useState("admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      close && close();
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-card">
        <h2>Sign In to LearningPad</h2>

        {/* ROLE SWITCH */}
        <div className="role-switch">
          <button
            className={`role-btn ${role === "teacher" ? "active" : ""}`}
            onClick={() => setRole("teacher")}
          >
            👩‍🏫 Teacher
          </button>

          <button
            className={`role-btn ${role === "admin" ? "active" : ""}`}
            onClick={() => setRole("admin")}
          >
            👤 Admin
          </button>
        </div>

        {/* USERNAME */}
        <label>
          Username <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          placeholder="you@example.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* PASSWORD */}
        <label>
          Password <span style={{ color: "red" }}>*</span>
        </label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            style={{
              position: "absolute",
              right: "10px",
              top: "12px",
              cursor: "pointer",
              fontSize: "14px",
            }}
            onClick={() => setShowPassword(!showPassword)}
          >
            👁
          </span>
        </div>

        {/* SIGN IN BUTTON */}
        <button className="signin-btn" onClick={handleLogin}>
          🔑 Sign In
        </button>

        <p className="forgot-text">
          Forgot your password? Contact your admin.
        </p>

        {close && (
          <button className="close-btn" onClick={close}>
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
