import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import { signOutAPI } from "../actions";

const Header = (props) => {
  return (
    <HeaderContainer>
      <div>
        <Avatar src={props.user.photoURL} />
        <p>{props.user.displayName}</p>
      </div>

      <button onClick={() => props.signOut()}>Logout</button>
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  & > div {
    display: flex;
    align-items: center;

    & > p {
      margin-left: 10px;
    }
  }

  & > button {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
      background: #89c4f4;
    }
  }
`;
