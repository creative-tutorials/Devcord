import "./Navbar.css";
import axios from "axios";
import { useQuery } from "react-query";
import Stack from "@mui/material/Stack";
import ServerAvatar from "../../Resuable/Server/ServerAvatar";
function Navbar() {
  const { data } = useQuery("response", () => {
    return axios
      .post("http://localhost:4000/servers", {
        email: localStorage.getItem("email"),
      })
      .then((res) => res.data);
  });

  return (
    <div className="navbar">
      <Stack direction="column" spacing={4}>
        {data
          ? data.servers.map((server, index) => {
              return (
                <ServerAvatar
                  photoUrl={server.photoUrl}
                  serverName={server.serverName}
                  serverId={server.serverId}
                  key={index}
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
