const express = require('express');
const router = express.Router();
const login = 'admin';
const password = '123';

/* GET home page. */
router.get('/', (req, res ) => {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res ) => {
  res.render('login', { title: 'Login' });
});

router.post('/login', (req, res) => {
 // console.log(req.body);
  const body = req.body;

  if(body.login === login && body.password === password) {
    res.redirect('/admin');
  } else {
    res.redirect('/login');
  }
  
});


//hello
module.exports = router;
