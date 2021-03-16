import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createBook } from '../../actions/books';

import useStyles from './styles';

const Form = () => {
    const [bookData, setBookData] = useState({ username: '', search: ''});
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createBook(bookData));
        setBookData({ username: '',search: '' });
    }
    const clear = () => {

    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off"  onSubmit = {handleSubmit} className={`${classes.root} ${classes.form}`}>
                <Typography variant="h6">Upload your Book</Typography>
                <TextField 
                    name="username" 
                    variant="outlined" 
                    label="username" 
                    fullWidth
                    value={bookData.username}
                    onChange={(e) => setBookData({ ...bookData, username: e.target.value})}
                />
                <TextField 
                    name="search" 
                    variant="outlined" 
                    label="search" 
                    fullWidth 
                    value={bookData.search}
                    onChange={(e) => setBookData({ ...bookData, search: e.target.value})}
                />
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth className={classes.buttonSubmit}>Upload</Button>
            </form>        
        </Paper>
        
    );
}

export default Form;
