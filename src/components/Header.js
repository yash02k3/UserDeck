// Import React and navigation tools
import React from "react";
import { Link } from "react-router-dom";

// Header component with navigation tabs
function Header() {
  return (
    <header style={styles.header}>
      {/* Navigation Tabs */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/notifications" style={styles.link}>Notifications</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
      </nav>
    </header>
  );
}

// Basic responsive styling
const styles = {
  header: {
    backgroundColor: "#1f2937",
    padding: "15px",
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Header;
