import React, { Component,Fragment } from 'react'
import Tab from '../components/common/tab'
import Tabbar from '../components/common/tabbar'
import Home from '../pages/home'
import { Route, Switch ,Redirect } from 'react-router-dom'
import Category from '../pages/category'
import Rcommmend from '../pages/rcommend'
import Shopcar from '../pages/shopcar'
import Mine from '../pages/mine'
import Error from '../pages/error'

export default class LayOut extends Component {
    render() {
        return (
            <Fragment>
                <Tab/>
                <Switch>
                    <Redirect from = "/" to ="/home" exact/>                
                    <Route path="/home" component={ Home } />
                    <Route path="/category" component={ Category }/>
                    <Route path="/rcommend" component={ Rcommmend }/>
                    <Route path="/shopcar" component={ Shopcar }/>
                    <Route path="/mine" component={ Mine }/>
                    <Route component={ Error }/>
                </Switch>
                <Tabbar/>
            </Fragment>
        )
    }
}
