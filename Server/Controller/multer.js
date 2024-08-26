const multer = require('multer');
const path = require('path');

// Configuração do Multer para salvar arquivos na pasta desejada
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../img/produtos')); // Define o caminho onde as imagens serão salvas
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`); // Define o nome do arquivo
    }
});

const upload = multer({ storage: storage });

module.exports = { upload };


