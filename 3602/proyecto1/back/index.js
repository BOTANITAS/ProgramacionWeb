const SaludarRoutes = require("./routes/greet.routes")
const_express = require("express")
const_cors = require("cors")
const PORT = 3000


const app = express ()

//Middlewares 
app.use(express.json())
app.use(cors())

//Rutas
app.use("/saludar", SaludarRoutes)
app.use("/despedir", DespedirRoutes)

app.listen (PORT, ()=> console.log(`server running in http://localgost:{$PORT}`));