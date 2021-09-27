import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import AddCarPage from "../../Pages/AddCarPage/AddCarPage";
import CarGalleryPage from "../../Pages/CarGalleryPage/CarGalleryPage";
import EditCarPage from "../../Pages/EditCarPage/EditCarPage";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={CarGalleryPage} />
      <Route path="/add-car" component={AddCarPage} />
      <Route path="/edit-car/:id" component={EditCarPage} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default AppRoutes;
