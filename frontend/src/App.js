import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Signup from './pages/signup.jsx';
import Start from './pages/Start.jsx';
import Home from './pages/Home.jsx';
import Order from './pages/Order.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Start/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Order" element={<Order />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
