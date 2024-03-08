import express from 'express'
import StaffController from '../controllers/StaffController'
const router = express.Router()
router.get('/allStaff', StaffController.getStaffDetails);
router.post('/addNewStaff', StaffController.AddStaffDetails)

export default router;