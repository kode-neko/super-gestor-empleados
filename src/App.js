import "./App.css";
import { useEffect, useState } from "react";
import IdCard from "./idcard";

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
    .then((data) => data.json())
    .then((json) => {
      const user = json.results[0];
      setUser({
        avatar: user.picture.medium,
        name: user.name.first,
        surname: user.name.last,
        city: user.location.city,
        state: user.location.state,
      });
    });
  }, [])

  return user ? (
    <div className="App">
      <IdCard user={user} />
    </div>
  ) : <img src="spinner.gif" alt="loading info" />;
}

export default App;
