import './App.css';
import AlternateTimeline from './Components/Tree';
import Time from './Components/Time';
import {Route,Routes,NavLink} from 'react-router-dom';
import Home from './Pages/Home';
import Causes from './Pages/Causes';
import Suggestions from './Pages/Suggestions';
import Casestudies from './Pages/Casestudies';
import Phase1 from './Components/Phase1';
import Phase2 from './Components/Phase2';
import Phase3 from './Components/Phase3';
import Phase4 from './Components/Phase4';

function App() {

  return (
    <div>
      {/* <Time/>
      <AlternateTimeline/> */}
      <div className='website'>
      <nav className="navbar navbar-expand-sm navbar-dark" id='header'>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <div className="container-fluid">
      <ul className="navbar-nav" id='top-bar'>
      <a className="navbar-brand"></a>
        <li className="nav-item" id='list'>
          <NavLink className="nav-link" to="">Home</NavLink>
        </li>  
        <li className="nav-item" id='list'>
          <NavLink className="nav-link" to="causes">Causes</NavLink>
        </li>
        <li className="nav-item" id='list'>
          <NavLink className="nav-link" to="casestudies">Casestudies</NavLink>
        </li>
        <li className="nav-item" id='list'>
          <NavLink className="nav-link" to="suggestions">Suggestions</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    <Routes>
      <Route path="" element={<Home/>}></Route>
      <Route path="causes" element={<Causes/>}></Route>
      <Route path="casestudies" element={<Casestudies/>}></Route>
      <Route path="suggestions" element={<Suggestions/>}></Route>
      <Route path="phase1" element={<Phase1/>}></Route>
      <Route path="phase2" element={<Phase2/>}></Route>
      <Route path="phase3" element={<Phase3/>}></Route>
      <Route path="phase4" element={<Phase4/>}></Route>

    </Routes>
    </div>
    </div>
    

  );
}

export default App;
