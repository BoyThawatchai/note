import React, {useState} from 'react';
import './App.css';

function App() {
  const [noteConten, setNoteContent] = useState('');


  return (
    // <div className="App">
    // </div>
    <section className='app-section'>
      <div className='app-container'>
        <h3> test</h3>
        <p>
          <input type="text" placeholder='บันทึกความในใจ' value={noteConten} onChange={(event) => {
            setNoteContent(event.target.value)}}
          />
        </p>
        
      </div>

    </section>
  );
}

export default App;
