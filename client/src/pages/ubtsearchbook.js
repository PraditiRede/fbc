import React, { useState } from 'react';
import { TextField, Grid } from '@material-ui/core';
import api from '../api/index';
import Ubtsearchresult  from './ubtsearchresult';
import useStyles from './styles';

const Uploadbytitle = () => {
    const classes = useStyles();
    const [searchdata, setsearchData] = useState({ search: '' });
    const [cards, setCards]= useState([]);
    const intitle = 'intitle';
    const query = '';
    const HandleSubmit = (e) => {
        e.preventDefault();
        api.searchBooks(query,intitle, searchdata.search)
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
                    placeholder="Search book by title..."
                    value={searchdata.search}
                    onChange={(e) => setsearchData({ ...searchdata, search: e.target.value})}
                    />
            </form> 
            { 
                cards==undefined ? (
                    <div>
                        <div className={classes.invalid}>Invalid Title</div>
                    </div>
                ):(
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {cards.map((cards) => (
                            <Grid key={cards.id} item xs={12} sm={6} lg={6}>
                                <Ubtsearchresult cards={cards} />
                            </Grid>
                        ))}
                    </Grid>
                )
            }
        </div>
    );
};

export default Uploadbytitle;