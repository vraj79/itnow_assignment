import "./App.css";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <br />
      <br />
      <LoginForm/>
      <UserList />
    </div>
  );
}

export default App;
