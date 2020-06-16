import React, { useEffect } from "react";
import { connect } from "react-redux";

const UserHeader = ({ user }) => {
  if (!user) {
    return <div>Loading...</div>;
  }

  return <div className="header">{user.name}</div>;
};

// It can be called with a second argument as ownProps which will get all the props available to this component
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
