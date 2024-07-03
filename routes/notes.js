const express = require('express')
const router = express.Router()
const NoteController = require('../controllers/NoteController')

// Routes
router.post('/', NoteController.saveNote)
router.get('/', NoteController.readNote)
router.delete('/', NoteController.deleteNote)

module.exports = router
