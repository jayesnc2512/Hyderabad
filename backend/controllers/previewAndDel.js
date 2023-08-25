import Item from"../models/reportModel.js";
import path from"path";
import fs from'fs';

const delFile = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await Item.findById(id);
        const file = item.file;
        const filePath = path.join(`./${file}`);
        await Item.deleteOne({ _id: id });
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('An error occurred while deleting the file.');
                return;
            }

            res.sendStatus(200); // Sending a success response if the file was deleted successfully
        });
        

    } catch(err) {
        console.log(err);
    }
}
const openFile = async(req, res)=> {
    try {
        const id = req.params.id;
        const item = await Item.findById(id);
        const file = item.file;
        const filePath = path.join(`./${file}`);
        res.status(200).sendFile(filePath);
    } catch (err) {
        console.log(err);
    }
}


export {
    delFile,
    openFile
}