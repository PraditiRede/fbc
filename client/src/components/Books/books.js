import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Book from './Book/book';
import useStyles from './styles';

const Books = () => {
    const books = useSelector((state) => state.books);
    const classes = useStyles();

    return(
        !books.length ?  <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {books.map((book) => (
                    <Grid key={book._id} item xs={12} sm={6}>
                        <Book book={book} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Books;
