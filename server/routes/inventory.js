const router = require("express").Router();

const handle = require("../handlers");

router.post("/addBook", handle.addBook);

module.exports = router;
