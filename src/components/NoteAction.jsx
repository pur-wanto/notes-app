import React from "react";

function NoteAction({ id, onDelete, onArchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>

      {/* Masih dalam tahap pengembangan */}
      {/* <button className="note-item__archive-button" onClick={() => onArchive(id)} >Arsipkan</button> */}
    </div>
  )
}

export default NoteAction;