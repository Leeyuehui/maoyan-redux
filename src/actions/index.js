import { GET_MOVIES,GET_COMINGMOVIES } from './actionType'
import request from './request'

export const getMovies = () => {
        return async dispatch => {
            const result = await request({
                url: '/ajax/movieOnInfoList',
                params: {
                    token: ''
                }
            })
            // console.log(result)
            dispatch({
                type: GET_MOVIES,
                payload: result.data   
                })
        }
}
export const getComingMovies = (movieIds) => {
        return async dispatch => {
            const res = await request({
                url: '/ajax/moreComingList',
                params: {
                    token: '',
                    movieIds
                }
            })
            // console.log(res)
            dispatch({
                type: GET_COMINGMOVIES,
                payload: res.data   
                })
        }
}
