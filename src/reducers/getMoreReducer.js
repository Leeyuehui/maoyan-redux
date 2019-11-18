// import { Map } from 'immutable'
import { GET_COMINGMOVIES } from '../actions/actionType'

const initState = {
    movies: null
}

const getMoreReducer = ( state=initState, action ) => {
    const xinState ={
        ...state
    }
   switch (action.type) {
       case GET_COMINGMOVIES:
          xinState.movies.movieList.push( ...action.payload.coming)
           break;
   
       default:
          
           break;
   }
   return xinState
}
export default getMoreReducer