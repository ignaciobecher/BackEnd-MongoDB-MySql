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
  const { id } = req.params;
  const data = await tracksModel.findById(mongoose.Types.ObjectId(id));
  res.send({ data });
};

const createItem = async (req, res) => {
  try {
    const { body } = req;
    // const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data, body });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};
const updateItem = async (req, res) => {};

const deleteItem = async (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
