import { Card, Grow, Grid, Button } from '@material-ui/core'; 
import useStyles from './styles';
import React from 'react';
import { createBook } from '../actions/books';
import { useDispatch } from 'react-redux';

const Searchresult = ( { cards }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const MAX_LENGTH = 125;
    const handleSubmit = (e) => {
        e.preventDefault();
        if(cards.volumeInfo.industryIdentifiers!=undefined){
            const bookData = { username: 'abc', search: cards.volumeInfo.industryIdentifiers[0].identifier};
            console.log(bookData);
            dispatch(createBook(bookData));
            alert("Book added successfully!");
        }
        else{
            alert("Error!");
        }
    }
    return (
        <Card className={classes.card}>
                <Grow in>
                        <Grid container>
                            <Grid item xs={12} sm={7} lg={4}>
                            { 
                                cards.volumeInfo.imageLinks==undefined ? (
                                    <div>
                                        <img src='' height="195" width="130" className={classes.image}/>
                                        <div className={classes.imagefail}>Thumbnail not available</div>
                                    </div>
                                ):(
                                    <img src={cards.volumeInfo.imageLinks.thumbnail} height="195" width="130" className={classes.image} />
                                )
                            }
                            </Grid >
                            <Grid item xs={12} sm={4} lg={8}>
                            {
                                cards.volumeInfo.title==undefined ? (
                                    <div className={classes.title}>Title: Not available</div>
                                ):(
                                    <div className={classes.title}>{cards.volumeInfo.title }</div>
                                )
                            }
                            { 
                                cards.volumeInfo.authors==undefined ? (
                                    <div className={classes.author}>Author: Not available</div>
                                ):(
                                    <div className={classes.author}>{cards.volumeInfo.authors[0]}</div>
                                )
                            }
                            { 
                                cards.volumeInfo.description==undefined ? (
                                    <div className={classes.description}>Description: Not available</div>
                                ):(
                                    // <div>{cards.volumeInfo.description}</div>
                                    cards.volumeInfo.description.length > MAX_LENGTH ? (
                                        <div className={classes.description}>{cards.volumeInfo.description.substring(0, MAX_LENGTH)}...</div>
                                    ): (
                                        <div className={classes.description}>{cards.volumeInfo.description}</div>
                                    )
                                )
                            }
                            <span className={classes.buttonbox}>
                                <Button className={classes.button} onClick = {handleSubmit}>Add to Library</Button>
                                <Button className={classes.button}>Get this Book</Button>
                            </span>
                            </Grid>
                        </Grid>
                </Grow>
        </Card>
    )
}
export default Searchresult;