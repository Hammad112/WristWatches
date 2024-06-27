import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'hammad nasir',
    email: 'hammad@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'asif iqbal',
    email: 'asif@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;