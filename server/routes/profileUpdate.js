const router = require("express").Router();

const handle = require("../handlers");

router.get("/:id", handle.profile);
router.post("/about", handle.updateAbout);
router.post("/password", handle.updatePassword);
router.post("/currentBook", handle.updateCurrentBook);
router.post("/email", handle.updateEmail);

module.exports = router;
