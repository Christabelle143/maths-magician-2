import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navbar">
      <div className="mainheading">
        <h1> Math Magicians </h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Calculator">Calculator</Link>
        <Link to="/Quote">Quote</Link>
      </div>
    </nav>

  </>
);
export default Navbar;
