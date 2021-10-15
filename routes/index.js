const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const cadSuperController = require("../controllers/cadSuperController");
const dadosSuperController = require("../controllers/dadosSuperController");
const cadSucessoController = require("../controllers/cadSucessoController")

module.exports = router;

router.get("/produtos", produtoController.index)
router.get("/cad_super", cadSuperController.cadastroSupermercado)
router.get("/dados_super", dadosSuperController.dadosSupermercado)
router.get("/cad_sucesso", cadSucessoController.cadastroComSucesso)
