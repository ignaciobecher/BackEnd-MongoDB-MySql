const { encrypt, compare } = require("../utils/handlePassword");
const usersModel = require("../models/nosql/users");
const { tokenSign } = require("../utils/handleJwt");

const registerController = async (req, res) => {
  const { name, age, email, password } = req.body;
  const passwordHash = await encrypt(password);
  const body = { name, age, email, password: passwordHash };
  const dataUser = await usersModel.create(body);
  dataUser.set("password", undefined, { strict: false }); //con esta propiedad, oculto la password al crearla
  const data = {
    token: await tokenSign(dataUser),
    user: dataUser,
  };

  res.json({ data });
};

//Controlador para logear
const loginController = async (req, res) => {
  const user = await usersModel //hago la consulta en el modelo
    .findOne({ email: req.body.email }) //encuentra coincidencia en la bd segun el mail
    .select("password name role email"); //traeme de la bd todos los campos
  if (!user) {
    //si no existe usuario
    console.log("Usuario no encontrado");
  }
  const plainPassword = req.body.password; //contraseña plana
  const hashPassword = user.get("password"); //accedo a la contraseña hasheada
  const check = await compare(plainPassword, hashPassword); //compraro las contras
  if (!check) {
    return null;
  }
  user.set("password", undefined, { strict: false });
  const data = {
    token: await tokenSign(user),
    user,
  };
  res.send({ data });
};

module.exports = { registerController, loginController };
