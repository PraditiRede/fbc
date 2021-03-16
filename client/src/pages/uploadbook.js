import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useStyles from './styles';

const Uploadbook = () => {
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.uploadtitle}>
                Upload a book
            </div>
            <span className={classes.section}>
                <div className={classes.bname}>
                    <Link to="/uploadbytitle"><div className={classes.block}></div></Link>
                    <div className={classes.searchby}>Search for title</div>
                </div>
                <div className={classes.bname}>
                    <Link to="/titlesearch"><div className={classes.block}></div></Link>
                    <div className={classes.searchby}>Upload cover photo</div>
                </div>
                <div className={classes.bname}>
                    <Link to="/titlesearch"><div className={classes.block}></div></Link>
                    <div className={classes.searchby}>Upload Barcode</div>
                </div>
                <div className={classes.bname}>
                    <Link to="/uploadbyisbn"><div className={classes.block}></div></Link>
                    <div className={classes.searchby}>Enter ISBN</div>
                </div>
                <div className={classes.bname}>
                    <Link to="/titlesearch"><div className={classes.block}></div></Link>
                    <div className={classes.searchby}>Import Book</div>
                </div>
            </span>
        </Container>
    );
};
export default Uploadbook;