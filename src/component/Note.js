import React, { Component } from "react";

class Note extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // constructor() {
  //   super();
  //   this.checkNote = this.checkNote.bind(this);
  // }

  render() {
    let classes = "note";
    classes = this.props.name === false ? "note" : "note done";
    console.log(this.props.name);
    return (
      <div className={classes} onClick={this.props.checkNote}>
        <div>{this.props.text}</div>
        <span
          className="delNote"
          title="delete"
          onClick={this.props.deleteMethod}
        >
          &#10005;
        </span>
      </div>
    );
  }
}

export default Note;
