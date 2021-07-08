import React from "react";

const Toolstrip = ({ executeCode, resetCode, save, changeTheme }) => {
  return (
    <div className="toolstrip">
      <button onClick={executeCode}>Run</button>
      <button onClick={resetCode}>Reset</button>
      <button onClick={changeTheme}>Switch Mode</button>
      <button onClick={save}>Save</button>
    </div>
  );
};

export default Toolstrip;
