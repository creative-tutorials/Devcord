import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./Reducers";
import Login from "./Components/Login";
function App() {
  const selector = useSelector((state) => state);
  const Dispatch = useDispatch();
  return (
    <>
      <Login />
    </>
  );
}

export default App;
