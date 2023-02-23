const User = require('../../models/user')
const bcrypt = require('bcrypt')
function authController() {
    return {
        login(req, res) {
            res.render('auth/login')
        },
        register(req, res) {
            res.render('auth/register')
        }
        //,
        //async postRegister(req, res) {
            //const {name, email, password } = req.body
            //Validate request
            /*if(!name || !email || !password) {
                req.flash('error','All fields are required')
                return res.redirect('/register')
            }*/
            //Hash password
            /*const hashedPassword = await bcrypt.hash(password, 10)
            //Creat a user
            const user = new User({
                name,
                email,
                password: hashedPassword
            })

            user.save().then((user)=>{
                return res.redirect('/')
            }).catch(err=>{

            })*/

           // console.log(req.body)
        //}
    }
}

module.exports = authController