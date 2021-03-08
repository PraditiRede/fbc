import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createBook } from '../../actions/books';

// import useStyles from './styles';

const Form = () => {
    const [bookData, setBookData] = useState({ username: '', booktitle: '', author: '', publisher: '', isbn: '', tag: ''});
    // const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createBook(bookData));
    }
    const clear = () => {

    }
    return(
        <Paper>
            <form autoComplete="off"  onSubmit = {handleSubmit}>
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
                    name="booktitle" 
                    variant="outlined" 
                    label="booktitle" 
                    fullWidth 
                    value={bookData.booktitle}
                    onChange={(e) => setBookData({ ...bookData, booktitle: e.target.value})}
                />
                <TextField 
                    name="author" 
                    variant="outlined" 
                    label="author" 
                    fullWidth 
                    value={bookData.author}
                    onChange={(e) => setBookData({ ...bookData, author: e.target.value})}
                />
                <TextField 
                    name="publisher" 
                    variant="outlined" 
                    label="publisher" 
                    fullWidth 
                    value={bookData.publisher}
                    onChange={(e) => setBookData({ ...bookData, publisher: e.target.value})}
                />
                <TextField 
                    name="isbn" 
                    variant="outlined" 
                    label="isbn" 
                    fullWidth 
                    value={bookData.isbn}
                    onChange={(e) => setBookData({ ...bookData, isbn: e.target.value})}
                />
                <TextField 
                    name="tag" 
                    variant="outlined" 
                    label="tag" 
                    fullWidth 
                    value={bookData.tag}
                    onChange={(e) => setBookData({ ...bookData, tag: e.target.value})}
                />
                <div>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setBookData({ ...bookData, selectedFile: base64})}
                    />
                </div>
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Upload</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>        
        </Paper>
    );
}

export default Form;