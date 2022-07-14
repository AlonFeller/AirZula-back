
const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getStayById, getStays, deleteStay, updateStay, addStay} = require('./stay.controller')
const router = express.Router()

router.get('/', getStays)
router.get('/:id', getStayById)
router.put('/:id', requireAuth,  updateStay)
router.post('/',   addStay)
router.delete('/:id',   deleteStay)

module.exports = router