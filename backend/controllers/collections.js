import Collection from '../models/collection4Report.js';

// router.route("/collection/").get(getCollections)
// router.route("/collection/new/").post(addCollection)
// router.route("/collectoin/delete/:id").delete(delCollection)

const getCollections = async(req,res) => {
        const { Uid } = req.params;
        const collections = await Collection.find({userId:Uid});
        res.status(201).send({ success: true, message: "success", collections });
    
}

const addCollection = async (req, res) => {
    const { Uid } = req.params;
    const { name, date } = req.body;
    const  collections= await Collection.create({ name, userId: Uid, date });
    res.status(201).send({
        success: true,
        message: "collection added",
        collections,
    });
}

const delCollection = async (req, res) => {
    const { id } = req.params;
    const collection= await Collection.deleteOne({ _id: id });
    res.status(201).send({
        success: true,
        message: "collection deleted",
        collection,
    });
}

export{
    getCollections,
    addCollection,
    delCollection,
}