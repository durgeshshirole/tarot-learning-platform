import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      // 🚧 DEV ONLY: store email for ProtectedRoute
      localStorage.setItem("dev_email", email);

      // 🚧 TEMP DEV LOGIC (REMOVE AFTER BILLING + FIRESTORE)
      if (email === "admin@tarot.com") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Invalid login credentials");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0b1f, #1a1333)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#1a1333",
          padding: "30px",
          borderRadius: "14px",
          boxShadow: "0 0 25px rgba(156,39,176,0.4)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#ffd54f", marginBottom: "25px" }}>
          🔐 Login to Arcane Tarot Academy
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button style={btnStyle} onClick={handleLogin}>
          Login
        </button>

        <p style={{ textAlign: "center", color: "#ccc", fontSize: "13px", marginTop: "20px" }}>
          Contact admin to unlock paid content
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  background: "#9c27b0",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Login;
