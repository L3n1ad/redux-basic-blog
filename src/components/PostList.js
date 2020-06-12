import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

const PostList = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return <div>I am POST LIST</div>;
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

// even if we don't have a state we need pass in something as a first argument for connect
export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList);
