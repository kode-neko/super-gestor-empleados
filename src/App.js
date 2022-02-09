import "./App.css";
import IdCard from "./idcard";

function App() {

  const user = {
    avatar: 'man.png',
    name: 'Perico',
    surname: 'De los Palotes',
    city: 'Torrevieja',
    state: 'Alicante'
  }

  return (
    <div className="App">
      <IdCard user={user} />
    </div>
  );
}

export default App;
