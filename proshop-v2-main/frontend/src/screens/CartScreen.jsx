import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import React from 'react';
const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const cart = useSelector((state) => state.cart);
  // const { cartItems } = cart;

  // NOTE: no need for an async function here as we are not awaiting the
  // resolution of a Promise
  // const addToCartHandler = (product, qty) => {
  //   dispatch(addToCart({ ...product, qty }));
  // };

  // const removeFromCartHandler = (id) => {
  //   dispatch(removeFromCart(id));
  // };

  // const checkoutHandler = () => {
  //   navigate('/login?redirect=/shipping');
  // };

  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: '20px' }}>Giỏ hàng</h1>

        <ListGroup variant='flush'>
          {[
            {
              id: '1',
              name: 'Aquafina',
              image: '/images/aqua.jpg',
              description: '',
              brand: '',
              category: 'Beverage',
              price: 10000,
              countInStock: 10,
              rating: 4.5,
              numReviews: 12,
              qty: 1,
            },
            {
              id: '2',
              name: 'Cà phê sữa',
              image: '/images/cafe.jpg',
              description: '',
              brand: '',
              category: 'Beverage',
              price: 10000,
              countInStock: 7,
              rating: 4.0,
              numReviews: 8,
              qty: 1,
            },
            {
              id: '3',
              name: 'Coca Cola',
              image: '/images/coca.jpg',
              description: '',
              brand: '',
              category: 'Beverage',
              price: 10000,
              countInStock: 5,
              rating: 3,
              numReviews: 12,
              qty: 1,
            },
          ].map((item) => (
            <ListGroup.Item key={item.id}>
              <Row>
                <Col md={2}>
                  <Image src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col md={3}>
                  <Link to={`/product/${item.id}`}>{item.name}</Link>
                </Col>
                <Col md={2}>{item.price} đồng</Col>
                <Col md={2}>
                  <Form.Control as='select' value={item.qty}>
                    {[{}, {}, {}].map((x, idx) => (
                      <option key={idx + 1} value={idx + 1}>
                        {idx + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button type='button' variant='light'>
                    <FaTrash />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Tổng cộng 3 vật phẩm</h2>
            </ListGroup.Item>
            <ListGroup.Item>30.000 đồng</ListGroup.Item>

            <ListGroup.Item>
              <Button type='button' className='btn-block'>
                Tiến hành đặt hàng
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
