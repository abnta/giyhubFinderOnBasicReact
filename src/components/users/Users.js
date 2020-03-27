import React, { useContext } from "react";
import UserItem from "./UsersItem";
import Spinner from "./../layout/Spinner";
import PropTypes from 'prop-types';
import GithubContext from './../../context/github/githubContext'

const Users = (props) => {
  const githubContext = useContext(GithubContext)
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
  };

  if (githubContext.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {githubContext.users.map(user => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

export default Users;
