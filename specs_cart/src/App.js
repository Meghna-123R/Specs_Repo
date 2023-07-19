import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
// import About from './Pages/About';
import Navigation from './components/Navigation';
import Mainproducts from './Pages/MainProducts';
import Cart from './Pages/Cart';

const App = () => {

    return (
         <>
            <Router>
          
              <Navigation/>

               <Routes>     

                 <Route path="/" element={<Home/>} exact ></Route>
                 {/* <Route path="/about" element={<About/>}></Route> */}
                 <Route path="/mainproducts" element={<Mainproducts/>}></Route>
                 <Route path="/cart" element={<Cart/>}></Route>

               </Routes>

            </Router>
         </>
    );
   
}

export default App;