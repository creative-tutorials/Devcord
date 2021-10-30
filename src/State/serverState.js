import { useReducer } from "react";
import ServerContext from "../Context/Servers";
const initialState = {
  serverId: "",
  channelId: "",
};
const ReducerFunction = (state, action) => {
  switch (action.type) {
    case "setServerId":
      state.serverId = action.payload;
      return state;
    case "setChannelId":
      state.channelId = action.payload;
      return state;
    default:
      return state;
  }
};
export default function ServerState(props) {
  const [serverState, setServerState] = useReducer(
    ReducerFunction,
    initialState
  );
  return (
    <ServerContext.Provider value={{ serverState, setServerState }}>
      {props.children}
    </ServerContext.Provider>
  );
}
