import upload from "../middlewares/multer.js" ;
import { delFile, openFile } from "../controllers/previewAndDel.js";
import {
    getCollections,
    addCollection,
    delCollection } from "../controllers/collections.js";
import express from 'express';
import {
    getItems, addItem, downloadFile
} from '../controllers/items.js';
const router = express.Router();

router.route("/get/:Uid/:Hid").get(getItems)
router.route("/:Uid/:Hid").post(upload.single("file"), addItem);
router.route("/download/:id").get(downloadFile);
router.route("/delete/:id").delete(delFile);
router.route("/preview/:id").get(openFile);

router.route("/collection/get/:Uid").get(getCollections)
router.route("/collection/new/:Uid").post(addCollection)
router.route("/collection/delete/:id").delete(delCollection)

export default router;