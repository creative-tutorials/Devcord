import PropTypes from "prop-types";
import "./Styles.css";
import Logo from "../../../Assets/logo192.png";
import Tooltip from "@mui/material/Tooltip";
function ServerAvatar({ serverName, photoUrl, serverId }) {
  return (
    <>
      <Tooltip title={serverName} arrow placement="right" >
        <div
          className="server"
          style={{
            backgroundImage: photoUrl ? `url(${photoUrl})` : `url(${Logo})`,
          }}
        ></div>
      </Tooltip>
    </>
  );
}

ServerAvatar.propTypes = {
  serverName: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  serverId: PropTypes.string,
};
export default ServerAvatar;
