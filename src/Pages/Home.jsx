import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import ChatList from "../components/ChatList";
import Chat from "../components/Chat";
import RightSidebar from "../components/RightSidebar";

function Home() {
  return (
    <>
      <div className="sidebar-active">
        {/* <div className="chitchat-loader">
          <div>
            <img src="../assets/images/logo/logo_big.png" alt="" />
            <h3>Simple, secure messaging for fast connect to world..!</h3>
          </div>
        </div> */}
        <div className="chitchat-container sidebar-toggle">
          <LeftSidebar />
          <ChatList />
          <Chat />
          <RightSidebar />



        </div>
        <div
          className="modal fade add-popup add-contact-modal"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Add Contact</h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="default-form">
                  <div className="form-group text-center">
                    <h5>Email or Username</h5>
                    <input
                      className="form-control"
                      id="exampleInputEmail1"
                      type="text"
                      placeholder="Josephin water"
                    />
                  </div>
                  <div className="form-group mb-0 text-center">
                    <h5>Contact number</h5>
                    <input
                      className="form-control"
                      id="examplemsg"
                      type="number"
                      placeholder={12345678912}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-danger button-effect btn-sm"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary button-effect btn-sm"
                  type="button"
                >
                  Add contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal pol-modal-main add-popup"
          id="pollModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">
                  <i data-feather="bar-chart-2" />
                  poll
                </h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="default-form">
                  <h3>create poll</h3>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="ask que"
                    />
                    <input
                      className="form-control"
                      type="text"
                      placeholder="add commatn"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="option 1"
                    />
                    <input
                      className="form-control"
                      type="text"
                      placeholder="option 2"
                    />
                    <a className="add-option" href="#">
                      add an option
                    </a>
                  </div>
                  <div className="form-group">
                    <div className="post-poll">
                      <ul>
                        <li>
                          post poll in
                          <p className="pt-0">test name</p>
                        </li>
                        <li>
                          poll expier in 7 days
                          <p className="pt-0">test name</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="allow-group">
                      <input className="allow-check" type="checkbox" />
                      Allow users to vote anonymously
                    </div>
                  </div>
                  <div className="creat-poll-btn">
                    <a
                      className="btn btn-primary button-effect btn-sm"
                      href="#"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Create poll
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal notes-modal-main add-popup"
          id="notesModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">
                  <i className="ti-bookmark-alt" />
                  notes
                </h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body custom-scroll p-0">
                <div className="card">
                  <div className="card-header">
                    <h5>Inline Editor</h5>
                  </div>
                  <div className="card-body">
                    <div
                      className="cke_editable cke_editable_inline cke_contents_ltr cke_show_borders"
                      id="area1"
                      contentEditable="true"
                      tabIndex={0}
                      spellCheck="false"
                      role="textbox"
                      aria-label="Rich Text Editor, area1"
                      title="Rich Text Editor, area1"
                    >
                      <h1>Your title</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec at vulputate urna, sed dignissim arcu. Aliquam at
                        ligula imperdiet, faucibus ante a, interdum enim. Sed in
                        mauris a lectus lobortis condimentum. Sed in nunc magna.
                        Quisque massa urna, cursus vitae commodo eget, rhoncus
                        nec erat. Sed sapien turpis, elementum sit amet elit
                        vitae, elementum gravida eros. In ornare tempus nibh ut
                        lobortis. Nam venenatis justo ex, vitae vulputate neque
                        laoreet a.
                      </p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-danger button-effect btn-sm"
                      type="button"
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-primary button-effect btn-sm"
                      type="button"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal reminder-modal-main add-popup"
          id="setReminder"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content custom-scrollbar">
              <div className="modal-header">
                <h2 className="modal-title">Set redminders</h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="form default-form">
                  <div className="lable">Reminder for (Groups or contacts)</div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="contact or channel"
                    />
                  </div>
                  <div className="lable">Remind about</div>
                  <div className="form-group">
                    <textarea
                      className="form-control dib"
                      rows={3}
                      placeholder="Some details about task"
                      defaultValue={""}
                    />
                  </div>
                  <div className="lable">Remind about</div>
                  <div className="form-group">
                    <ul className="reminder-count">
                      <li className="active">
                        <div className="reminder-box">
                          <h3 className="remi-num">15</h3>
                          <h5 className="remi-val">minutes</h5>
                        </div>
                      </li>
                      <li>
                        <div className="reminder-box">
                          <h3 className="remi-num">1</h3>
                          <h5 className="remi-val">hour</h5>
                        </div>
                      </li>
                      <li>
                        <div className="reminder-box">
                          <h3 className="remi-num">5 PM</h3>
                          <h5 className="remi-val">today</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="form-group mb-0">
                    <div className="lable">select custom time</div>
                    <div className="custom-remider-main">
                      <div className="custom-remider-content">
                        <div className="custom-reminder-inline">
                          <input className="form-control" type="date" />
                          <input className="form-control" type="time" />
                        </div>
                        <div className="custom-reminder-block">
                          <select>
                            <option>Do not repeat</option>
                            <option>Weekdays (Mon-Fri)</option>
                            <option>Daily</option>
                            <option>Weekly (Custom)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reminder-btn mb-3">
                    <a className="btn btn-primary button-effect">
                      set reminder
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal snippet-modal-main add-popup"
          id="snippetModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">
                  <i className="fa fa-code" />
                  code snippets
                </h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="default-form">
                  <h3>creat snippets</h3>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="title(optional)"
                    />
                  </div>
                  <div className="form-group">
                    <select className="mb-0">
                      <option>ebnf</option>
                      <option>c++</option>
                      <option>diff</option>
                      <option>dart</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control mb-0"
                      type="text"
                      placeholder="add commant (optional)"
                    />
                  </div>
                  <div className="form-group mb-0">
                    <div className="btn-snipate">
                      <a
                        className="btn btn-danger button-effect btn-sm me-3"
                        href="#"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Cancel
                      </a>
                      <a
                        className="btn btn-primary button-effect btn-sm"
                        href="#"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Create &amp; post
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="audiocall"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-body">
              <div className="audiocall1 call-modal">
                <img
                  className="bg-img"
                  src="../assets/images/avtar/big/audiocall.jpg"
                  alt="Avatar"
                />
                <div className="center-con text-center">
                  <div className="title2">Josephin water</div>
                  <h6>log angelina california</h6>
                  <ul>
                    <li>
                      <a
                        className="icon-btn btn-success button-effect btn-xl is-animating"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#audiorcvcall"
                        data-bs-dismiss="modal"
                      >
                        {" "}
                        <i data-feather="phone" />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        className="icon-btn btn-danger button-effect btn-xl is-animating cancelcall"
                        href="#"
                        data-bs-dismiss="modal"
                      >
                        {" "}
                        <i data-feather="phone" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="viddiolog modal fade"
          id="videocall"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-body">
              <div className="videocall call-modal">
                <img
                  className="bg-img"
                  src="../assets/images/avtar/big/videocall_bg.jpg"
                  alt="Avatar"
                />
                <div className="small-image">
                  <img
                    className="bg-img"
                    src="../assets/images/avtar/big/videocall.jpg"
                    alt="Avatar"
                  />
                </div>
                <div className="d-flex gap-3 videocall-details">
                  <div className="usersprof">
                    <div className="profile">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/2.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="profile">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/3.jpg"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5>Josephin water</h5>
                    <h6>America ,California</h6>
                  </div>
                  <div id="basicUsage">00:00:00</div>
                  <div className="zoomcontent">
                    <a
                      className="text-dark"
                      href="#!"
                      onclick="javascript:toggleFullScreen()"
                      data-tippy-content="Zoom Screen"
                    >
                      <img
                        src="../assets/images/logo/maximize.svg"
                        alt="zoom screen"
                      />
                    </a>
                  </div>
                </div>
                <div className="center-con text-center">
                  <ul>
                    <li>
                      <a
                        className="icon-btn btn-light button-effect pause"
                        href="#"
                        data-tippy-content="Hold"
                      >
                        <i className="ti-control-pause" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-danger button-effect btn-xl is-animating"
                        href="#"
                        data-bs-dismiss="modal"
                        data-tippy-content="Hangup"
                      >
                        {" "}
                        <i data-feather="phone" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-light button-effect mic"
                        href="#"
                        data-tippy-content="Mute"
                      >
                        <i className="fa fa-microphone" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="confercall"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-body">
              <div className="conferencecall call-modal">
                <img
                  className="bg-img"
                  src="../assets/images/avtar/big/audiocall.jpg"
                  alt="Avatar"
                />
                <div className="center-con text-center">
                  <div className="usersprof">
                    <div className="profile">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/2.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="profile">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/3.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="profile">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/5.jpg"
                        alt="Avatar"
                      />
                    </div>
                    <div className="profile">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/big/videocall_bg.jpg"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <p>Incoming Call</p>
                  <h3>Conference Call</h3>
                  <ul>
                    <li>
                      {" "}
                      <a
                        className="icon-btn btn-danger button-effect btn-xl is-animating cancelcall"
                        href="#"
                        data-bs-dismiss="modal"
                      >
                        {" "}
                        <i data-feather="phone" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-success button-effect btn-xl is-animating"
                        href="#"
                      >
                        {" "}
                        <i data-feather="video" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="confvideocl"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row confimg">
                  <div className="col-6">
                    <div className="vclimg">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/big/videocall_bg.jpg"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="vclimg">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/5.jpg"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="vclimg">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/2.jpg"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="vclimg">
                      <img
                        className="bg-img"
                        src="../assets/images/avtar/3.jpg"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer clfooter">
                <div id="basicUsage3">00:00:00</div>
                <ul>
                  <li>
                    <a
                      className="icon-btn btn-light button-effect"
                      href="#"
                      data-tippy-content="speaker"
                    >
                      <i data-feather="volume-2" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-btn btn-light button-effect"
                      href="#"
                      data-tippy-content="Camera"
                    >
                      <i data-feather="camera-off" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-btn btn-light button-effect"
                      href="#"
                      data-tippy-content="Add Call"
                    >
                      <i data-feather="user-plus" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-btn btn-danger button-effect btn-sm is-animating"
                      href="#"
                      data-bs-dismiss="modal"
                      data-tippy-content="Hangup"
                    >
                      <i data-feather="phone" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-btn btn-light button-effect"
                      href="#"
                      data-tippy-content="Disable Video"
                    >
                      <i data-feather="video-off" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-btn btn-light button-effect mic"
                      href="#"
                      data-tippy-content="Mute"
                    >
                      <i data-feather="mic-off" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="icon-btn btn-light button-effect"
                      href="#"
                      data-tippy-content="Hold"
                    >
                      <i data-feather="pause" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade audiorcvcall"
          id="audiorcvcall"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-body">
              <div className="audiocall2 call-modal">
                <img
                  className="bg-img"
                  src="../assets/images/avtar/big/audiocall.jpg"
                  alt="Avatar"
                />
                <div className="center-con text-center">
                  <div id="basicUsage2">00:00:00</div>
                  <div className="title2">Josephin water</div>
                  <h6>log angelina california</h6>
                  <ul>
                    <li>
                      <a
                        className="icon-btn btn-light button-effect mute"
                        href="#"
                        data-tippy-content="Mute"
                      >
                        <i className="fa fa-microphone" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-light button-effect mute"
                        href="#"
                        data-tippy-content="Speaker"
                      >
                        <i className="fa fa-volume-up" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-danger button-effect btn-xl is-animating"
                        href="#"
                        data-tippy-content="Hangup"
                        data-bs-dismiss="modal"
                      >
                        {" "}
                        <i data-feather="phone" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-light button-effect"
                        href="#"
                        data-tippy-content="Add Call"
                      >
                        <i data-feather="user-plus" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-light button-effect"
                        href="#"
                        data-tippy-content="Pause"
                      >
                        <i data-feather="pause" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade fev-addcall-main add-popup"
          id="addcallmodal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Add Contact</h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="default-form">
                  <div className="form-group text-center">
                    <h5>Email or Username</h5>
                    <input
                      className="form-control"
                      id="exampleInputEmail12"
                      type="text"
                      placeholder="Josephin water"
                    />
                  </div>
                  <div className="form-group text-center">
                    <h5>Contact number</h5>
                    <input
                      className="form-control"
                      id="examplemsg2"
                      type="number"
                      placeholder={12345678912}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-danger button-effect btn-sm"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary button-effect btn-sm"
                  type="button"
                >
                  Add contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade add-popup todo-main-modal"
          id="todoModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Welcome to Chitchat</h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="default-form">
                  <div className="todo-task">
                    <h5>Felling Lonely</h5>
                    <div className="todo-main-content">
                      <div className="form-group">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                        <input
                          className="w-100"
                          id="user_input123"
                          type="text"
                          placeholder="Fill Your Fillings "
                        />
                      </div>
                      <div className="drop-picker">
                        <div className="dropdown currency" tabIndex={1}>
                          <div className="select">
                            <span>Assign To</span>
                          </div>
                          <input type="hidden" name="currency" />
                          <ul className="dropdown-menu">
                            <li className="dropdown-divider">
                              <div className="fa fa-user text-muted" />
                              <h5 className="text-muted">Assign To</h5>
                            </li>
                            <li>Josephin john</li>
                            <li>Lynetin john</li>
                            <li>Sufiya john</li>
                            <li>Jhon john</li>
                          </ul>
                        </div>
                        <input
                          className="datepicker-here form-control digits"
                          type="url"
                          data-language="en"
                          placeholder="Due date"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-danger button-effect btn-sm"
                  type="button"
                >
                  Save
                </button>
                <button
                  className="btn btn-primary button-effect btn-sm"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade add-popup create-todo-main-modal"
          id="createtodoModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Today's ToDo</h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="default-form">
                  <div className="todo-task">
                    <h5>Felling Lonely</h5>
                    <div className="todo-main-content">
                      <div className="form-group">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                        <input
                          className="w-100"
                          id="user_input123"
                          type="text"
                          placeholder="Fill Your Fillings "
                        />
                      </div>
                      <div className="drop-picker">
                        <div className="dropdown currency" tabIndex={1}>
                          <div className="select">
                            <span>Assign To</span>
                          </div>
                          <input type="hidden" name="currency" />
                          <ul className="dropdown-menu">
                            <li className="dropdown-divider">
                              <div className="fa fa-user text-muted" />
                              <h5 className="text-muted">Assign To</h5>
                            </li>
                            <li>Josephin john</li>
                            <li>Lynetin john</li>
                            <li>Sufiya john</li>
                            <li>Jhon john</li>
                          </ul>
                        </div>
                        <input
                          className="datepicker-here form-control digits"
                          type="url"
                          data-language="en"
                          placeholder="Due date"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-danger button-effect btn-sm"
                  type="button"
                >
                  Save
                </button>
                <button
                  className="btn btn-primary button-effect btn-sm"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade add-popup msg-chat-modal"
          id="msgchatModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Create New Message</h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="chat-msg-search">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon21"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon21">
                        @
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="chat-main custom-scroll">
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile offline">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/1.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Josephin water</h5>
                        <h6>
                          Hi, i am josephin. How are you.. ! There are many
                          variations of passages.
                        </h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>22/10/23</h6>
                        <h6 className="font-success status"> Seen</h6>
                      </div>
                    </div>
                  </li>
                  <li className="active" data-to="chating">
                    <div className="chat-box">
                      <div className="profile online">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/2.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>Typing................</h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>30/11/23</h6>
                        <div className="badge badge-primary sm">8</div>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile unreachable">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/3.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Sufiya Elija</h5>
                        <h6>I need job, please help me.</h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>15/06/23</h6>
                        <h6 className="font-dark status"> Sending</h6>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile busy">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/4.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Mukrani Pabelo</h5>
                        <h6>
                          Hi, i am josephin. How are you.. ! There are many
                          variations of passages.
                        </h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>04/06/23</h6>
                        <h6 className="font-danger status"> Failed</h6>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile busy">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/2.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jhon Deo</h5>
                        <h6>
                          Hi, i am josephin. How are you.. ! There are many
                          variations of passages.
                        </h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>04/06/23</h6>
                        <h6 className="font-danger status"> Failed</h6>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile busy">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/1.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Pabelo Mukrani</h5>
                        <h6>
                          Hi, i am josephin. How are you.. ! There are many
                          variations of passages.
                        </h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>04/06/23</h6>
                        <h6 className="font-danger status"> Failed</h6>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile unreachable">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/3.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Sufiya Elija</h5>
                        <h6>I need job, please help me.</h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>15/06/23</h6>
                        <h6 className="font-dark status"> Sending</h6>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile busy">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/4.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Mukrani Pabelo</h5>
                        <h6>
                          Hi, i am josephin. How are you.. ! There are many
                          variations of passages.
                        </h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>04/06/23</h6>
                        <h6 className="font-danger status"> Failed</h6>
                      </div>
                    </div>
                  </li>
                  <li data-to="blank">
                    <div className="chat-box">
                      <div className="profile busy">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/2.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jhon Deo</h5>
                        <h6>
                          Hi, i am josephin. How are you.. ! There are many
                          variations of passages.
                        </h6>
                      </div>
                      <div className="date-status">
                        <i className="ti-pin2" />
                        <h6>04/06/23</h6>
                        <h6 className="font-danger status"> Failed</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade add-popup msg-chat-modal"
          id="msgcallModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Create New Message</h2>
                <button
                  className="close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="chat-msg-search">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon20"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon20">
                        @
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="call-log-main custom-scroll">
                  <li className="active">
                    <div className="call-box">
                      <div className="profile offline">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/2.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>
                          {" "}
                          <i data-feather="arrow-down-left" />
                          3:30 pm
                        </h6>
                      </div>
                      <div className="call-status">
                        <div className="icon-btn btn-outline-success button-effect btn-sm">
                          <i data-feather="phone" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="call-box">
                      <div className="profile online">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/1.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>
                          {" "}
                          <i data-feather="arrow-down-right" />
                          3:10 pm
                        </h6>
                      </div>
                      <div className="call-status">
                        <div className="icon-btn btn-outline-success button-effect btn-sm">
                          <i data-feather="video" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="call-box">
                      <div className="profile offline">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/2.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>
                          {" "}
                          <i
                            className="missed"
                            data-feather="corner-left-down"
                          />
                          3:00 pm
                        </h6>
                      </div>
                      <div className="call-status">
                        <div className="icon-btn btn-outline-danger button-effect btn-sm">
                          <i data-feather="phone" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="call-box">
                      <div className="profile online">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/1.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>
                          {" "}
                          <i data-feather="arrow-down-right" />
                          3:00 pm
                        </h6>
                      </div>
                      <div className="call-status">
                        <div className="icon-btn btn-outline-success button-effect btn-sm">
                          <i data-feather="video" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="call-box">
                      <div className="profile offline">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/2.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>
                          {" "}
                          <i data-feather="arrow-down-right" />
                          3:00 pm
                        </h6>
                      </div>
                      <div className="call-status">
                        <div className="icon-btn btn-outline-success button-effect btn-sm">
                          <i data-feather="phone" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="call-box">
                      <div className="profile online">
                        <img
                          className="bg-img"
                          src="../assets/images/contact/1.jpg"
                          alt="Avatar"
                        />
                      </div>
                      <div className="details">
                        <h5>Jony Lynetin</h5>
                        <h6>
                          {" "}
                          <i data-feather="arrow-down-right" />
                          3:00 pm
                        </h6>
                      </div>
                      <div className="call-status">
                        <div className="icon-btn btn-outline-success button-effect btn-sm">
                          <i data-feather="video" />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
