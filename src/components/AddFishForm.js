import React from "react";
import { DH_NOT_SUITABLE_GENERATOR } from "constants";

class AddFishForm extends React.Component {
  constructor(props) {
    super(props);
    this.addFishForm = this.addFishForm.bind(this);
    this.state = {
      formList: []
    };
  }

  addFishForm() {
    console.log("hi");
  }
  render() {
    return (
      <div>
        <form className="fish-edit" onSubmit={this.addFishForm}>
          <input name="name" type="text" placeholder="Name" />
          <input name="price" type="text" placeholder="Price" />
          <select name="status" type="text" placeholder="Status">
            <option value="available">Fresh!</option>
            <option value="unavalable">Sold Out!</option>
          </select>
          <textarea name="desc" placeholder="Desc" />
          <input name="image" type="text" placeholder="Image" />
          <button type="submit">+ Add Fish</button>
        </form>
      </div>
    );
  }
}
export default AddFishForm;
