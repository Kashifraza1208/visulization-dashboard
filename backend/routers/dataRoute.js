const express = require("express");
const { addData, getData } = require("../controllers/dataContoller");
const router = express.Router();

router.route("/data").post(addData);
router.route("/data").get(getData);

module.exports = router;
