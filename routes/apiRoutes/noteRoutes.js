const router = require('express').Router();
const notesJSON = require('../../db/db.json');
const notes = notesJSON.notes;
const { updateNotes, createNewNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();
  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  // loops through each note obj, if note is clicked for deletion
  // the note is spliced from the notes array
  notes.forEach((note, i) =>{
    if (note.id.includes(req.params.id)){ 
      notes.splice(i, 1);       
    }
  });
  // overwrites JSON file with spliced notes array
  updateNotes(notes);
  res.json(notes);
});
module.exports = router;