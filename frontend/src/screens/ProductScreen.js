import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = ({ history, match }) => {
   const [qty, setQty] = useState(0)
   const dispatch = useDispatch()
   const productDetails = useSelector(state => state.productDetails)
   const { loading, error, product } = productDetails
   useEffect(() => {
      dispatch(listProductDetails(match.params.id))
   }, [dispatch, match])
   const addToCartHandler = () => { history.push(`/cart/${match.params.id}?qty=${qty}`) }
   return (

      <>
         <Link className="btn btn-light my-3" to="/">Go Back</Link>
         {loading ? (<h2><Loader /></h2>) : error ? (<Message variant='danger'>{error}</Message>) : (
            <Row>
               <Col md={6}>
                  <Image src={product.image} alt={product.name} fluid />
               </Col>
               <Col md={3}>
                  <ListGroup variant='flush'>
                     <ListGroup.Item>
                        <h3>{product.name}</h3>
                     </ListGroup.Item>
                     <ListGroup.Item>
                        <Rating value={product.rating}
                           text={`${product.numReviews} reviews`}
                        />
                     </ListGroup.Item>
                     <ListGroup.Item>
                        Price: ${product.price}
                     </ListGroup.Item>
                     <ListGroup.Item>
                        Description : ${product.description}
                     </ListGroup.Item>
                  </ListGroup>
               </Col>
               <Col md={3}>
                  <Card>
                     <ListGroup>
                        <ListGroup.Item>
                           <Row>
                              <Col>
                                 Price:
                              </Col>
                              <Col>
                                 <strong>${product.price}</strong>
                              </Col>
                           </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           <Row>
                              <Col>
                                 Status:
                              </Col>
                              <Col>
                                 <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                 </strong>
                              </Col>
                           </Row>
                        </ListGroup.Item>
                        {product.countInStock && (<ListGroup.Item>
                           <Row>
                              <Col>
                                 <Form.Control as="select" onChange={(e) => setQty(e.target.value)} >{
                                    [...Array(product.countInStock).keys()].map(x => (<option key={x + 1} value={x + 1} >{x + 1}</option>))
                                 }

                                 </Form.Control>
                              </Col>
                           </Row>
                        </ListGroup.Item>)}
                        <ListGroup.Item>
                           <Button className="btn-block" type="button" onClick={addToCartHandler} disabled={product.countInStock === 0} >
                              Add To Cart
                           </Button>
                        </ListGroup.Item>
                     </ListGroup>
                  </Card>
               </Col>
            </Row>
         )}

      </>
   )
}

export default ProductScreen