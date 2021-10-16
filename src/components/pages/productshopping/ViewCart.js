import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../context/Context'
import { Rating } from '../productshopping/Rating'

export const ViewCart = () => {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
    }, [cart])

    return (
        <div className="homecart">

            <div className="productContainer">
                <Container>
                    <Row>
                        <Col>
                            <ListGroup>
                                {
                                    cart.map((prod) => (
                                        <ListGroup.Item key={prod.id}>
                                            <Row>
                                                <Col md={2}>
                                                    <Image src={prod.image} atl={prod.name} fluid rounded />
                                                </Col>
                                                <Col md={2}>
                                                    <span>{prod.name}</span>
                                                </Col>
                                                <Col md={2}>
                                                    <span style={{ color:"red" }}>{prod.price} VND</span>
                                                </Col>
                                                <Col md={2}>
                                                    <Rating rating={prod.ratings} />
                                                </Col>
                                                <Col md={2}>
                                                    <Form.Control
                                                        as="select"
                                                        value={prod.qty}
                                                        onChange={(e) =>
                                                            dispatch({
                                                                type: "CHANGE_CART_QTY",
                                                                payload: {
                                                                    id: prod.id,
                                                                    qty: e.target.value,
                                                                },
                                                            })
                                                        }
                                                    >
                                                        {[...Array(prod.inStock).keys()].map((x) => (
                                                            <option key={x + 1}>{x + 1}</option>
                                                        ))}
                                                    </Form.Control>
                                                </Col>
                                                <Col md={2}>
                                                    <Button
                                                        type="button"
                                                        variant="light"
                                                        onClick={() =>
                                                            dispatch({
                                                                type: "REMOVE_FROM_CART",
                                                                payload: prod,
                                                            })
                                                        }>
                                                        <AiFillDelete fontSize="20px" />
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                            </ListGroup>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <div className="filters summary">
                                <span className="title">
                                    Bạn đang có {cart.length} sản phẩm Shop
                                </span>
                                <span style={{ fontWeight: 700, fontSize: 20 }}>
                                    Tổng tiền:  {total} VND
                                </span>

                                <Button style={{ width:"200px" }} type="button" disabled={cart.length === 0}>
                                    Thanh Toán
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>


        </div>
    )
}
