import { Card, Grow, Grid, Button } from '@material-ui/core'; 
import useStyles from './styles';

const Bookresult = ( { cards }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Grow in>
                <Grid item >
                    { 
                        cards.volumeInfo.imageLinks==undefined ? (
                            <div>
                                <img src='' height="210" width="150" className={classes.image}/>
                                <div className={classes.imagefail}>Thumbnail not available</div>
                            </div>
                        ):(
                            <img src={cards.volumeInfo.imageLinks.thumbnail} height="210" width="150" className={classes.image} />
                        )
                    }
                    {
                        cards.volumeInfo.title==undefined ? (
                            <div className={classes.title}>Title: Not available</div>
                        ):(
                            <div className={classes.title}>{cards.volumeInfo.title }</div>
                        )
                    }
                    <Button className={classes.button}>Delete</Button>
                </Grid >
            </Grow>
        </Card>
    )
}
export default Bookresult;