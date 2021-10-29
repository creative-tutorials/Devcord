import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserState } from "./Reducers/userReducers";

//importing Components
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  const State = useSelector((state) => state.user.userState);
  const Dispatch = useDispatch();
  function updateReduxState() {
    const newStateObject = {};
    Object.keys(State).forEach((state) => {
      const value = localStorage.getItem(state)
        ? localStorage.getItem(state)
        : "";
      newStateObject[state] = value;
    });
    Dispatch(updateUserState(newStateObject));
  }
  useEffect(() => {
    updateReduxState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Router>
        <Route path="/signup" exact={true}>
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Router>
    </>
  );
}

export default App;
