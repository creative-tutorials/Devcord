import "./Navbar.css";
import axios from "axios";
import { useQuery } from "react-query";
import Stack from "@mui/material/Stack";
import ServerAvatar from "../../Resuable/Server/ServerAvatar";
import { useContext } from "react";
import ServerContext from "../../../Context/Servers";
function Navbar() {
  const ServerData = useContext(ServerContext);
  const { data } = useQuery("servers", () => {
    return axios
      .post("http://localhost:4000/servers", {
        email: localStorage.getItem("email"),
      })
      .then((res) => res.data);
  });

  return (
    <div className="navbar">
      <Stack direction="column" spacing={2}>
        <ServerAvatar photoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs96ow8oxizxjPrsh9SK9X3XzcaBVUVHE_Fg&usqp=CAU" />
        {data
          ? data.servers.map((server, index) => {
              return (
                <ServerAvatar
                  photoUrl={server.photoUrl}
                  serverName={server.serverName}
                  serverId={server.serverId}
                  key={index}
                  onClick={() => {
                    ServerData.setServerState({
                      type: "setServerId",
                      payload: server.serverId,
                    });
                  }}
                />
              );
            })
          : null}
        <div className="addServerIcon"></div>
      </Stack>
    </div>
  );
}

export default Navbar;
