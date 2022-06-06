import { SET_LOADING_STATUS, GET_CHATS } from "../actions/actionType";

export const initState = {
  chats: [],
  loading: false,
};

const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    case GET_CHATS:
      return {
        ...state,
        chats: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
