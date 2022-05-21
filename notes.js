const chalk = require('chalk');
const fs = require('fs');

const createNote = (title, body) =>{
  const notes = loadNotes(); 
  const duplicateNote = notes.find((note)=> note.title === title)
  if(!duplicateNote){
    notes.push({
        'title':title,
        'body': body
    })
    saveNotes(notes);
    console.log(chalk.bgGreen('Note added!'));
  } else{
      console.log(chalk.bgRed('Note already present!'));
  }
}

const readNote = (title) =>{
    const notes = loadNotes();
    const isNote = notes.find((note)=> note.title === title);
    if(isNote){
        console.log(chalk.bgCyan(title));
        console.log(isNote.body);
    } else{
        console.log(chalk.bgRed("No note find"));
    }
}

const updateNote = (title, updatedTitle)=>{
    const notes = loadNotes();
    const note = notes.find((note)=>note.title === title);
    if(note){
        note.title = updatedTitle;
        console.log(chalk.bgGreen("Note is updated"));
        console.log(chalk.bgCyan(title));
        console.log(note.body);
    }
    else{
        console.log(chalk.bgRed("Note not present!"));
    }
}

const deleteNote = (title) =>{
    let notes = loadNotes();
    let notesToKeep = notes.filter((note)=> note.title!== title)
    if(notesToKeep.length !== notes.length){
        console.log(chalk.bgGreen('Note removed!'))
        saveNotes(notesToKeep);
    }else{
        console.log(chalk.bgRed('No note found!'));
    }
}

const listNotes = ()=>{
    console.log(chalk.bgBlue("Your notes"));
    const notes = loadNotes();
    notes.forEach((note)=>{
        console.log(note.title);
    })
}

const loadNotes = ()=>{
    try{
    const bufferData = fs.readFileSync('Notes.json');
    const jsonData = bufferData.toString();
    const parseData = JSON.parse(jsonData);
    return parseData;
    } catch(e){
    return [];
    }
}

const saveNotes = (notes) =>{
    const jsonData = JSON.stringify(notes);
    fs.writeFileSync('Notes.json', jsonData);
  }
 
module.exports ={
    createNote: createNote,
    readNote: readNote,
    updateNote: updateNote,
    deleteNote: deleteNote,
    listNotes: listNotes
}

