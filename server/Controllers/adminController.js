const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../Models/admin');
const auth0 = require('auth0'); // Importa el módulo de autenticación de Auth0

async function login(req, res) {
  const { username, password } = req.body;

  // Verificar si el administrador existe en la base de datos
  const admin = await Admin.findOne({ where: { username } });

  if (!admin) {
    return res.status(404).json({ message: 'Administrador no encontrado' });
  }

  // Verificar la contraseña
  const isPasswordValid = await bcrypt.compare(password, admin.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Contraseña incorrecta' });
  }

  // Generar un token de acceso utilizando Auth0
  const token = generateAccessToken(admin.id); // Llama a la función para generar el token de Auth0

  // Devolver el token y otros datos del administrador si es necesario
  return res.json({ token, admin });
}

// Función para generar un token de acceso utilizando Auth0
function generateAccessToken(userId) {
  const auth0 = require('auth0');

  // Configura Auth0
  const auth0Client = new auth0.AuthenticationClient({
    domain: 'dev-g5p2cfdaidwx2qr2.us.auth0.com', // Reemplaza con tu dominio de Auth0
    clientId: 'ot2kjLYIht8Nmi3jtiSgvXbxpSDNeTww', // Reemplaza con tu ID de cliente de Auth0
    AUTH0_CLIENT_SECRET: 'WJyEHmJHGfZ0uCy9NGSma3vgU5r6QfDh19P5GcvLHpmuF7Ud-_C-lewJVK5PUFZD',

  });

  // Genera un token de acceso
  const token = auth0Client.passwordGrant({
    username: 'your-username', // Reemplaza con el nombre de usuario de Auth0
    password: 'your-password', // Reemplaza con la contraseña de Auth0
    audience: 'your-audience', // Reemplaza con la audiencia de Auth0
  });

  return token.access_token;
}

// Otras funciones del controlador para crear, editar y administrar administradores

module.exports = {
  login,
};