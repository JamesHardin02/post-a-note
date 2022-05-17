const fs = require("fs");
const path = require("path");

function updateNotes(newNotesArr){
  // overwrite the JSON with the spliced notes array
  // which excluded the deleted note
  const notes = newNotesArr;
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes }, null, 2)
  );
}

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  // renames for property name in JSON file when stringified
  const notes = notesArray;
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes }, null, 2)
  );
  // return finished code to post route for response
  return body;
}

module.exports = {
  updateNotes,
  createNewNote
};