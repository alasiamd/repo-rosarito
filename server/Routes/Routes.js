const express = require('express');
const router = express.Router();
const { getUser } = require('../Controllers/getUser');
const { getProducts } = require('../Controllers/getProducts');
const { getCategories } = require('../Controllers/getCategories');
const { createProduct } = require('../Controllers/createProduct');



router.get('/users', getUser);

router.get('/products', getProducts);

router.get('/categories', getCategories);
  


  router.post('/admin/products', createProduct);

  router.get('/profile', (req, res) => {
    if (req.session.login) {
        res.render('shop/profile');
    } else {
        res.send('Please login to view this page!');
    }
    res.end();
});

//LOG OUT 
router.post('/logout', (req, res) => {
  req.logOut();
  res.redirect("/"); // Redirige al usuario a la página principal o la ruta correcta de login
});

  
//  router.post('/admin/login', adminController.login);

//  router.post('/admin/create', bulkCreateProducts);

module.exports = router;