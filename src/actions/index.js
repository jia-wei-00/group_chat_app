import { auth, provider, storage } from "../firebase";
import db from "../firebase";
import { SET_USER, SET_LOADING_STATUS, GET_CHATS } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export const getChats = (payload) => ({
  type: GET_CHATS,
  payload: payload,
});

export function signInApi() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export function postChatAPI(payload) {
  return (dispatch) => {
    db.collection("chat_history").add({
      actor: {
        id: payload.user.uid,
        name: payload.user.displayName,
        date: payload.timestamp,
        image: payload.user.photoURL,
      },
      content: payload.content,
    });
  };
}

export function getChatsAPI() {
  return (dispatch) => {
    let payload;

    db.collection("chat_history")
      .orderBy("actor.date", "asc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        dispatch(getChats(payload));
      });
  };
}
