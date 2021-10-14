// import React from "react";
// import UserContext from "../Context";

// export default function SwitchButton({ isDarkMode, changeMode }) {
//   return (
//     <button
//       className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
//       onClick={changeMode}
//     >
//       {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//     </button>
//   );
// }

import React from "react";
import UserContext from "../Context";

class Banner extends React.Component {
  
  static contextType = UserContext;

  render() {
    let { isDarkMode } = this.context.data;
    return (
      <div
        className={
          isDarkMode
            ? "message-dark message--banner message--success"
            : "message message--banner message--success"
        }
      >
        <h3 className="message-heading">This is a success banner!</h3>
        <p>It celebrates that you have successfully completed a major task.</p>
      </div>
    );
  }
}

export default Banner;