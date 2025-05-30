const express = require('express');
const routes = express.Router();

const users = [{
  id: 1,
  name: "Jamille",
  email: "jamille@gmail.com",
  password: "123456"
}]

routes.post('/login', (req, res) => {
  const {email, password } = req.body;
  const user = users.find(user => user.email === email && user.password === password);
  
  if(user) {
    res.status(200).json(user);
    //authControler();
  } else {
    res.status(401).json({ message: "Credenciais invalidas" });
  }
});

module.exports = routes;