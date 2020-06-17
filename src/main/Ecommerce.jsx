import React, { Component } from 'react'
import './Ecommerce.css'

import Banner from '../components/Banner';
import Content from '../components/Content'
import Footer from '../components/Footer'

export default class Ecommerce extends Component {
    render() {
        return (
            <div className="ecommerce">
                <Banner />
                <>
                    <Content categoria='Ação' colunmCard='1' />
                    <Content categoria='Culinária' colunmCard='2' />
                </>
                <Footer />
            </div>
        )
    }
}