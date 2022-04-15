import logo from './logo.svg';
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Stats from './components/Stats';
import Search from './components/Search';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
      <div className="content">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path= "/login" element={<Login/>}/>
            <Route exact path= "/stats" element={<Stats/>}/>
            <Route exact path= "/search" element={<Search/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}


export default App;
