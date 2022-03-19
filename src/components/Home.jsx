import React, { Component } from "react";
import Form from "./Form";
import Title from "./Title";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      todoItem: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todoItem !== "") {
      const todoItems = {
        id: Math.random(),
        title: this.state.todoItem,
        complited: false,
      };

      const items = [...this.state.items];
      items.push(todoItems);

      this.setState({
        items,
        todoItem: "",
      });
    } else {
      alert("Masukkan Inputan");
    }
  };

  handleChange = (e) => {
    this.setState({
      todoItem: e.target.value,
    });
  };

  handleDelete = (id) => {
    const items = [...this.state.items];
    const ItemUpdate = items.filter((item) => item.id !== id);

    this.setState({
      items: ItemUpdate,
    });
  };

  render() {
    return (
      <div>
        <Title />

        <Form
          handleDelete={this.handleDelete}
          handleSubmit={this.handleSubmit}
          todoItem={this.state.todoItem}
          handleChange={this.handleChange}
          items={this.state.items}
        />
      </div>
    );
  }
}
export default Home;
