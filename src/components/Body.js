import React, { useEffect } from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import { getChatsAPI } from "../actions";

const Body = (props) => {
  useEffect(() => {
    props.getChats();
  }, []);

  return (
    <BodyContainer>
      {props.chats.length > 0 &&
        props.chats.map((chats, key) => (
          <ChatBody key={key}>
            {chats.actor.id !== props.user.uid && (
              <Avatar src={chats.actor.image} />
            )}
            <div
              className={`chat__message ${
                chats.actor.id === props.user.uid && "chat__receiver"
              }`}
            >
              <span className="chat__name">{chats.actor.name}</span>
              {chats.content}
              <span className="chat__timestamp">
                {chats.actor.date.toDate().toLocaleDateString()}
              </span>
            </div>
            {chats.actor.id === props.user.uid && (
              <Avatar src={chats.actor.image} />
            )}
          </ChatBody>
        ))}
    </BodyContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    loading: state.chatState.loading,
    chats: state.chatState.chats,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getChats: () => dispatch(getChatsAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);

const BodyContainer = styled.div`
  backdrop-filter: blur(15px);
  border: 0;
  overflow-y: auto;
`;

const ChatBody = styled.div`
  display: flex;
  margin: 20px;

  @media (max-width: 425px) {
    margin: 10px;
  }

  & > .chat__message {
    margin-left: 5px;
    position: relative;
    font-size: 16px;
    padding: 10px;
    width: fit-content;
    border-radius: 10px;
    background-color: #ffffff;
    margin-bottom: 10px;
  }

  .chat__timestamp {
    margin-left: 10px;
    font-size: xx-small;
  }

  .chat__name {
    position: absolute;
    top: -15px;
    font-size: xx-small;
  }

  & > .chat__receiver {
    margin-right: 5px;
    margin-left: auto;
    background-color: #dcf8c6;
  }
`;
