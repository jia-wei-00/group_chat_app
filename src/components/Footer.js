import React, { useState } from "react";
import styled from "styled-components";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { postChatAPI } from "../actions";
import { connect } from "react-redux";
import firebase from "firebase/compat/app";

const Footer = (props) => {
  const [input, setInput] = useState("");

  const postChatFunction = (e) => {
    e.preventDefault();

    const payload = {
      user: props.user,
      content: input,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    props.postChat(payload);
    reset(e);
  };

  const reset = (e) => {
    setInput("");
  };

  return (
    <FooterContainer>
      <FooterContent>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          type="text"
        />
        <button
          type="submit"
          disabled={!input ? true : false}
          onClick={(event) => postChatFunction(event)}
        >
          <SendRoundedIcon />
        </button>
      </FooterContent>
    </FooterContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postChat: (payload) => dispatch(postChatAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

const FooterContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  backdrop-filter: blur(15px);
  border: 0;
  width: 100%;
`;

const FooterContent = styled.form`
  margin: 10px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    border-radius: 25px;
    padding: 0 15px;
    outline: none;
    border: none;
    flex: 1;
    height: 100%;
  }

  & > button {
    background-color: white;
    border-radius: 25px;
    margin-left: 5px;
    border: none;
    display: flex;
    cursor: pointer;
    color: #89c4f4;

    & > :first-child {
      font-size: 30px;
      padding: 5px;
    }

    &:hover {
      background-color: #89c4f4;
      color: white;
    }
  }
`;
