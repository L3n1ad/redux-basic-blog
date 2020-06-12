import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = ({ userId, fetchUser }) => {
  useEffect(() => {
    fetchUser(userId);
  }, []);

  return <div>User Header {userId}</div>;
};

export default connect(null, { fetchUser })(UserHeader);
