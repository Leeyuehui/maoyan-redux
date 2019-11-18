import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMovies,getComingMovies } from '../../actions'
import './index.scss'
import BScroll from 'better-scroll'
import _ from 'loadsh'
import { Toast } from 'antd-mobile'
import Loading from '../../framework/loading.js'

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movies: [],
        }
    }
    

   async componentDidMount () {
       await this.props.getMovies()
       this.setState( {
           movies: this.props.movies.movieList
       })
       let count =  0
       const scroll =new BScroll('.container',{
        pullUpLoad: {
            threshold: 40 //距离底部40是开始执行加载
        }
       })
       scroll.on('pullingUp',() =>{
        const movieIds = this.props.movies.movieIds.slice(12)
        const ids = _.chunk(movieIds , 10)

        if( count == ids.length ){
            scroll.finishPullUp()
            // function showToast() {
                Toast.info('么得了...', 1);
            //   }

            return
        }

        if( count < ids.length ){
            //数据请求
          
            // this.showLoading()
            // console.log(ids)
            this.showLoading()
            this.setState( {
                movies: this.props.movies.movieList
            })
            this.props.getComingMovies( ids[count].join(','))
            
         
        }
        scroll.finishPullUp()
        setTimeout(() => {
            this.hideLoading()
        }, 1000);
        count++
    })
    }

    showLoading = () => {
        document.querySelector('.hide').setAttribute('class','show')
    }
    hideLoading = () => {
        document.querySelector('.show').setAttribute('class','hide')
    }
    renderMovie = () => {
        const { movies } = this.state
        return movies.map( item => <li key = { item.id }>
                <div className="cont-left"><img src={ item.img.replace('w.h','120.128') } alt="" /> </div>
                <div className="cont-rig">
                    <p>{ item.nm}</p>
                    <span className="audis">观众评 <i className="score">{ item.sc}</i></span>
                    <span className="main-star"> 主演：{ item.star}</span>
                    <span className="cinema">{ item.showInfo}</span>
                </div> 
                <div className="btn-box">
                    <button className="btn">购票</button>    
                </div> 
                </li>)
    }
    render() {
        return (
            <div className="container">
                <ul className="content">
                    { this.renderMovie() }
                </ul>
                <div className="hide">
                    <Loading/>
                </div>
            </div>
        )
    }
}
export default connect( 
        state => state.newState,
        dispatch => bindActionCreators( { getMovies,getComingMovies }, dispatch ))(Home)
