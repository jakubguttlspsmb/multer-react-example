const express = require("express");
const router = express.Router();
const uploadsController = require("../controllers/uploads");

router.get("/", uploadsController.getUploads);
router.get("/:id", uploadsController.getUpload);
router.post("/", uploadsController.postUpload);

module.exports = router;