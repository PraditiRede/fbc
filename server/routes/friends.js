const router = require("express").Router();

const handle = require("../handlers");

router.post("/add", handle.addFriend).delete("/remove", handle.removeFriend);

module.exports = router;
