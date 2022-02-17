import "./App.css";
import React, { useEffect } from "react";
import IdCard from "./idcard";
import MainBar from "./mainbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployee from "./addemployee";
import { useDispatch, useSelector } from "react-redux";
import { uploadList, fetchUserList } from "./store";

function App() {
  const userList = useSelector((state) => {
    return state.user.userList;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserList());
  }, []);

  const userListTpl =
    userList.length !== 0 ? (
      userList.map((user) => (
        <IdCard
          user={user}
          onClickContratado={(email) => {
            const newList = userList.map((user) =>
              user.email === email
                ? { ...user, contratado: !user.contratado }
                : user
            );
            dispatch(uploadList(newList));
          }}
        />
      ))
    ) : (
      <img src="spinner.gif" alt="loading info" />
    );

  return (
    <Router>
      <MainBar
        total={userList.length}
        contratado={userList.filter((user) => user.contratado).length}
      />
      <div className="userList">
        <Routes>
          <Route path="/" element={userListTpl} />
          <Route path="/add" element={<AddEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
