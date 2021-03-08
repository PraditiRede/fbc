const router = require("express").Router()

const handle = require("../handlers/auth");

router.get("/register",handle.register)
router.post("/login",handle.login)

module.exports = router