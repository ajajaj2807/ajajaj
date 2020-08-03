import React from "react";

export default function Modal({ close }) {
  return (
    <div className="modal-wrapper">
      <div className="modal-overlay" onClick={close}></div>
      <div className="modal-content">
        <span className="modal-txt">
          Send me a mail at
          <a className="email-add" href="mailto:ajajaj2807@gmail.com"> {" "} ajajaj2807@gmail.com </a>
          <br /> or Ping me on
          <a href="https://www.facebook.com/ajajaj2807" target="_blank">
            {" "}
            Messenger{" "}
          </a>
          anytime!
        </span>
      </div>
    </div>
  );
}
