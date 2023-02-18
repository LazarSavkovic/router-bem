import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Home.js'
import Products from './Products.js'
import MapContainer from './MapContainer';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/' style={{margin: '30px'}}>home</Link>
        <Link to='/products/apples' style={{margin: '30px'}}>apples</Link>
        <Link to='/products/oranges' style={{margin: '30px'}}>oranges</Link>
        <Link to='/products/bananas' style={{margin: '30px'}}>banana</Link>
        <Link to='/maps' style={{margin: '30px'}}>Maps</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/maps' element={<MapContainer/>} ></Route>
        <Route path='/products/:product' element={<Products />} />
       </Routes>
      

    </div>
  );
}

export default App;
