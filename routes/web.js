const authController = require('../app/http/controllers/authController')
const homeController = require('../app/http/controllers/homeController')
const cartController = require('../app/http/controllers/customers/cartController')
const birthdayController = require('../app/http/controllers/birthdayController')
const anniversaryController = require('../app/http/controllers/anniversaryController')
const occationController = require('../app/http/controllers/ocaationController')

function initRoutes(app){
    
    app.get('/', homeController().index )
    app.get('/cart', cartController().index)
    app.get('/login', authController().login)
    app.get('/register', authController().register)
    //app.post('/register', authController().postRegister)
    app.post('/register', async (req, res) => {
        try{
            /*const password = req.body.password;
            const cpassword = req.body.cpassword;

            if(password === cpassword){
                const registerCustomer = new Register({
                    name: req.body.name,
                    email: req.body.email,
                    password: password,
                    cpassword: cpassword 
                })
                const registered = await registerCustomer.save();
                res.status(201).render('/');
            }else{
                res.send("password are not same")
            }*/
            const Cake = new Register({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            const registered = await Cake.save();
            res.status(201).render('/');
            //console.log(req.body.name);
            //res.send(req.body.name);
        }catch(error){
            res.status(400).send(error);
        }
    })
    app.get('/birthday', birthdayController().index)
    app.get('/anniversary', anniversaryController().index)
    app.get('/occation', occationController().index)
}

module.exports = initRoutes