import { NavLink } from "react-router-dom";
import Wrapper from '../assets/Wrapper/Navbar.js'
const NavBar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            ABout
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            NewsLetter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
