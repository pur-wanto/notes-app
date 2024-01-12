import React from "react";
import { getInitialData, showFormattedDate } from "../utils";
import NoteItem from "./NoteItem";

function NoteList({ datas, onDelete, onArchive }) {

  if (datas.length > 0) {
    return (
      <div className="notes-list">
        {datas.map(data => {
          return <NoteItem
            key={data.id}
            id={data.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...data}
          />
        })}
      </div>
    )
  } else {
    return (
      <div className="notes-list__empty-message">
        <h1>DATANYA BELUM ADA!!</h1>
      </div>
    )
  }

}

export default NoteList;