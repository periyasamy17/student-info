import staffModel from "../models/staffModal";

const AddStaffDetails = (req, res) => {
    const staffObj = req.body;
    const model = staffModel.create(staffObj);
    model.then(result => {
        res.send({result, message: "Staff dtails added successfully"})
    }).catch(err=>{
        res.send({ErrorMessage: 'err'});
    })
}

const getStaffDetails = (req, res) => {
    staffModel.find({}).then(result => res.send(result)).catch(err => res.send(err));
}

export default {getStaffDetails, AddStaffDetails}