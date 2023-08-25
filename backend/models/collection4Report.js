import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('collections', collectionSchema);