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
          <Switch>
            <Route exact path="/" component={CarGalleryPage}/>
            <Route path="/add-car" component={AddCarPage}/>
            <Route path="/edit-car/:id" component={EditCarPage}/>
            {/* <Redirect from="*" to='/'/>  */}
          </Switch>
      </main>
      
      
      </Router>
    </div>
  );
}

export default App;
