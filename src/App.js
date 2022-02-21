import "./App.css";
import React, { useEffect } from "react";
import { MainBar, UserList, AddEmployee } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserList } from "./common";

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
