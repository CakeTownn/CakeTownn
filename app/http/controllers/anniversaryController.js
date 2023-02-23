//const Menu = require('../../models/menu')
function anniversaryController() {
    return {
        //async with below line
         index(req, res) {
            //const cakes = await Menu.find()
            //return res.render('index', {cakes : cakes})
            res.render('anniversary')
        }
    }
}

module.exports = anniversaryController