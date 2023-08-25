import Item from "../models/reportModel.js";
import path from "path";
import asyncWrapper from '../middlewares/asyncWrapper.js';

const getItems = async (req, res) => {
        const { Uid,Hid} = req.params;
        const items = await Item.find({userId:Uid, collectionId:Hid});
        res.status(201).send({ success: true, message: "success", items });
};

const addItem = asyncWrapper(async (req, res) => {
    const { Uid, Hid } = req.params;
    const { name,date } = req.body;
    const file = req.file.path;
    const item = await Item.create({ name: name, date:date, userId: Uid, collectionId: Hid, file:file });
    res.status(201).json({ item });
});




const downloadFile = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const item = await Item.findById(id);
    if (!item) {
        return (new Error("NO item found"));
    }
    const file = item.file;
    const filePath = path.join(`./${file}`);
    res.download(filePath);
});


export  {
    getItems,
    addItem,
    downloadFile,
};
