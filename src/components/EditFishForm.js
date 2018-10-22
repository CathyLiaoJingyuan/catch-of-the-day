import React from "react";

class EditFishForm extends React.Component {
  //   this.printFish=this.printFish.bind(this)

  handleChange = event => {
    const updateFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updateFish);
    console.log("edit" + updateFish.name);
  };

  render() {
    return (
      <div>
        <ul>
          {
            <div className="fish-edit">
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.props.fish.name}
              />
              <input
                type="text"
                name="desc"
                onChange={this.handleChange}
                value={this.props.fish.desc}
              />
              <select
                type="text"
                name="status"
                onChange={this.handleChange}
                value={this.props.fish.status}
              >
                <option value="available">Fresh!</option>
                <option value="unavalable">Sold Out!</option>
              </select>
              <textarea
                type="text"
                name="desc"
                onChange={this.handleChange}
                value={this.props.fish.desc}
              />
              <input
                type="text"
                name="image"
                onChange={this.handleChange}
                value={this.props.fish.image}
              />
              {/* <div ca>{this.props.fishes[key].name}</div> */}
              <button onClick={() => this.props.deleteFish(this.props.index)}>
                Remove Fish
              </button>
            </div>
          }
        </ul>
      </div>
    );
  }
}
export default EditFishForm;
