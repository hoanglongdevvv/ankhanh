import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react'
import { Alert, Card } from "react-bootstrap";
import { CartState } from '../context/Context';
import { Rating } from './Rating';
import { RiVirusFill } from 'react-icons/ri'
import './style.css'

export const SingleProduct = ({ prod }) => {

    const [show, setShow] = useState(false);
    const {
        state: { cart },
        dispatch,
    } = CartState();

    return (
        <div className="products">
            <Card>
                <Card.Img variant='top' src={prod.image} alt={prod.name} />

                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span className="price">{prod.price.split(".")[0]} VND</span>
                        {prod.fastDelivery ? (
                            <div>Không giao hàng <RiVirusFill fontSize="30px" color="red" />do ảnh hưởng của dịch COVID-19</div>
                        ) : (
                            <div>Không giao hàng <RiVirusFill fontSize="30px" color="red" />do ảnh hưởng của dịch COVID-19</div>
                        )}
                        <Rating rating={prod.ratings} />
                    </Card.Subtitle>

                    <Alert show={show} variant="success">
                        <Alert.Heading id="nametext">{prod.name}</Alert.Heading>
                        <p>
                            {prod.texthang}
                        </p>
                        <p className="text">
                            {prod.text}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Đóng
                            </Button>
                        </div>
                    </Alert>

                    {!show && <Button onClick={() => setShow(true)}>Xem Chi Tiết</Button>}
                            <hr />
                    
                    {
                        cart.some(p => p.id === prod.id) ? (

                            <Button
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: prod,
                                    });
                                }}
                                variant='danger'>
                                <p className="remove">Remove</p>
                            </Button>
                        ) : (
                            <Button
                                onClick={() => {
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: prod,
                                    });
                                }}
                                disabled={!prod.inStock}>
                                {!prod.inStock ? "Xe sắp về" : "Thêm vào giỏ hàng"}
                            </Button>
                        )
                    }
                </Card.Body>
            </Card>


        </div>
    )
}

