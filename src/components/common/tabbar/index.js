import React, { Component } from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'

export default class Tabbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tabbarList:[
                 {
                     id: 1,
                     text: '首页',
                     iconName: 'fa-home',
                     path: '/home'
                 },
                 {
                     id: 2,
                     text: '推荐',
                     iconName: ' fa-film ',
                     path: '/recommend'
                 },
                 {
                     id: 3,
                     text: '分类',
                     iconName: ' fa-carrot',
                     path: '/category'
                 },
                 {
                     id: 4,
                     text: '购物车',
                     iconName: 'fa-shopping-cart',
                     path: '/shopcar'
                 },
                 {
                     id: 5,
                     text: '个人中心',
                     iconName: 'fa-users',
                     path: '/mine'
                 }
             ]
        }
    }

    renderList = () => {
    return  this.state.tabbarList.map( item => <li key={item.id} >
        <NavLink
            to={ item.path }
            activeClassName='active'
        > 
            <i className={ 'fas ' + item.iconName }> </i>
            <span> { item.text } </span>
        </NavLink>
    </li>)
    }
    
    render() {

        return (
            <div className="footer">
                <ul className="foot-box">
                  { this.renderList()}
                </ul>
            </div>
        )
    }
}
