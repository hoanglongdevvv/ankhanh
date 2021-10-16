import React from 'react'
import { Dropdown, Form } from 'react-bootstrap'
import { Rating } from './Rating'
import { CartState } from '../context/Context'
import Button from '@restart/ui/esm/Button'
import { FaFilter } from 'react-icons/fa'

export const Filters = () => {

    const { productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
        productDispatch
    } = CartState();

    console.log(byStock, byFastDelivery, sort, byRating, searchQuery)

    return (
        <div className="filters">
            <div className="filters">
                <span className="title">Lọc <FaFilter fontSize="20px" /></span>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary">
                        Giá:
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="light">
                        <Dropdown.Item href="/">
                            <span>
                                <Form.Check
                                    inline
                                    label="Cao - Thấp"
                                    name="group1"
                                    type="radio"
                                    id={`inline-1`}
                                    onChange={() =>
                                        productDispatch({
                                            type: "SORT_BY_PRICE",
                                            payload: "lowToHigh",
                                        })
                                    }
                                    checked={sort === "lowToHigh" ? true : false}
                                />
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/">
                            <span>
                                <Form.Check
                                    inline
                                    label="Thấp - Cao"
                                    name="group1"
                                    type="radio"
                                    id={`inline-2`}
                                    onChange={() =>
                                        productDispatch({
                                            type: "SORT_BY_PRICE",
                                            payload: "highToLow",
                                        })
                                    }
                                    checked={sort === "highToLow" ? true : false}
                                />
                            </span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <br/>
                <span>
                    <Form.Check
                        inline
                        label="Hàng mới sắp về"
                        name="group1"
                        type="checkbox"
                        id={`inline-3`}
                        onChange={() =>
                            productDispatch({
                                type: "FILTER_BY_STOCK",
                            })
                        }
                        checked={byStock}
                    />
                </span>
                <span>
                    <Form.Check
                        inline
                        label="Giao hàng nhanh"
                        name="group1"
                        type="checkbox"
                        id={`inline-4`}
                        onChange={() =>
                            productDispatch({
                                type: "FILTER_BY_DELIVERY",
                            })
                        }
                        checked={byFastDelivery}
                    />
                </span>
                <span>
                    <label style={{ paddingRight: 10 }}>Đánh giá tăng: </label>
                    <Rating
                        rating={byRating}
                        onClick={(i) =>
                            productDispatch({
                                type: "FILTER_BY_RATING",
                                payload: i + 1,
                            })
                        }
                        // onClick={(i) => setRate(i + 1)}
                        style={{ cursor: "pointer" }}
                    />
                </span>
                <Button
                    variant="light"
                    onClick={() =>
                        productDispatch({
                            type: "CLEAR_FILTERS",
                        })
                    }
                >
                    Hủy Lọc
                </Button>
            </div>
        </div>
    )
}
