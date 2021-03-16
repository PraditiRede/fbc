import React, { useState } from 'react';
import { TextField, Grid } from '@material-ui/core';
import api from '../api/index';
import Searchresult  from './searchresult';
import useStyles from './styles';

const Searchbook = () => {
    const classes = useStyles();
    const [searchdata, setsearchData] = useState({ search: '' });
    const [cards, setCards]= useState([]);
    const HandleSubmit = (e) => {
        e.preventDefault();
        api.searchBooks(searchdata.search, '', '')
        .then(res =>{
            setCards(res.data.items);
        })
        .catch(err=>{
            console.log(err);
        })
        setsearchData({ search: ''});
        
    }
    return (
        <div className={classes.paper}>
            <form autoComplete="off" onSubmit = {HandleSubmit} className={classes.form} >
                <TextField
                    className={classes.formin}
                    type="text" 
                    placeholder="Search book, stores, authors, lenders..."
                    value={searchdata.search}
                    onChange={(e) => setsearchData({ ...searchdata, search: e.target.value})}
                    />
            </form> 
            { 
                cards==undefined ? (
                    <div>
                        <div className={classes.invalid}>Invalid book search</div>
                    </div>
                ):(
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {cards.map((cards) => (
                            <Grid key={cards.id} item xs={12} sm={6} lg={6}>
                                <Searchresult cards={cards} />
                            </Grid>
                        ))}
                    </Grid>
                )
            }
        </div>
    );
};

export default Searchbook;