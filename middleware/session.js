const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const { usersModel } = require("../models/nosql/users");

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, "NOT_TOKEN", 401);
      return;
    }
    const token = req.headers.authorization.split(" ").pop(); //divido el token de la palabra bearer
    const dataToken = await verifyToken(token); //verificar la data del token
    //asegurar que existe id
    if (!dataToken._id) {
      handleHttpError(res, "ERROR_ID_TOKEN", 401);
      return;
    }

    //Ver quien se logea
    const user = await usersModel.findById(dataToken._id);
    req.user = user;

    next();
  } catch (e) {
    handleHttpError(res, "NOT_SESSION");
  }
};

module.exports = authMiddleware;
