import "./App.css";
import { useEffect, useState } from "react";
import IdCard from "./idcard";
import MainBar from "./mainbar";

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
        }));
        setUserList(userListAux);
      });
  }, []);

  return userList.length !== 0 ? (
    <>
      <MainBar total={userList.length} contratado={userList.length} />
      <div className="userList">
        {userList.map((user) => (
          <IdCard user={user} />
        ))}
      </div>
    </>
  ) : (
    <img src="spinner.gif" alt="loading info" />
  );
}

export default App;
