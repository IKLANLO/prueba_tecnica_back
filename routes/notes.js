const express = require('express')
const router = express.Router()
const NoteController = require('../controllers/NoteController')

// Routes
router.post('/save', NoteController.saveNote)
router.get('/read', NoteController.readNote)
router.delete('/delete', NoteController.deleteNote)

module.exports = router
