import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Background from "../Assets/background.png";
import LoginPage from "./LoginPage";
import { connect } from "react-redux";
import { signInApi, getUserAuth } from "../actions";

const ChatBoxBody = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <Container>
      <ChatBody>
        {props.user ? (
          <>
            <Header />
            <Body />
            <Footer />
          </>
        ) : (
          <LoginPage />
        )}
      </ChatBody>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0px 74px 4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px 0px 74px 4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 0px 74px 4px rgba(0, 0, 0, 0.75);
  height: 95vh;
  width: 50rem;

  @media (max-width: 768px) {
    width: 90vw;
  }

  & > :nth-child(2) {
    flex: 1;
    background-image: url(${Background});
    background-size: contain;
    background-repeat: repeat;
    background-position: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoxBody);
