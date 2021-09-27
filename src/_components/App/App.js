import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import CarGalleryPage from '../../Pages/CarGalleryPage/CarGalleryPage';
import AddCarPage from '../../Pages/AddCarPage/AddCarPage';
import EditCarPage from '../../Pages/EditCarPage/EditCarPage';
import AppRoutes from "../AppRoutes/AppRoutes";

function App() {

  

  return (
    <div className="App">
      
      <Router>
      <header>
        <div className="header-container">
          <h1><Link to="/">Auto catalog on React</Link></h1>
            <Link className="add-car__btn" to={'/add-car'}>
              <FontAwesomeIcon icon={faPlusCircle}/>
            </Link>
        </div>
      </header>
      <main className="main-content">
          <AppRoutes/>
      </main>
      
      
      </Router>
    </div>
  );
}

export default App;
