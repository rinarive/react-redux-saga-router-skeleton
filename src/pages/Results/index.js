import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core';
import queryString from 'query-string'


import { searchMovie } from '../../redux/actions/search';
import { movieResults, isSearchLoading  } from '../../redux/selector';
import MovieResults from '../../components/movieResults'

export default ({ location }) => {
    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));


    useEffect(()=>{
        const { movieName } = queryString.parse(location.search);
        if (movieName && !movies){

            dispatch(searchMovie({movieName}));
        }

    });
    const renderMovies = ()=>{
        if (movies){
            return movies.map((value, index)=> <MovieResults key={index}{...value}/>)
        }else{
            return<CircularProgress size={100} color="primary"/>
        }

    };
    return (
        <Container>
         {renderMovies()}
        </Container>
    )
}