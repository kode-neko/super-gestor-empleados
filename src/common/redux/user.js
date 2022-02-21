import { getUserList } from "../api/user";

const initialState = {
  loading: false,
  error: undefined,
  list: [],
};

// Reducers
const userReducers = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case "USER_LIST_START":
      newState = { ...state, loading: true, error: null };
      break;
    case "USER_LIST_SUCCESS":
      newState = { ...state, list: action.payload, error: null };
      break;
    case "USER_LIST_FAIL":
      newState = { ...state, loading: false, error: action.payload };
      break;
    case "UPLOAD_LIST":
      newState = { ...state, list: action.payload };
      break;
    case "ADD_TO_LIST":
      newState = { ...state, list: [action.payload, ...state.list] };
      break;
    case "CHANGE_CONTRATADO":
      const newList = state.list.map((user) =>
        user.email === action.payload
          ? { ...user, contratado: !user.contratado }
          : user
      );
      newState = { ...state, list: newList };
      break;
    default:
      newState = state;
  }
  return newState;
};

// Actions
const userListStart = () => ({
  type: "USER_LIST_START",
});

const userListSuccess = (list) => ({
  type: "USER_LIST_SUCCESS",
  payload: list,
});

const userListFail = (error) => ({
  type: "USER_LIST_FAIL",
  payload: error,
});

const uploadList = (list) => ({
  type: "UPLOAD_LIST",
  payload: list,
});

const addToList = (user) => ({
  type: "ADD_TO_LIST",
  payload: user,
});

const changeContratado = (email) => ({
  type: "CHANGE_CONTRATADO",
  payload: email,
});

const fetchUserList = () => async (dispatch) => {
  try {
    dispatch(userListStart());
    const list = await getUserList();
    dispatch(userListSuccess(list));
  } catch (err) {
    dispatch(userListFail(err));
  }
};

export {
  userReducers,
  userListStart,
  userListSuccess,
  userListFail,
  uploadList,
  addToList,
  changeContratado,
  fetchUserList,
};
