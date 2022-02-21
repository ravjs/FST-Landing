import React, { Component, Link } from 'react'
import MyNavbar from './Comps/MyNavbar'
import '../App.css';
import ThreeComp from './Comps/ThreeComp.jsx'
export default class HomeView extends Component {
    render() {
        return (
            <div className='homeView'>

             <MyNavbar />
             
              <div className='center-all'>
                <div>

                <ThreeComp />
                
               </div>
             </div>
            </div>
        )
    }
}
