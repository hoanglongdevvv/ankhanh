import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HeaderShopping } from './productshopping/HeaderShopping'
import HomeCart from './productshopping/HomeCart'
import { Start } from './productshopping/Start'
import { ViewCart } from './productshopping/ViewCart'

export class Products extends Component {
  render() {
    return (
      <Router>
        <div className="product">
          <HeaderShopping />
          <Start />
          {/* <HomeCart /> */}
          <div className="App">
            <Route exact path='/products/homecart' >
              <HomeCart />
            </Route>
            <Route path='/products/viewcart'>
              <ViewCart />
            </Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default Products
