import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const post = {
      id: 1,
      title: this.state.title,
      body: this.state.body
    };

    this.props.addPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Body:</label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func
};

const mapStateToProps = state => ({
  addPost: state.addPost
});

export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
