import { createSlice } from "@reduxjs/toolkit";
import { getUserList } from "../api/user";

const initialState = {
  loading: false,
  error: undefined,
  userList: [],
};

const userReducers = {
  getUserListStart: (state) => {
    state.loading = true;
    state.error = null;
  },
  getUserSuccess: (state, action) => {
    const { userList } = action.payload;
    state.userList = userList;
    state.loading = false;
    state.error = null;
  },
  getUserFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  uploadList: (state, action) => {
    state.userList = action.payload;
  },
  addUserToList: (state, action) => {
    state.userList = [action.payload, ...state.userList];
  },
  changeContratado: (state, action) => {
    state.userList = state.userList.map((user) =>
      user.email === action.payload
        ? { ...user, contratado: !user.contratado }
        : user
    );
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: userReducers,
});

const {
  getUserListStart,
  getUserSuccess,
  getUserFail,
  uploadList,
  addUserToList,
  changeContratado,
} = userSlice.actions;

const fetchUserList = () => async (dispatch) => {
  try {
    dispatch(getUserListStart());
    const userList = await getUserList();
    dispatch(getUserSuccess({ userList }));
  } catch (err) {
    dispatch(getUserFail());
  }
};

export {
  userSlice,
  getUserListStart,
  getUserSuccess,
  getUserFail,
  uploadList,
  fetchUserList,
  addUserToList,
  changeContratado,
};
