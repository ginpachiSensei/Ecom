//TODO think of user data and password hashing 
import bcrypt from 'bcryptjs';

const Users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: 'satyam',
        email: 'satyam@example.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'shivam',
        email: 'shivam@example.com',
        password: bcrypt.hashSync('123456',10),
    },
]

export default Users
