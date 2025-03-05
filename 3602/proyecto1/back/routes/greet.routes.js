const { saludarController } = require("../controllers/greet.controllers");

const router =  require("express").Router();


router.get("/, saludarController")
router.get("/saludo-2", saludarController)

module.exports = router