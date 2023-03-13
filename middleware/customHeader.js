const customHeader = (req, res, next) => {
  try {
    const apyKey = req.headers.api_key;
    if (apyKey === "Ignacio") {
      next();
    } else {
      res.status(403);
      res.send({ error: "api no coincide" });
    }
  } catch (error) {
    res.status(403);
    res.send({ error: "ALGO OCURRIO EN EL CUSTOM HEADER" });
  }
};

module.exports = customHeader;
