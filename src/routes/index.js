import express from 'express'
import StudentRoute from './StudentRoute'
import DepartmentRoute from './DepartmentRoute'
import StaffRoute from './StaffRoute'
const routes = express()

routes.use('/students', StudentRoute)
routes.use('/departments', DepartmentRoute)
routes.use('/staffs', StaffRoute)

export default routes