import React from "react";

class AddFishForm extends React.Component {
  createFish = this.createFish.bind(this);

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish(e) {
    //stop the form from submitting
    e.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    this.props.addFish(fish);
    //refresh the form
    e.target.reset();
  }

  render() {
    return (
      <div>
        <form className="fish-edit" onSubmit={this.createFish}>
          <input
            name="name"
            ref={this.nameRef}
            type="text"
            placeholder="Name"
          />
          <input
            name="price"
            ref={this.priceRef}
            type="text"
            placeholder="Price"
          />
          <select
            name="status"
            ref={this.statusRef}
            type="text"
            placeholder="Status"
          >
            <option value="available">Fresh!</option>
            <option value="unavalable">Sold Out!</option>
          </select>
          <textarea name="desc" ref={this.descRef} placeholder="Desc" />
          <input
            name="image"
            ref={this.imageRef}
            type="text"
            placeholder="Image"
          />
          <button type="submit">+ Add Fish</button>
        </form>
      </div>
    );
  }
}
export default AddFishForm;
