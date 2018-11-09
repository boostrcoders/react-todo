import React, { Component } from "react";
import Note from "./component/Note";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: "",
      notes: [],
      check: true
    };
  }

  updateNoteText(noteText) {
    this.setState({ noteText: noteText.target.value });
  }

  addNote() {
    if (this.state.noteText === "") {
      return;
    }

    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: "" });
    this.textInput.focus();
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.addNote();
    }
  };

  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr });
  }

  checkNote = () => {
    if (this.state.name === false) {
      this.setState({ check: true });
      console.log("test");
    } else {
      this.setState({ check: false });
    }
  };
  render() {
    let notes = this.state.notes.map((val, key) => {
      return (
        <Note
          name={this.state.check}
          key={key}
          text={val}
          deleteMethod={() => this.deleteNote(key)}
          checkNote={() => this.checkNote()}
        />
      );
    });
    return (
      <div className="container">
        <div className="header"> My To Do List</div>
        {notes}
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="btn">
          {/* onClick={this.addNote.bind(this)} */}
        </label>
        <input
          type="text"
          placeholder="Input task here..."
          ref={input => {
            this.textInput = input;
          }}
          className="textInput"
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default App;
