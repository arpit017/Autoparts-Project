import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './components/signup';
import Login from './components/login';

import Product from './product';
import AllRoutes from './All Routes/Routes';
function App() {
  return (
    <div className="App">
    <Navbar/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
