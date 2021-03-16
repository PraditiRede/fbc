import { Card, Grow, Grid, Button } from '@material-ui/core'; 
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/books';

const Ubtsearchresult = ( { cards }) => {
    const classes = useStyles();
    const MAX_LENGTH = 125;
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(cards.volumeInfo.industryIdentifiers!=undefined){
            const bookData = { username: 'abc', search: cards.volumeInfo.industryIdentifiers[0].identifier};
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
export default Ubtsearchresult;