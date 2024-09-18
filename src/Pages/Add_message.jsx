import React from "react";

function Add_message() {
  return (
    <>
      <li className="sent">
        <div className="d-flex">
          <div className="profile">
            <img
              className="bg-img"
              src="../assets/images/contact/2.jpg"
              alt="Avatar"
            />
          </div>
          <div className="flex-grow-1">
            <div className="contact-name">
              <h5>Josephin water</h5>
              <h6>01:35 AM</h6>
              <ul className="msg-box">
                <li className="msg-setting-main">
                  <h5>
                    {"{"}
                    {"{"} $msg {"}"}
                    {"}"}
                  </h5>
                  <div className="msg-dropdown-main">
                    <div className="msg-setting">
                      <i className="ti-more-alt" />
                    </div>
                    <div className="msg-dropdown">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-share" />
                            forward
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-clone" />
                            copy
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-star-o" />
                            rating
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ti-trash" />
                            delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      ;
    </>
  );
}

export default Add_message;
