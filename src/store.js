import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";

async function getUserList() {
  return fetch("https://randomuser.me/api/?results=10")
    .then((data) => data.json())
    .then((json) => {
      const userListAux = json.results.map((user) => ({
        avatar: user.picture.large,
        name: user.name.first,
        surname: user.name.last,
        email: user.email,
        phone: user.phone,
        city: user.location.city,
        state: user.location.state,
        contratado: false,
      }));
      return userListAux;
    });
}

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
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: userReducers,
});

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const {
  getUserListStart,
  getUserSuccess,
  getUserFail,
  uploadList,
  addUserToList,
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

const store = configureStore({
  reducer: rootReducer,
});

export {
  getUserListStart,
  getUserSuccess,
  getUserFail,
  uploadList,
  fetchUserList,
  addUserToList,
  store,
};
