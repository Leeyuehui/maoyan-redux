import React, { Component } from 'react'
import './loading.scss'

export default class Loading extends Component {
    render() {
        return (
            <div className="circle-box">
                 <div id="circle"></div>
            </div>
        )
    }
}
