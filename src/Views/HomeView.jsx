import React, { Component } from 'react'
import MyNavbar from './Comps/MyNavbar'

import '../App.css';
export default class HomeView extends Component {
    render() {
        return (
            <div className='fill-window'>

             <MyNavbar />
             
              <div className='center-all'>
                <h1 >fullSTACK</h1>
                <div>
                <br></br>
               </div>
             </div>
            </div>
        )
    }
}
