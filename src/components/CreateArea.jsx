import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(evt){
    const {name, value} = evt.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(evt){
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    })
    evt.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
