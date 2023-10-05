const express = require('express');
const { requiresAuth } = require('express-openid-connect');

const router = express.Router();

router.get('/', requiresAuth(), (req, res) => {
  req.logout(); // Realiza el logout

  // Redirige al usuario a la página de inicio u otra página deseada
  res.redirect('/');
});
router.post('/', requiresAuth(), (req, res) => {
    req.logOut();
  
    // Aquí puedes realizar cualquier otra acción adicional que desees antes de redirigir al usuario.
    // Por ejemplo, configurar una bandera para forzar el inicio de sesión.
    // forceLogin = true;
  
    res.redirect("/");
  });
  
module.exports = router;