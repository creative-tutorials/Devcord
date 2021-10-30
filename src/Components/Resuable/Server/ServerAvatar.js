import PropTypes from "prop-types";
import "./Styles.css";
import Logo from "../../../Assets/logo192.png";
import Tooltip from "@mui/material/Tooltip";
function ServerAvatar({ serverName, photoUrl, onClick }) {
  return (
    <>
      {serverName ? (
        <Tooltip title={serverName} arrow placement="right">
          <div
            className="server"
            style={{
              backgroundImage: photoUrl ? `url(${photoUrl})` : `url(${Logo})`,
            }}
            onClick={onClick}
          ></div>
        </Tooltip>
      ) : (
        <div
          className="server"
          style={{
            backgroundImage: photoUrl ? `url(${photoUrl})` : `url(${Logo})`,
          }}
          onClick={onClick}
        ></div>
      )}
    </>
  );
}

ServerAvatar.propTypes = {
  serverName: PropTypes.string,
  photoUrl: PropTypes.string,
  onClick: PropTypes.func,
};
export default ServerAvatar;
