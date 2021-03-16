import { useState } from 'react';
import React from 'react';
import { Card, Grid } from '@material-ui/core'; 
import api from '../../../api/index';
import Bookresult from './bookresult';
import useStyles from './styles';

const Book = ({ book }) => {
    const classes = useStyles();
    const query = book.search;
    const isbn = 'isbn';
    const ser = '';
    const [cards, setCards]= useState([]);
    api.searchBooks(ser, isbn, query)
    .then(res =>
        setCards(res.data.items)
    )
    .catch(err => console.log(err));
    return(
        <Card >
            <Grid >
            { 
                cards==undefined ? (
                    <div>
                        <div className={classes.invalid}>No book added yet...</div>
                    </div>
                ):(
                    <Grid>
                        {cards.map((cards) => (
                            <Grid key={cards.id} >
                                <Bookresult cards={cards} />
                            </Grid>
                        ))}
                    </Grid>
                )
            }
            </Grid>
        </Card>
    );
}

export default Book;
