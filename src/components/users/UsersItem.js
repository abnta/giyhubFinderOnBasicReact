import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const UsersItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" alt="" style={{ width: "60px" }} />
      <h3>{login}</h3>
      <div>
        <Link className="btn btn-dark btn-sm my-1" to={`/user/${login}`}>
          More
        </Link>
      </div>
    </div>
  );
};

UsersItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UsersItem;
