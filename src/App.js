import "./App.css";
import React, { useEffect, useState } from "react";
import IdCard from "./idcard";
import MainBar from "./mainbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployee from "./addemployee";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
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
        setUserList(userListAux);
      });
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
            setUserList(newList);
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
          <Route exact path="/" element={userListTpl} />
          <Route exact path="/add" element={<AddEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
