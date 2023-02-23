//const Menu = require('../../models/menu')
function occationController() {
    return {
        //async with below line
         index(req, res) {
            //const cakes = await Menu.find()
            //return res.render('index', {cakes : cakes})
            res.render('occation')
        }
    }
}

module.exports = occationController