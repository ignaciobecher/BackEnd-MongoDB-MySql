const handleHttpError = (res, message = "Algo sucedio", code = 4003) => {
  res.status(code);
  res.send({ error: message });
};
module.exports = { handleHttpError };
