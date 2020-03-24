import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';

const MovieResult = ({Title, Year, Type, Poster}) => {

    return(
        <Card>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title}/>
                </Grid>
                <Grid item>
                    <Typography>{Title}</Typography>
                    <Typography> {Year} </Typography>
                    <Typography> {Type} </Typography>
                    <Button color="primary" variant="contained">Ver mas</Button>
                </Grid>
            </Grid>
        </Card>
    )
}
export default MovieResult;