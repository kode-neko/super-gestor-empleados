import "./App.css";
import React, { useEffect } from "react";
import MainBar from "./mainbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployee from "./addemployee";
import { useDispatch } from "react-redux";
import UserList from "./userlist/userlist";
import { fetchUserList } from "./common/redux/user";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserList());
  }, []);

  return (
    <Router>
      <MainBar />
      <div className="userList">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
