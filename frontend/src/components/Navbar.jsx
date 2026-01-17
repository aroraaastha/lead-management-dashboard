import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#4f46e5", color: "#fff" }}>
      <h2 style={{ display: "inline", marginRight: "20px" }}>Lead Dashboard</h2>
      <Link to="/" style={{ color: "#fff", marginRight: "10px" }}>Login</Link>
      <Link to="/leads" style={{ color: "#fff" }}>Leads</Link>
    </nav>
  );
};

export default Navbar;
