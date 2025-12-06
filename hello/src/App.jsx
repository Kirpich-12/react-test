
import './App.css';
import {
  HashRouter,
  NavLink,
  Routes,
  Route
 } from 'react-router-dom'
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';


function App() {
  return (
    <>
      <HashRouter>
        <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to='/first-page'>fIRSTPage</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/second-page'>Second Page</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/third-page'>Tyird page</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        <nav>
          
        </nav>
        <nav>
          
        </nav>
        <nav>
          
        </nav>
      
      <div>
        <Routes>
          <Route path='/first-page' element={<Page1 />} />
          <Route path='/second-page' element={<Page2 />} />
          <Route path='/third-page' element={<Page3 />} />
        </Routes>
      </div>
      </HashRouter>
    </>
  )
}

export default App
