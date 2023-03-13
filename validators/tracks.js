const { check } = require("express-validator ");
const validateResults = require("../utils/handleValidator");

const validatorCreateItem = [
  //Valido cada campo del modelo
  check("name").exists().notEmpty(), //compruebo si name existe y si no esta vacio
  check("album").exists().notEmpty(),
  check("cover").exists().notEmpty(),
  check("artist").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duration").exists().notEmpty(),
  check("duration.start").exists().notEmpty(),
  check("duration.end").exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next);
  }, //esto es un handler creado en utils, es una funcion que me da express, ya que al ser un middleware requiere una funcion
];
module.exports = { validatorCreateItem };
