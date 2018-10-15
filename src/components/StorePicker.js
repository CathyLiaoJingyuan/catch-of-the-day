import React, { Fragment } from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  constructor(props) {
    super(props);
    this.goToStore = this.goToStore.bind(this);
  }

  myInput = React.createRef();

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store -></button>
        </form>
      </Fragment>
    );
  }

  goToStore(e) {
    // 1. Stop the form from submitting
    e.preventDefault();
    // 2. get text from input
    var storeName = this.myInput.value.defaultValue;
    // 3. change the page to /store/"input"
    this.props.history.push(`/store/${storeName}`);
  }
}

export default StorePicker;
