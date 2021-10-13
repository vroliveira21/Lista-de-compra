const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController');
const cadController = require("../controllers/cadSuperController");
const dadosController = require("../controllers/dadosSuperController");
const sucessoController = require("../controllers/cadSucessoController")

module.exports = router;

router.get("/produtos", controller.index)
router.get("/cad_super", cadController.cadastroSupermercado)
router.get("/dados_super", dadosController.dadosSupermercado)
router.get("/cad_sucesso", sucessoController.cadastroComSucesso)
