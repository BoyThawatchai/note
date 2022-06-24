import React, {useState} from 'react';
import './App.css';

const startNote = {
  content: "",
  author: ""
}

function App() {

  //State
  const [note, setNote] = useState(startNote);

  const [allNotes, setAllNotes] = useState([])

  //FUnction
  function onNoteValueChange (event) {
    const {name, value} = event.target
    setNote((prevNote) => {
      return {
        ...prevNote, [name]:value
      }
    });
  } 

  function onNoteSubmit(event) {
    event.preventDefault()

    setAllNotes((prevAllNotes) => {
      const newNote = {...note}
      newNote.id = Date.now().toString();
      return [newNote, ...prevAllNotes]
    })

    setNote(startNote)
    
  }

  function onNoteDelete(noteId) {
    console.log(noteId)
    setAllNotes( (prevAllNotes) => {
        return prevAllNotes.filter(theNote => theNote.id !== noteId
        )
    })
  }

  //Elements
  const noteElements = allNotes.map((theNote) => {
    return (
      <div className='app-note' key={theNote.id}>
      <p>{theNote.content}</p>
      <h5>{theNote.author}</h5>
      <p>
        <a>Edit</a>
        <span> | </span>
        <a onClick={() => {onNoteDelete(theNote.id)}}>Delete</a>
      </p>
    </div>

    )
    
  })

  return (
    // <div className="App">
    // </div>
    <section className='app-section'>
      <div className='app-container'>
        <h3> test</h3>
        <form onSubmit={onNoteSubmit}>
        <p>
          <textarea rows={3} placeholder='บันทึกความในใจ' name="content" value={note.content} onChange={onNoteValueChange}
          />
        </p>
        <p>
          <input type="text" placeholder='ลงชื่อ' name='author' value={note.author} onChange={onNoteValueChange}
          />
        </p>
        <p><button type='submit'>เพิ่มไปเลยสิค่ะที่รัก</button></p>
        </form>
      </div>
      <div className='app-notes'>
        {noteElements}
      </div>
    </section>
  );
}

export default App;
