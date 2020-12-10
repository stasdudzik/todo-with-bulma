import React from "react";
import shortid from "shortid";

class TodoForm extends React.Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({ text: "" });
  };

  render() {
    return (
      <form
        style={{ display: "flex", alignItems: "center" }}
        onSubmit={this.handleSubmit}
        class="mb-5"
      >
        <input
          class="input is-big"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Add something to do..."
        />
        <button class="button is-success" onClick={this.handleChangeSubmit}>
          add item
        </button>
      </form>
    );
  }
}

export default TodoForm;
