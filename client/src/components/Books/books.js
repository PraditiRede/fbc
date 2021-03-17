import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Book from './Book/book';
import useStyles from './styles';

const Mybooks = () => {
    const books = useSelector((state) => state.books);
    const classes = useStyles();
    return(
        !books.length ?  <CircularProgress /> : (
            <div className={classes.container}>
                <div className={classes.title}>my library</div>
                {books.map((book) => (
                    <span key={book._id} item className={classes.block}>
                        <Book book={book} />
                    </span>
                ))}
            </div>
        )
    );
}

export default Mybooks;
