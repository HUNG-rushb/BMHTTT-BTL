import React, { useEffect, useState } from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';

import { toast } from 'react-toastify';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useProfileMutation } from '../slices/usersApiSlice';
import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
import { setCredentials } from '../slices/authSlice';

const ProfileScreen = () => {
  const [name, setName] = useState('Nguyễn Hữu Nghĩa');
  const [email, setEmail] = useState('user438@example.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const { userInfo } = useSelector((state) => state.auth);

  // const { data: orders, isLoading, error } = useGetMyOrdersQuery();

  // const [updateProfile, { isLoading: loadingUpdateProfile }] =
  //   useProfileMutation();

  // useEffect(() => {
  //   setName(userInfo.name);
  //   setEmail(userInfo.email);
  // }, [userInfo.email, userInfo.name]);

  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   toast.error('Passwords do not match');
    // } else {
    //   try {
    //     const res = await updateProfile({
    //       _id: userInfo._id,
    //       name,
    //       email,
    //       password,
    //     }).unwrap();
    //     dispatch(setCredentials({ ...res }));
    //     toast.success('Profile updated successfully');
    //   } catch (err) {
    //     toast.error(err?.data?.message || err.error);
    //   }
    // }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>Hồ sơ</h2>

        <Form onSubmit={submitHandler}>
          <Form.Group className='my-2' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className='my-2' controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className='my-2' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className='my-2' controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
          {/* {loadingUpdateProfile && <Loader />} */}
        </Form>
      </Col>
      <Col md={9}>
        <h2>Đơn hàng</h2>
        <Table striped hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 1,
                createdAt: '12/12/2023',
                totalPrice: '1.520.000 đồng',
                isDelivered: true,
                deliveredAt: '12/12/2023',
                isPaid: true,
                paidAt: '12/12/2023',
              },
              {
                id: 2,
                createdAt: '12/12/2023',
                totalPrice: '1.520.000 đồng',
                isDelivered: false,
                deliveredAt: '',
                isPaid: true,
                paidAt: '12/12/2023',
              },
              {
                id: 3,
                createdAt: '12/12/2023',
                totalPrice: '1.520.000 đồng',
                isDelivered: true,
                deliveredAt: '12/12/2023',
                isPaid: false,
                paidAt: '',
              },
              {
                id: 4,
                createdAt: '12/12/2023',
                totalPrice: '1.520.000 đồng',
                isDelivered: false,
                deliveredAt: '',
                isPaid: false,
                paidAt: '',
              },
            ].map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.createdAt}</td>
                <td>{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order.id}`}>
                    <Button className='btn-sm' variant='light'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
