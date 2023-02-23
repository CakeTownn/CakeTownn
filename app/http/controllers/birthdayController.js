//const Menu = require('../../models/menu')
function birthdayController() {
    return {
        //async with below line
         index(req, res) {
            //const cakes = await Menu.find()
            //return res.render('index', {cakes : cakes})
            res.render('birthday')
        }
    }
}

module.exports = birthdayController