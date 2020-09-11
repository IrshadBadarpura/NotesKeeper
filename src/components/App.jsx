import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { createNotEmittedStatement } from "typescript";

function App() {

  const [renderNote, setRenderNote] = useState([]);
  function addNote(note){
    setRenderNote(prevNotes =>{
      return [...prevNotes, note];
    })
  }

  function deleteNote(id){
    setRenderNote(prevNotes=>{
     return prevNotes.filter((noteItem, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd = {addNote}
      />
      {renderNote.map((noteItem, index)=>{
        return <Note 
        onDelete = {deleteNote}
        key= {index}
        id= {index}
        title={noteItem.title} content ={noteItem.content}/>
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
