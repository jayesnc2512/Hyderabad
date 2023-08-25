import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: [20, "Name cannot be more than 20 characters"],
    },
    file: {
        type: String,
        required: [true, "{Please provide a file"],
    },
    userId: {
        type: String,
        required: true,
    },
    collectionId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});
export default mongoose.model('reports', reportSchema);