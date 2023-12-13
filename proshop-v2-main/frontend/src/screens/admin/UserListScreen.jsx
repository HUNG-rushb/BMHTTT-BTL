import React from 'react';

import { Table, Button } from 'react-bootstrap';

const UserListScreen = () => {
  return (
    <>
      <h1>Danh sách người dùng</h1>

      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Số tài khoản</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              id: '1',
              name: 'Nguyễn Trần Tiến Anh',
              sex: 'Nam',
              description: '123 Đường Tôn Đức Thắng, Quận Đống Đa, Hà Nội',
              phone: '025 480 1252',
              email: 'user911@example.com',
              stk: '6923575473',
            },
            {
              id: '2',
              name: 'Mai Đình Quốc Anh',
              sex: 'Nam',
              description: '456 Đường Lê Lợi, Quận Hoàn Kiếm, Hà Nội',
              phone: '088 692 7833',
              email: 'user160@example.com',
              stk: 2452769744,
            },
            {
              id: '3',
              name: 'Nguyễn Trường Tuấn Anh',
              sex: 'Nam',
              description: '789 Đường Nguyễn Văn Linh, Quận Long Biên, Hà Nội',
              phone: '075 721 8941',
              email: 'user656@example.com',
              stk: 2336665911,
            },
            {
              id: '4',
              name: 'Lê Thị Hoàng Anh',
              sex: 'Nữ',
              description:
                '321 Đường Lý Thường Kiệt, Quận Hai Bà Trưng, Hà Nội',
              phone: '086 903 4244',
              email: 'user862@example.com',
              stk: '6923575473',
            },

            {
              id: '8',
              name: 'Hồ Anh Dũng	Nam',
              sex: 'Nam',
              description: '101 Đường Đê La Thành, Quận Đống Đa, Hà Nội',
              phone: '082 798 6868',
              email: 'user513@example.com',
              stk: '5790729552',
            },
            {
              id: '9',
              name: 'Nguyễn Thanh Hải',
              sex: 'Nam',
              description: '111 Đường Tôn Đức Thắng, Quận Đống Đa, Hà Nội',
              phone: '064 679 8301',
              email: 'user670@example.com',
              stk: '7150683583',
            },
          ].map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.sex}</td>
              <td>{user.description}</td>
              <td>{user.phone}</td>
              <td>{user.stk}</td>
              <td>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserListScreen;
