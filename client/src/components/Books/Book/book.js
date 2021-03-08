import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'; 
// import ThumbUpAltIcon from '@material-ui/icon/ThumbUpAl';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
// import { post } from '../../../../../server/routes/auth';

// import useStyles from './styles';

const Book = ({ book }) => {
    // const classes = useStyles();
    return(
       <Card>
           <Typography variant="h3">{book.booktitle}</Typography>
           {/* <CardMedia image={book.selectedFile} /> */}
           <img src={book.selectedFile} height="320" width="350"/>
           <div>
               <Typography variant="h6">Posted By: {book.username}</Typography>
               <Typography variant="body2">{moment(book.createdAt).fromNow()}</Typography>
           </div>
           {/* <div>
               <Button style={{color: 'white'}} size="small" onClick={()=>{}}>
                   <MoreHorizIcon fontSize="default"/>
               </Button>
           </div> */}
           {/* <div>
                <Typography variant="body2" color="textSecondary">{book.tags.map((tag) => '#${tag} ')}</Typography>
           </div> */}
           <CardContent>
                <Typography variant="h5" gutterBottom>Author: {book.author}</Typography>
                <Typography variant="h5" gutterBottom>Publisher: {book.publisher}</Typography>
                <Typography variant="h5" gutterBottom>ISBN: {book.isbn}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={()=> {}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>

    );
}

export default Book;
