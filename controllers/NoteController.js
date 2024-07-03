require('dotenv').config()
const Notes = require('../models/Notes')

const error500 = () => {
  console.log(error)
  return res
    .status(500)
    .send({ message: 'Por favor hable con el administrador' })
}

const NoteController = {
  async saveNote(req, res) {
    try {
      if (!req.body.Notas)
        return res.status(401).send({ message: 'El texto es obligatorio' })
      const note = await Notes.create(req.body)
      res.status(201).send(note)
    } catch (error) {
      error500()
    }
  },

  async readNote(req, res) {
    try {
      const notas = await Notes.find()
      res.status(200).send(notas)
    } catch (error) {
      error500()
    }
  },

  async deleteNote(req, res) {
    try {
      await Notes.deleteMany()
      res.status(200).send({ message: 'Notas eliminadas correctamente' })
    } catch (error) {
      error500()
    }
  },
}

module.exports = NoteController
