const express = require("express");
const fs = require("fs");
const router = express.Router();
const PATH_ROUTES = __dirname; //ruta absoluta c/usuarios/documentos etc
//esta funcion remueve el .js de los archivos para poder usar los nombres como rutas dinamicas
const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};
//aca hago uso de las rutas
fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file); //va a recorrer los archivos y ejecutando
  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`)); //localhost:3001/api/${name}
  }
});
module.exports = router;
