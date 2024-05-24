import "./App.css";
import Login from "./component/Login";
import Profile from "./component/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>react video for context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
