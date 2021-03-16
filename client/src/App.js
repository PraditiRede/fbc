import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getBooks } from './actions/books';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { store } from './store';
import RouteViews from './containers/RoutViews';
import NavBar from './containers/NavBar';

import Uploadbook from './pages/uploadbook';
import Searchbook from './pages/searchbook';
import Uploadbyisbn from './pages/ubisearchbook';
import Uploadbytitle from './pages/ubtsearchbook';
import Mybooks from './components/Books/books';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <Container maxwidth='lg'>
    <Router>
            <NavBar />
            <RouteViews />
            <Switch>
              <Route path="/uploadbook">
                <Uploadbook />
              </Route>
              <Route path="/searchbook">
                <Searchbook />
              </Route>
              <Route path="/uploadbytitle">
                <Uploadbytitle />
              </Route>
              <Route path="/uploadbyisbn">
                <Uploadbyisbn />
              </Route>
              <Route path="/mybooks">
                <Mybooks />
              </Route>
              <div>
                <Link to="/uploadbook">Upload Book </Link>
                <Link to="/searchbook">Search</Link>
                <Link to="/mybooks">My Books</Link>
              </div>
         </Switch>
     </Router>
    </Container>
  );
}

export default App;
