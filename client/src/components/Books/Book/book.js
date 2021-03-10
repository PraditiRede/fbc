import { useState } from 'react';
import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'; 
// import ThumbUpAltIcon from '@material-ui/icon/ThumbUpAl';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
// import { post } from '../../../../../server/routes/auth';
import api from '../../../api/index';

import useStyles from './styles';

const Book = ({ book }) => {

    const classes = useStyles();
    const query = book.search;

    const [cards, setCards]= useState([]);
    api.searchBooks(query)
        .then(res =>
            setCards(res.data.items)
        )
        .catch(err => console.log(err));
        
    var title = cards[0].volumeInfo.title;
    var imge = cards[0].volumeInfo.imageLinks.thumbnail;
    var publisher = cards[0].volumeInfo.publisher;
    var author = cards[0].volumeInfo.authors[0];
    var isbn = cards[0].industryIdentifiers[0].identifier;

    // var title = book.booktitle;
    // var imge = book.img;
    // var publisher = book.publisher;
    // var author = book.author;
    // var isbn = book.isbn;

    return(
       <Card className={classes.card}>
           <Typography variant="h5" className={classes.title}>Title: {title}</Typography>
           <img src={imge} height="320" width="350"/>
           <CardContent>
               <Typography variant="h6">Posted By: {book.username}</Typography>
               <Typography variant="body2">Posted {moment(book.createdAt).fromNow()}</Typography>
           </CardContent>
           {/* <div>
                <Typography variant="body2" color="textSecondary">{book.tags.map((tag) => '#${tag} ')}</Typography>
           </div> */}
           <CardContent>
                <Typography variant="h6" gutterBottom>Author: {author}</Typography>
                <Typography variant="h6" gutterBottom>Publisher: {publisher}</Typography>
                <Typography variant="h6" gutterBottom>ISBN: {isbn}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=> {}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>

    );
}

export default Book;
