import bcrypt from "bcryptjs"
const users = [
   {
      name: 'Admin User',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234567', 10),
      isAdmin: true
   },
   {
      name: 'Bhargavi  doe',
      email: 'bhargavi@example.com',
      password: bcrypt.hashSync('1234567', 10),

   },
   {
      name: 'Ritik Jain',
      email: 'rj@example.com',
      password: bcrypt.hashSync('1234567', 10),

   },
]
export default users