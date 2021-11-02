import "../JoinScreen/Join.css";

function JoinScreen({ serverName }) {
  return (
    <>
      <div className="join-div flex flex-col items-center justify-center h-screen w-screen">
        <div className="flex items-center flex-col border-1 p-8 rounded-2xl shadow-2xl">
          <h1 className="text-5xl m-3">Invite</h1>
          <p className="m-2 text-2xl">
            You are invited to join{" "}
            <span className="serverName">{serverName}</span> server.
          </p>
          <p>Let's chat and have some fun.</p>
          <button className="bg-blue-900 rounded-2xl hover:bg-blue-600 text-white-500 font-semibold hover:text-white py-2 px-4 w-1/2 m-4">
            Join server
          </button>
        </div>
      </div>
    </>
  );
}

export default JoinScreen;
