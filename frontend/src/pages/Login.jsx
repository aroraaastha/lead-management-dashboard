import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple login, no backend auth
    navigate("/leads");
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" required style={{ padding: "10px", margin: "5px" }} />
        <input type="password" placeholder="Password" required style={{ padding: "10px", margin: "5px" }} />
        <button type="submit" style={{ padding: "10px 20px", margin: "5px" }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
