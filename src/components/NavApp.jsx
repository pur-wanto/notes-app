import React from "react";

function NavApp({ onSearch, value }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          value={value}
          onChange={onSearch}
        />
      </div>
    </div>
  )
}

export default NavApp;