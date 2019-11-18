// import { Map } from 'immutable'
import { GET_MOVIES,GET_COMINGMOVIES } from '../actions/actionType'

// const initState = Map({
//     movies: null
// })
const initState = {
    movies: null
}

const maoyanReducer = ( state=initState, action ) => {
    const newState ={
        ...state
    }
   switch (action.type) {
       case GET_MOVIES:
          newState.movies = action.payload
           break;
       case GET_COMINGMOVIES:
          newState.movies.movieList.push( ...action.payload.coming) 
           break;
   
       default:
          
           break;
   }
   return newState
}
export default maoyanReducer