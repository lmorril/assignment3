

import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import AddUser from './components/AddUser';
import Stats from './components/Stats';
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path= "/register" element={<AddUser/>}/>
          <Route exact path= "/stats" element={<Stats/>}/>
          <Route exact path= "/search" element={<Search/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
