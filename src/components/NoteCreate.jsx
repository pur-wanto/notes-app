import React from "react";

class NoteCreate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      words: 50
    }

    this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
    this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeTitleHandler = (event) => {

    const inputTitle = event.target.value
    if (this.countWords(inputTitle) <= 50) {
      this.setState({
        title: inputTitle,
        words: 50 - this.countWords(inputTitle),
      });
    }
  }

  countWords = (text) => {
    return text.trim().length;
  };

  onChangeBodyHandler = (event) => {
    this.setState({ body: event.target.value })
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.add(this.state);
  }

  render() {

    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: {this.state.words}</p>
          <input
            type="text"
            placeholder="Ini adalah judul ..."
            className="note-input__title"
            value={this.state.title}
            onChange={this.onChangeTitleHandler}
            maxLength={50}
            required
          />
          <textarea
            className="note-input__body"
            placeholder="Tulislah catatanmu disini"
            required
            value={this.state.body}
            onChange={this.onChangeBodyHandler}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}

export default NoteCreate;