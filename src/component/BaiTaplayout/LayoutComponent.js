import React, { Component } from 'react'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ProductListComponent from './ProductListComponent'
import SliderComponent from './SliderComponent'


export default class LayoutComponent extends Component {
    render() {
        return (
            <div className="bg-dark">
                <HeaderComponent/>
                <SliderComponent/>
                <ProductListComponent/>
                <FooterComponent/>
            </div>
        )
    }
}
