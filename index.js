const yargs = require('yargs')

const note = require('./notes.js')

// customizing yargs version
yargs.version ('1.1.0')

// Create Note Command
yargs.command({
    command:'create',
    description:'Create Note Command!',
    builder:{
        title:{
            describe:'Note title',
            demandOption:'true',
            type:'string'
        },
        body:{
            description:'Note body',
            demandOption:'true',
            type:'string'
           },
    },
    handler(argv){ 
          note.createNote(argv.title, argv.body);
    }
})

// Read Note Command
yargs.command({
    command:'read',
    description:'Read Note Command!',
    builder:{
        title:{
            describe:'Note title',
            demandOption: 'true',
            type:'string'
        }
    },
    handler(argv){
        note.readNote(argv.title);
    },
})

// Update Note Command!
yargs.command({
    command:'update',
    description:'Update Note Command!',
    builder:{
        title:{
            describe:'Note title',
            demandOption: 'true',
            type:'string'
        },
        updatedTitle:{
            describe:'Updated Note title',
            demandOption: 'true',
            type:'string'
        }
    },
    handler(argv){
        note.updateNote(argv.title, argv.updatedTitle);
    },
})

// Delete Note Command
yargs.command({
    command:'delete',
    description:'Delete Note Command!',
    builder:{
        title:{
            describe:'Note title',
            demandOption: 'true',
            type:'string'
        }
    },
    handler(argv){
        note.deleteNote(argv.title)
    }
})

// list Note Command
yargs.command({
    command:'list',
    description:'List Node Command!',
    handler(){
        note.listNotes();
    }
})

yargs.parse();
