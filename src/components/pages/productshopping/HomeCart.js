import React from 'react'
import { CartState } from '../context/Context'
import { SingleProduct } from './SingleProduct';
import './style.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Filters } from './Filters';
import Footer from '../../Footer';

export const HomeCart = () => {
    const { state: { products },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
    } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === 'lowToHight' ? a.price - b.price : b.price - a.price
            );
        } else {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === 'hightToLow' ? b.price - a.price : a.price - b.price);
        }


        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }


        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.byFastDelivery);
        }


        if (byRating) {
            sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery));
        }

        return sortedProducts;
    };

    return (
        <div className="homecart">
            <Container fluid>
                <Row >
                    <Col sm={3}><Filters /></Col>
                    <Col sm={9}>
                        <div className="productContainer">
                            {transformProducts().map((prod) => {
                                return (
                                    <SingleProduct prod={prod} key={prod.id} />
                                )
                            })}
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Footer />
                    </Col>
                </Row>

            </Container>
        </div>


    )
}
export default HomeCart