
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./Reducers";
function App() {
  const selector = useSelector((state) => state);
  const Dispatch = useDispatch();
  return (
    <div className="w-screen h-screen flex-col flex items-center justify-center">
      {selector.counter.value}<br/>
      
    <button onClick={()=>Dispatch(increment())} >Click </button>

    </div>
  );
}

export default App;
