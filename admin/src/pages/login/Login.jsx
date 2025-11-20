import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom"; 

const inputStyle = {
  padding: "10px",
  margin: "10px",
  width: "200px",
  borderRadius: "4px",
  fontSize: "16px",
  fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
};

const buttonBaseStyle = {
  margin: "10px",
  padding: "12px 15px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "18px",
  fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
};

// Initial state for button hover
const buttonHoverStyle = {
  backgroundColor: "#408f43", // Darker green on hover
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    await login(dispatch, { username, password });
    setTimeout(() => {
      try {
        const root = localStorage.getItem("persist:root");
        const user = JSON.parse(JSON.parse(root).user);
        const isAdmin = user?.currentUser?.isAdmin;

        if (isAdmin) {
          navigate("/"); // ✅ Redirect to dashboard
        } else {
          alert("You are not authorized to access the admin panel.");
        }
      } catch (err) {
        alert("Login failed. Please check your credentials.");
        console.error(err);
      }
    }, 300); // Slight delay to ensure redux-persist has written state
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: `url("https://www.clicdata.com/wp-content/uploads/2021/07/leveraging-big-data-ecommerce.jpg")`,
        objectFit: "cover",
        backgroundPosition: "center",
      }}
    >
      <input
        type="text"
        placeholder="username"
        style={inputStyle}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        style={inputStyle}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={
          isHovered
            ? { ...buttonBaseStyle, ...buttonHoverStyle }
            : buttonBaseStyle
        }
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
