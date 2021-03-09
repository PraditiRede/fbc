import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getBooks } from './actions/books';

import Books from './components/Books/books';
import Form from './components/Forms/form';
// import useStyles from './styles';

const App = () => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <Container maxwidth='lg'>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">My Books</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-betwen" alignItems="strech" spacing={3}>
            <Grid item xs={12} sm={7} >
                <Books />
            </Grid>
            <Grid item xs={12} sm={4} >
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
