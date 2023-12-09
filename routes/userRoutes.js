const { Login, Register } = require("../controllers/userController");

const router = require("express").Router();

router.get("/login/", Login);
router.get("/register", Register);

module.exports = router;