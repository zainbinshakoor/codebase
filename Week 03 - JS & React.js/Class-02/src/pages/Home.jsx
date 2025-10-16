import { Link } from "react-router-dom";
import { useContext,useReducer } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { themeReducer } from "../ThemeContext/Reducer";
export function Home() {

  // const {theme,toggleTheme} = useContext(ThemeContext) ;
  // console.log("Current theme:", theme);

  const [theme,disatch] = useReducer(themeReducer,'light');

  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '20px'
  }
  
  return (
    <div style={styles}>
      <h1>Home Page</h1>
      <Link to={`/product/${1}?color=red&size=large`}>Go to Product 1</Link>
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      <button onClick={()=>disatch({type:"TOGGLE"})}>Toggle Theme</button>
    </div>
  );
}