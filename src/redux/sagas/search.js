import { put, call, takeLatest } from 'redux-saga/effects';
import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE } from '../../consts/actionTypes';
import { searchMovie } from '../actions/search';

import { apiCall } from '../api';

export function* SearchMovie({ payload}){
    try{
      const results = yield call (apiCall, `&s=${payload.movieName}`, null, null, 'GET');
      yield put({ type: SEARCH_MOVIE_COMPLETE, results});

    }catch (error){
      yield put({ type: SEARCH_MOVIE_ERROR, error});


    }
}

export default function* search() {
    yield takeLatest(SEARCH_MOVIE_START, searchMovie);
};