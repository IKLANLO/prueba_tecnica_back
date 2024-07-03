const mongoose = require('mongoose')

const NotesSchema = new mongoose.Schema(
  {
    Notas: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Notes = mongoose.model('Notes', NotesSchema)

module.exports = Notes
