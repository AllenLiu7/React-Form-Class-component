import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    submitting: false,
    name: "undefined",
    fruits: "undefined",
    count: "undefined"
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitting: true });

    setTimeout(() => {
      this.setState({ submitting: false });
    }, 3000);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { submitting, name, count, fruits } = this.state;

    return (
      <div className="wrapper">
        <h1>Hello CodeSandbox</h1>
        <form>
          <fieldset>
            <label>
              {submitting && (
                <div>
                  You are submitting
                  <br /> name: {name}
                  <br />
                  count: {count}
                  <br />
                  fruits: {fruits}
                </div>
              )}
              <p>name:</p>
              <input
                name="name"
                value={name}
                type="text"
                onChange={this.handleChange}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p>Fruits</p>
              <select name="fruits" onChange={this.handleChange}>
                <option value="apple">Apple</option>
                <option value="Pear">Pear</option>
                <option value="Orange">Orange</option>
                <option value="Berry">Berry</option>
              </select>
            </label>
            <label>
              <p>Count</p>
              <input
                name="count"
                type="number"
                step="1"
                onChange={this.handleChange}
              />
            </label>
            <label>
              <p>Gift Wrap</p>
              <input type="checkbox" onChange={this.handleChange} />
            </label>
          </fieldset>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
