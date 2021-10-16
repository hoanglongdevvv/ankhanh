import React from 'react'
import { Badge, Container, Dropdown, FormControl, Navbar, Nav, Button } from 'react-bootstrap'
import { GiShoppingCart } from 'react-icons/gi'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context';
import './styleheader.css'




export const HeaderShopping = () => {

    const {
        state: { cart },
        dispatch,
        productDispatch
    } = CartState();

    return (
        <>
            <div className="headershoppingcart">
                    
                <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
                    <Container>
                        <Navbar.Brand>
                            <Link to='/products/homecart'><p className="tennav">Kinh Doanh</p></Link>
                        </Navbar.Brand>

                        <Navbar.Text className="search">
                            <FormControl
                                style={{ width: 500 }}
                                placeholder=" Nhap tim kim..."
                                className="m-auto"
                                onChange={(e) =>{
                                    productDispatch({
                                        type: "FILTER_BY_SEARCH",
                                        payload: e.target.value
                                    })
                                }}
                                 />
                        </Navbar.Text>

                        <Nav>
                            <Dropdown>
                                <Dropdown.Toggle variant="success">
                                    <GiShoppingCart color="white" fontSize="30px" />
                                    <Badge>{cart.length}</Badge>
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ minWidth: 220 }}>

                                    {cart.length > 0 ? (
                                        <>
                                            {cart.map((prod) => (
                                                <span className="cartitem" key={prod.id}>
                                                    <img
                                                        src={prod.image}
                                                        className="cartItemImg"
                                                        alt={prod.name} />
                                                    <div className="cartItemDetail">
                                                        <span>{prod.name}</span>
                                                        <span>
                                                            ${prod.price.split(".")[0]}
                                                        </span>
                                                    </div>

                                                    <AiFillDelete
                                                        fontSize="20px"
                                                        style={{ cursor: "pointer", color:"red" }}
                                                        onClick={() =>
                                                            dispatch({
                                                                type: "REMOVE_FROM_CART",
                                                                payload: prod,
                                                            })
                                                        }
                                                    />
                                                </span>

                                            ))
                                            }<span><hr /></span>
                                            <Link to="/products/viewcart">
                                                <Button style={{ width: "95%", margin: "0 10px" }}>
                                                    Đến giỏ hàng của bạn
                                                </Button>
                                            </Link>
                                        </>
                                    ) : (<span style={{ padding: 10 }}>Giỏ hàng trống</span>)}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>

                    </Container>
                </Navbar>
            </div>            
        </>
    );
   
}


