import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <a href="/about">Google</a>
      </ul>
    </nav>
  );
}