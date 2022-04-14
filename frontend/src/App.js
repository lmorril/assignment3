

import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path= "/register" element={<AddUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
