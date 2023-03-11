const multer = require("multer");

//Storage me sirve para configurar donde se va a guardar y modificar nombre de archivo
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../storage`; //estoy definiendo como destino del archivo la carpeta storage
    cb(null, pathStorage); //el callback me pide un error si es que lo hay y el path
  },
  filename: function (req, file, cb) {
    //configurar nombre del archiv, los archivos cambian de nombre para no sobreescribirse
    const ext = file.originalname.split(".").pop(); //con esto separo el nombre de la extension
    const filename = `file-${Date.now()}.${ext}`; //me devuelve el archivo en formato unix y extension
    cb(null, filename);
  },
});

//Middleware de multer
const uploadMiddleware = multer({
  //hago uso de multer
  storage: storage, //en la propiedad storage, le asigno mi storage configurado
});

module.exports = uploadMiddleware;
