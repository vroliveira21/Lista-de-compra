const produtoController = {
    index:(req, res)=>{
        return res.render("produtos", {h3: "categorias de produtos"})
    }
}

module.exports = produtoController;
