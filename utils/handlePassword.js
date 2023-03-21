const bcryptjs = require("bcryptjs");

//Funcion para encriptar
const encrypt = async (passwordPlain) => {
  const hash = await bcryptjs.hash(passwordPlain, 10); //primero paso contra en formato original y 2do es el nivel de encriptado
  return hash;
};

//Funcion para comparar contra en texto plano con la contra encriptada
const compare = async (passwordPlain, hashPassword) => {
  return await bcryptjs.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare };
