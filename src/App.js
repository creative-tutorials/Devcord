import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Route path="/signup" exact={true}>
          <Login />
        </Route>
      </Router>
    </>
  );
}

export default App;
