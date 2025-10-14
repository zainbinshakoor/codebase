import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home Page under page dir</h1>
      <Link to={`/product/${1}?color=red&size=large`}>Go to Product 1</Link>
    </div>
  );
}