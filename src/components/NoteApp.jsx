import React from "react";
import NavApp from "./NavApp";
import NoteList from "./NoteList";
import { getInitialData } from "../utils";
import NoteCreate from "./NoteCreate";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: getInitialData,
      archivedDatas: [],
      searchQuery: '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
    this.onArchiveHandler = this.onAddHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddHandler = ({ title, body }) => {
    this.setState(previousState => {
      return {
        datas: [
          ...previousState.datas,
          {
            id: +new Date(),
            title,
            createdAt: new Date().toISOString(),
            body,
            archived: false
          }
        ]
      }
    })
  }

  onDeleteHandler = (id) => {
    const datas = this.state.datas.filter(data => data.id !== id)
    this.setState({ datas })
  }

  onArchiveHandler = (id) => {
    this.setState((previousState) => {
      const updateDatas = previousState.datas.map(data => {
        if (data.id === id) {
          return {
            ...data,
            archived: true
          }
        }

        return data;
      })

      const archivedData = previousState.datas.find(data => data.id === id)
      return {
        datas: updateDatas.filter(data => !data.archived),
        archivedDatas: [...previousState.archivedDatas, archivedData]
      }
    })
  }

  // Masih tahap pengembangan
  // onSearchHandler(valueInput) {
  //   this.setState({
  //     searchQuery: valueInput,
  //   });
  // }
  onSearchHandler = (event) => {

    this.setState({
      searchQuery: event.target.value
    })
  }

  render() {
    // const filteredNotes = this.state.datas.filter((data) => 
    //     data.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    // )
    return (
      <>
        <NavApp value={this.state.searchQuery} onSearch={this.onSearchHandler} />
        <div className="note-app__body">
          <NoteCreate add={this.onAddHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList
            datas={this.state.datas}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </>
    )
  }
}

export default NoteApp;