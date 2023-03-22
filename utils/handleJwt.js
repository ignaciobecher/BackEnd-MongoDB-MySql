const jsonwebtoken = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

//Funcion para firmar con token
const tokenSign = async (user) => {
  //le paso el usuario
  const sign = jsonwebtoken.sign(
    {
      _id: user._id, //compruebo que id y role sean los correctos
      role: user.role,
    },
    JWT_SECRET, //paso la llave para firmar
    {
      expiresIn: "2h", //pongo un tiempo de vencimiento del token
    }
  );
  return sign;
};

//Verificar que el token esta firmado por nosotros
const verifyToken = async (tokenJwt) => {
  //paso el token de sesion
  try {
    return jsonwebtoken.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { tokenSign, verifyToken };
