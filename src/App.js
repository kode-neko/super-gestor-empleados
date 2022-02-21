import "./App.css";
import React, { useEffect } from "react";
import { MainBar, UserList, AddEmployee } from "./components";
import { fetchUserList } from "./common";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App({ fetchUserList }) {
  useEffect(() => {
    fetchUserList();
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

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  fetchUserList: () => dispatch(fetchUserList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
