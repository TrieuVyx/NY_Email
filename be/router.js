//su dung router
const HomeRouter = require('./routers/homeRouter')
const UserRouter = require('./routers/userRouter')
const path = require("path")

// dieu huong page
function routers(app) {
    uses(app)
    // handlebars(app)   
}

//su dung router 
function uses(app) {
    app.use('/users', UserRouter)
    app.use('/', HomeRouter)
}

//su dung view page
// function handlebars (app){
//     app.engine("hbs", handlebar.engine({
//         defaultLayout: "main",
//         extname: ".hbs",
//         helpers: {
//             sum: (a, b) => a + b,
//           }
//       }));
//     app.set('view engine', "hbs")
//     app.set('views', path.join(__dirname, "views"))
//     console.log(__dirname)
// }

module.exports = routers