//FORMA CORRECTA DE IMPORTAR MODELO
const { tracksModel } = require("../models/nosql/tracks");

const getItems = async (req, res) => {
  const data = await tracksModel.find({});
  res.send({ data });
};
const getItem = (req, res) => {};

const createItem = async (req, res) => {
  const { body } = req; //cuando la propiedad se llama como la variable, aplico desestructuracion
  console.log(body);
  const data = await tracksModel.create(body);
  res.send({ data });
};
const updateItem = (req, res) => {};
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
