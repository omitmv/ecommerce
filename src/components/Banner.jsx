import React from 'react'
import './Banner.css'
import logo from '../img/log.png'

export default (props) => {
    return (
        <div className='banner'>
            <img className='imgBanner' src={logo} alt='Logo' />
            <h3>Hi-Fitec Technology</h3>
        </div>
    )
}