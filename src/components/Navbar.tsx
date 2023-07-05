import './components.css'; // Import your CSS file for navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="Brand Logo" className="brand-logo" />
      </div>
      <div className="navbar-links">
        <ul className="links-list">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/" className="nav-link">About us</a></li>
          <li className="nav-item"><a href="/" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="/" className="nav-link">Fees</a></li>
        </ul>
      </div>
      <div className="navbar-signup">
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
