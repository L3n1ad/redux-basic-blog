import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

const PostList = ({ fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  });
  return <div>I am POST LIST</div>;
};

// even if we don't have a state we need pass in something as a first argument for connect
export default connect(null, { fetchPosts: fetchPosts })(PostList);
