import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/Nav";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
     
      {/* <Router>
        <Navigate>
          <Route exact path="/home" component={Home} />
          <Navigate to="/" />
        </Navigate>
      </Router> */}
    </div>
  );
}

export default App;
