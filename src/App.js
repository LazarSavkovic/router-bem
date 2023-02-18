import { Routes, Route } from 'react-router-dom'
import Home from './Home.js'
import Products from './Products.js'
import Navbar from './Navbar';
import ThemeProvider from './ThemeProvider';

function App() {

  return (
    <ThemeProvider>
      <div className={`App`}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/products/:product' element={<Products />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
