import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const posts = this.props.posts.map(x => (
      <div key={x.id}>
        <h3>{x.title}</h3>
        <p>{x.body}</p>
      </div>
    ));

    return (
      <div>
        <hr />
        <h1>Posts</h1>
        <hr />
        {posts}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.array,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
