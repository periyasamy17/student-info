import mongoose from "mongoose";

const StaffSchema = mongoose.Schema({
    name: {type: String, default: null},
    department: {type: String, default: null},
    subject: {type: String, default: null}
});

const staffModel = mongoose.model('staff', StaffSchema);
export default staffModel;