// import './App.css';
// import { useState } from 'react';
// import Welcome from './components/Welcome';
// const App = () => {

//   const [increment, setIncrement] = useState(0);

//   const handleIncrease = () => {
//     setIncrement(increment + 1);
//   }

//   const reset = () => {
//     setIncrement(0);
//   }

//   const decrease = () => {
//     if(increment <= 0) return;
//     setIncrement(increment - 1);
//   }

//   return(
//     <>
//     {/* <Welcome name={name} age={age}/> */}
//     <div className="App">
//       <p>Count is {increment}</p>
//       <button onClick={handleIncrease}>Increase</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={decrease}>Decrease</button>
//     </div>
//     </>
//   )
// }

// export default App;

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Contact } from './pages/Contact';
export function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:productId' element={<ProductDetail/>}/>
        <Route path='/about' element={<h1>About Page</h1>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<h1>404 Page Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
