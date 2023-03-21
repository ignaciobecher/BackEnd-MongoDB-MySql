//FORMA CORRECTA DE IMPORTAR MODELO
const { matchedData } = require("express-validator");
const { tracksModel } = require("../models/nosql/tracks");
const { handleHttpError } = require("../utils/handleError");
const mongoose = require("mongoose");

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};
const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await tracksModel.findById(mongoose.Types.ObjectId(id));
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEM");
  }
};

const createItem = async (req, res) => {
  try {
    const { body } = req;

    const data = await tracksModel.create(body);
    res.send({ data, body });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};
const updateItem = async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const data = await tracksModel.findOneAndUpdate(
      mongoose.Types.ObjectId(id),
      body
    );
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_ITEMS");
  }
};

//ELimincacion total
// const deleteItem = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = await tracksModel.deleteOne({ _id: id });
//     res.send({ data });
//     console.log("Elemento eliminado");
//   } catch (e) {
//     handleHttpError(res, "ERROR_DELETE_ITEM");
//   }
// };

//Elimincacion logica
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await tracksModel.delete({ _id: id });
    res.send({ data });
    console.log("Elemento eliminado logicamente");
  } catch (e) {
    handleHttpError(res, "ERROR_DELETE_ITEM");
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
