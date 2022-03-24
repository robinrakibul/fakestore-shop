import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import AllProducts from './components/AllProducts/AllProducts';
import { useState } from 'react';


function App() {
  const [count,setCount] = useState(0);
  const setCartCount = () => {
    setCount(count+1);
  };
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProducts setCartCount={setCartCount}></AllProducts>
    </div>
  );
}

export default App;
