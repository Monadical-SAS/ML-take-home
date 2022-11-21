import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="brand">
        <a href="https://monadical.com" target="_blank">
          Monadical
        </a>
      </div>

      <div className="links">
        <a target="_blank" href="https://monadical.com/principles.html">
          Principles
        </a>
        <a target="_blank" href="https://monadical.com/team.html">
          Team
        </a>
        <a target="_blank" href="https://monadical.com/blog.html">
          Blog
        </a>
      </div>

      <nav className="auth">
        <a
          target="_blank"
          href="https://docs.monadical.com/s/monadical-study-guide"
        >
          About
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
