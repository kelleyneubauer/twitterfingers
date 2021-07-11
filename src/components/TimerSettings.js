import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class TimerSettings extends React.Component {
  state = {
    value: "60",
  };

  getValue = (event) => {
    console.log("Event: ", event.target.value);
    this.setState({ value: event.target.value });
  };

  handleSave = () => {
    const value = this.state.value;

    console.log("Value on Save: ", value);
  };

  render() {
    console.log("State: ", this.state);
    return (
      <div>
        <Form.Control as="select" custom onChange={this.getValue.bind(this)}>
          <option value="60">1:00</option>
          <option value="120">2:00</option>
          <option value="180">3:00</option>
          <option value="240">4:00</option>
          <option value="300">5:00</option>
        </Form.Control>
        <>
          <Button className="settings-button" onClick={this.handleSave}>
            Save
          </Button>{" "}
        </>
      </div>
    );
  }
}

export default TimerSettings;
