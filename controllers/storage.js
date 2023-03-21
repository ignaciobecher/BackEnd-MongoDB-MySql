//FORMA CORRECTA DE IMPORTAR MODELO
const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};
const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await storageModel.findById({ _id: id });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

const createItem = async (req, res) => {
  try {
    const { body, file } = req; //cuando la propiedad se llama como la variable, aplico desestructuracion
    console.log(file);
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };

    const data = await storageModel.create(fileData);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEM");
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const datafile = await storageModel.findById({ _id: id });
    const { filename } = datafile;
    const filePath = `${MEDIA_PATH}/${filename}`;
    fs.unlinkSync(filepath);
    const data = { filepath, daleted: 1 };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

module.exports = { getItems, getItem, createItem, deleteItem };
