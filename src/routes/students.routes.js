import {Router} from 'express'
const router = Router()

import * as studentsController from '../controllers/students.controller'

router.post('/', studentsController.createStudent)
router.get('/', studentsController.getStudents)
router.get('/:studentId', studentsController.getStudentById)
router.put('/:studentId', studentsController.updateStudentById)
router.delete('/:studentId', studentsController.deleteStudentById)

export default router;