const fs = require("fs");
const path = require("path");

function filterByQuery(query, notesArray) {
  let filteredResults = notesArray;

  if (query.title) {
    filteredResults = filteredResults.filter(note => note.title === query.title);
  }

  return filteredResults;
}

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}

function createNewNote(body, notesArray) {
  const note = body;
  // our function's main code will go here!
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  // return finished code to post route for response
  return body;
}

function validateNote(note) {
  if (!note.title) {
    return false;
  }
  if (!note.text) {
    return false;
  }
  return true;
}

module.exports = {
  filterByQuery,
  findById,
  createNewNote,
  validateNote
};