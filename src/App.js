import "./App.css";
import React, { useState, useEffect } from "react";
import { MainBar, UserList, AddEmployee } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getUserList } from "./common/api/user";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getUserList().then((list) => {
      setList(list);
    });
  }, []);

  const handleCreatedUser = (user) => {
    setList([user, ...list]);
  };

  const handleChangeContratado = (email) => {
    const newList = list.map((user) =>
      user.email === email ? { ...user, contratado: !user.contratado } : user
    );
    setList(newList);
  };

  return (
    <Router>
      <MainBar
        contratado={list.filter((user) => user.contratado).length}
        total={list.length}
      />
      <div className="userList">
        <Routes>
          <Route
            path="/"
            element={
              <UserList
                list={list}
                onChangeContratado={handleChangeContratado}
              />
            }
          />
          <Route
            path="/add"
            element={<AddEmployee onCreatedUser={handleCreatedUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
