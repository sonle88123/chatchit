
import React from "react";

function RightSidebar() {
  return (
   <>
             <aside className="chitchat-right-sidebar" id="slide-menu">
            <div className="custom-scroll right-sidebar">
              <div className="contact-profile">
                <div className="theme-title">
                  <div className="d-flex">
                    <div>
                      <h2>Profile</h2>
                      <h4>Personal Information</h4>
                    </div>
                    <div className="flex-grow-1">
                      {" "}
                      <a
                        className="icon-btn btn-outline-light btn-sm close-profile ms-3"
                        href="#"
                      >
                        {" "}
                        <i data-feather="x"> </i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <div className="contact-top">
                    <img
                      className="bg-img"
                      src="../assets/images/avtar/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <h3>Josephin water</h3>
                    <h6>Add Description</h6>
                  </div>
                  <ul className="medialogo">
                    <li>
                      <a
                        className="icon-btn btn-danger button-effect"
                        href="https://www.google.com/"
                      >
                        <i className="fa fa-google" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-primary button-effect"
                        href="https://twitter.com/"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="icon-btn btn-facebook button-effect"
                        href="https://www.facebook.com/"
                      >
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="document">
                <div className="filter-block">
                  <div className="collapse-block open">
                    <h5 className="block-title">
                      Shared Document
                      <label className="badge badge-success sm ms-2">3</label>
                    </h5>
                    <div className="block-content">
                      <ul className="document-list">
                        <li>
                          <i className="ti-folder font-danger" />
                          <h5>Simple_practice_project-zip</h5>
                        </li>
                        <li>
                          <i className="ti-write font-success" />
                          <h5>Word_Map-jpg</h5>
                        </li>
                        <li>
                          <i className="ti-zip font-primary" />
                          <h5>Latest_Design_portfolio.pdf</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-gallery portfolio-section grid-portfolio">
                <div className="collapse-block open">
                  <h5 className="block-title">
                    Shared Media
                    <label className="badge badge-primary sm ms-2">2</label>
                  </h5>
                  <div className="block-content">
                    <div className="row share-media zoom-gallery">
                      <div className="col-12">
                        <h6 className="mb-2">22/03/2023</h6>
                      </div>
                      <div className="col-4 isotopeSelector filter">
                        <div className="media-big">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/1.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/1.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="media-small isotopeSelector filter">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/2.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/2.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="media-small isotopeSelector filter">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/3.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/3.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="media-small isotopeSelector filter">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/4.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/4.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="media-small isotopeSelector filter fashion">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/5.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/5.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <h6 className="mb-2 mt-2">20/04/2023</h6>
                      </div>
                      <div className="col-4">
                        <div className="media-small isotopeSelector filter">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/2.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/2.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="media-small isotopeSelector filter">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/3.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/3.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="media-small isotopeSelector filter">
                          <div className="overlay">
                            <div className="border-portfolio">
                              <a href="../assets/images/gallery/4.jpg">
                                <div className="overlay-background">
                                  <i className="ti-plus" aria-hidden="true" />
                                </div>
                                <img
                                  className="img-fluid bg-img"
                                  src="../assets/images/gallery/4.jpg"
                                  alt="portfolio-image"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status">
                <div className="collapse-block open">
                  <h5 className="block-title">
                    Starred Messages
                    <label className="badge badge-outline-dark sm ms-2">
                      2
                    </label>
                  </h5>
                  <div className="block-content">
                    <div className="contact-chat p-0 m-0">
                      <ul className="str-msg">
                        <li>
                          <div className="d-flex">
                            <div className="profile me-4">
                              <img
                                className="bg-img"
                                src="../assets/images/contact/2.jpg"
                                alt="Avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <div className="contact-name">
                                <h5>Alan josheph</h5>
                                <h6>01:35 AM</h6>
                                <ul className="msg-box">
                                  <li>
                                    <h5>Hi I am Alan,</h5>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex">
                            <div className="profile me-4">
                              <img
                                className="bg-img"
                                src="../assets/images/contact/3.jpg"
                                alt="Avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <div className="contact-name">
                                <h5>Josephin water</h5>
                                <h6>01:35 AM</h6>
                                <ul className="msg-box">
                                  <li>
                                    <h5>
                                      Can you help me to find best chat app?.
                                    </h5>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status">
                <div className="collapse-block open">
                  <h5 className="block-title">
                    Common groups
                    <label className="badge badge-outline-dark sm ms-2">
                      3
                    </label>
                  </h5>
                  <div className="block-content">
                    <ul className="group-main">
                      <li>
                        <div className="group-box">
                          <div className="profile">
                            <img
                              className="bg-img"
                              src="../assets/images/avtar/teq.jpg"
                              alt="Avatar"
                            />
                          </div>
                          <div className="details">
                            <h5>Tech Ninjas</h5>
                            <h6>johan, deo, Sufiya Elija, Pabelo &amp; you</h6>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="group-box">
                          <div className="profile">
                            <img
                              className="bg-img"
                              src="../assets/images/avtar/family.jpg"
                              alt="Avatar"
                            />
                          </div>
                          <div className="details">
                            <h5>Family Ties</h5>
                            <h6>Mukrani, deo &amp; you</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="status other">
                <h5 className="block-title p-b-25">Contact info</h5>
                <ul>
                  <li>
                    <h5>
                      {" "}
                      <a href="#">
                        {" "}
                        <i data-feather="smartphone" />
                        +12 3456789587
                      </a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="https://themeforest.net/user/pixelstrap/portfolio">
                        {" "}
                        <i data-feather="crosshair" />
                        https://pixelstrap
                      </a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="#">
                        {" "}
                        <i data-feather="map-pin" />
                        1766 Fidler Drive Texas, 78238.
                      </a>
                    </h5>
                  </li>
                </ul>
              </div>
              <div className="status">
                <ul>
                  <li>
                    <input className="js-switch" type="checkbox" />
                    <h5>Block</h5>
                  </li>
                  <li>
                    <input className="js-switch1" type="checkbox" />
                    <h5>Mute</h5>
                  </li>
                  <li>
                    <input
                      className="js-switch2"
                      type="checkbox"
                      defaultChecked=""
                    />
                    <h5>Get Notification</h5>
                  </li>
                </ul>
              </div>
              <div className="status other">
                <ul>
                  <li>
                    <h5>
                      {" "}
                      <a href="#">
                        {" "}
                        <i data-feather="share-2" />
                        share Contact
                      </a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="#">
                        {" "}
                        <i data-feather="trash-2" />
                        Clear Chat
                      </a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="#">
                        {" "}
                        <i data-feather="external-link" />
                        Export Chat
                      </a>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <a href="#">
                        {" "}
                        <i data-feather="alert-circle" />
                        Report Contact{" "}
                      </a>
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <aside className="app-sidebar active">
            <div className="apps">
              <ul className="apps-ul">
                <li id="todo">
                  <div className="todo-main">
                    <div className="theme-title">
                      <div className="d-flex">
                        <div>
                          <h2>Todo</h2>
                          <h4>to create your task</h4>
                        </div>
                        <div className="flex-grow-1">
                          <a
                            className="icon-btn btn-sm btn-outline-light close-apps"
                            href="#"
                          >
                            <i data-feather="x" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="todo-name">
                      <form className="default-form">
                        <select
                          className="custom-scroll"
                          name="support[support_type]"
                        >
                          <option>All Conversations</option>
                          <option>Josephin water</option>
                          <option>Jony Lynetin</option>
                          <option>Sufiya Elija</option>
                          <option>Mukrani Pabelo</option>
                          <option>Jhon Deo</option>
                        </select>
                      </form>
                    </div>
                    <div className="todo-tab theme-tab custom-scroll">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            className="nav-link button-effect active show"
                            data-bs-toggle="pill"
                            href="#todo1"
                          >
                            All
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link button-effect"
                            data-bs-toggle="pill"
                            href="#todo2"
                          >
                            My to-dos
                          </a>
                        </li>
                        <li>
                          <a
                            className="icon-btn btn-light button-effect btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#todoModal"
                          >
                            <i data-feather="plus"> </i>
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane active show" id="todo1">
                          <div className="tab-card text-start">
                            <div className="todo-task">
                              <h4>Designer Discussion </h4>
                              <div className="todo-main-content">
                                <div className="input-text">
                                  <input
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                  />
                                  <input
                                    id="user_input12"
                                    type="text"
                                    name="todo-text"
                                    placeholder="Give me review on our side"
                                  />
                                </div>
                                <div className="drop-picker">
                                  <div
                                    className="dropdown currency"
                                    tabIndex={1}
                                  >
                                    <div className="select">
                                      <span>Assign To</span>
                                    </div>
                                    <input type="hidden" name="currency" />
                                    <ul className="dropdown-menu">
                                      <li className="dropdown-divider">
                                        <div className="fa fa-user" />
                                        <h5 className="text-muted">
                                          Assign To
                                        </h5>
                                      </li>
                                      <li>
                                        <a href="#">Josephin john</a>
                                      </li>
                                      <li>
                                        <a href="#">Lynetin john</a>
                                      </li>
                                      <li>
                                        <a href="#">Sufiya john</a>
                                      </li>
                                      <li>
                                        <a href="#">Jhon john</a>
                                      </li>
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
                              <div className="todo-list">
                                <div className="element" id="div_3">
                                  <span className="add add-to-do">
                                    Add-To-Do
                                  </span>
                                </div>
                              </div>
                              <div className="todo-main-content">
                                <div className="input-text">
                                  <input
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                  />
                                  <input
                                    id="user_input13"
                                    type="text"
                                    name="todo-text"
                                    placeholder="Redesign Your Design"
                                  />
                                </div>
                                <div className="drop-picker">
                                  <div
                                    className="dropdown currency"
                                    tabIndex={1}
                                  >
                                    <div className="select">
                                      <span>Assign To</span>
                                    </div>
                                    <input type="hidden" name="currency" />
                                    <ul className="dropdown-menu">
                                      <li className="dropdown-divider">
                                        <div className="fa fa-user" />
                                        <h5 className="text-muted">
                                          Assign To
                                        </h5>
                                      </li>
                                      <li>
                                        <a href="#">Josephin john</a>
                                      </li>
                                      <li>
                                        <a href="#">Lynetin john</a>
                                      </li>
                                      <li>
                                        <a href="#">Sufiya john</a>
                                      </li>
                                      <li>
                                        <a href="#">Jhon john</a>
                                      </li>
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
                              <div className="todo-list">
                                <div className="element" id="div_2">
                                  <span className="add add-to-do">
                                    Add-To-Do
                                  </span>
                                </div>
                              </div>
                              <div className="todo-main-content">
                                <div className="input-text">
                                  <input
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                  />
                                  <input
                                    id="user_input14"
                                    type="text"
                                    name="todo-text"
                                    placeholder=" Complete Project report"
                                  />
                                </div>
                                <div className="drop-picker">
                                  <div
                                    className="dropdown currency"
                                    tabIndex={1}
                                  >
                                    <div className="select">
                                      <span>Assign To</span>
                                    </div>
                                    <input type="hidden" name="currency" />
                                    <ul className="dropdown-menu">
                                      <li className="dropdown-divider">
                                        <div className="fa fa-user" />
                                        <h5 className="text-muted">
                                          Assign To
                                        </h5>
                                      </li>
                                      <li>
                                        <a href="#">Josephin john</a>
                                      </li>
                                      <li>
                                        <a href="#">Lynetin john</a>
                                      </li>
                                      <li>
                                        <a href="#">Sufiya john</a>
                                      </li>
                                      <li>
                                        <a href="#">Jhon john</a>
                                      </li>
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
                              <div className="todo-list">
                                <div className="element" id="div_1">
                                  <span className="add add-to-do">
                                    Add-To-Do
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="todo2">
                          <div className="converstaion-docs tab-card">
                            <i className="fa fa-sticky-note-o" />
                            <h5 className="mb-3">No Open To-Dos Here </h5>
                            <a
                              className="btn btn-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#createtodoModal"
                            >
                              Create A To-Do
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="files">
                  <div className="theme-title">
                    <div className="d-flex">
                      <div>
                        <h2>Files</h2>
                        <h4>Shared Media</h4>
                      </div>
                      <div className="flex-grow-1">
                        <a
                          className="icon-btn btn-sm btn-outline-light close-apps"
                          href="#"
                        >
                          <i data-feather="x"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="theme-tab">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link button-effect active"
                          data-bs-toggle="pill"
                          href="#tab1"
                        >
                          Media
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link button-effect"
                          data-bs-toggle="pill"
                          href="#tab2"
                        >
                          Link
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link button-effect"
                          data-bs-toggle="pill"
                          href="#tab3"
                        >
                          Docs
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="file-tab">
                    <div className="tab-content custom-scroll">
                      <div className="tab-pane active" id="tab1">
                        <div className="media-gallery portfolio-section grid-portfolio">
                          <div className="collapse-block open">
                            <h5 className="block-title">
                              12/12/2023
                              <label className="badge badge-primary sm ms-2">
                                8
                              </label>
                            </h5>
                            <div className="block-content">
                              <div className="row share-media zoom-gallery">
                                <div className="col-4 isotopeSelector filter">
                                  <div className="media-big">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/1.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/1.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/2.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/2.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/3.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/3.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/4.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/4.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter fashion">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/5.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/5.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h5 className="block-title">
                              10/01/2024
                              <label className="badge badge-primary sm ms-2">
                                5
                              </label>
                            </h5>
                            <div className="block-content">
                              <div className="row share-media zoom-gallery">
                                <div className="col-4 isotopeSelector filter">
                                  <div className="media-big">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/1.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/1.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/2.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/2.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/3.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/3.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/4.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/4.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter fashion">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/5.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/5.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h5 className="block-title">
                              30/04/2024
                              <label className="badge badge-primary sm ms-2">
                                2
                              </label>
                            </h5>
                            <div className="block-content">
                              <div className="row share-media zoom-gallery">
                                <div className="col-4 isotopeSelector filter">
                                  <div className="media-big">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/1.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/1.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/2.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/2.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/3.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/3.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/4.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/4.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter fashion">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/5.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/5.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/2.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/2.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/3.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/3.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/4.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/4.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h5 className="block-title">
                              10/01/2024
                              <label className="badge badge-primary sm ms-2">
                                2
                              </label>
                            </h5>
                            <div className="block-content">
                              <div className="row share-media zoom-gallery mb-5">
                                <div className="col-4 isotopeSelector filter">
                                  <div className="media-big">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/1.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/1.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/2.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/2.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/3.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/3.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/4.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/4.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="media-small isotopeSelector filter fashion">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/5.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/5.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/2.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/2.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/3.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/3.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="media-small isotopeSelector filter">
                                    <div className="overlay">
                                      <div className="border-portfolio">
                                        <a href="../assets/images/gallery/4.jpg">
                                          <div className="overlay-background">
                                            <i
                                              className="ti-plus"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <img
                                            className="img-fluid bg-img"
                                            src="../assets/images/gallery/4.jpg"
                                            alt="portfolio-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab2">
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Jquery Template</h5>
                              <h6>12:05 PM Today </h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/endless-react-admin-template/25365098">
                            https://themeforest.net/item/endless-react-admin-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/12.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>React Template</h5>
                              <h6 className="mt-0">
                                Functionality integration project.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Multikart Template</h5>
                              <h6>05:12 AM Today</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/multikart-responsive-vuejs-ecommerce-template/25174665">
                            https://themeforest.net/item/multikart-responsive-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/3.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Multipurpose Vuejs.</h5>
                              <h6 className="mt-0">
                                Template is a multi-use Vue template.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Unice-Multipurpose</h5>
                              <h6>03:26 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/unice-angular-multipurpose-template/24776272">
                            https://themeforest.net/item/unice-angular-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/8.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Angular Template.</h5>
                              <h6 className="mt-0">
                                Unice is a Perfect Respon.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Endless-Angular</h5>
                              <h6>02:26 AM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/endless-angular-admin-template/23884779">
                            https://themeforest.net/item/endless-angular-admin-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/12.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Endless Document.</h5>
                              <h6 className="mt-0">
                                Help you understand angular.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Bigdeal-eCommerce</h5>
                              <h6>04:00 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/bigdeal-ecommerce-htms-template/24809149">
                            https://themeforest.net/item/bigdeal-ecommerce-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/9.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>HTML Template.</h5>
                              <h6 className="mt-0">eCommerce HTML Template.</h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Multikart-Responsive.</h5>
                              <h6>11:05 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773">
                            https://themeforest.net/item/multikart-responsive-react-ecommerce
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/3.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Multipurp eComme.</h5>
                              <h6 className="mt-0">
                                Well with multi-purpose websites.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Creative - Responsive</h5>
                              <h6>12:26 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/creative-responsive-admin-template/24978419">
                            https://themeforest.net/item/creative-responsive
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/11.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Dashboard Templa.</h5>
                              <h6 className="mt-0">
                                Creative Admin is a full featured.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">eComme Template</h5>
                              <h6>12:26 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/multikart-responsive-angular-ecommerce-template/22905358">
                            https://themeforest.net/item/multikart-responsive-angular
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/3.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Responsive Ang.</h5>
                              <h6 className="mt-0">
                                Multikart – Multipurpose.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <div className="d-flex" />
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Multikart Templat.</h5>
                              <h6>12:26 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/multikart-responsive-ecommerce-htms-template/22809967">
                            https://themeforest.net/item/multikart-responsive-ecommerce
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/10.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Multi Responsive.</h5>
                              <h6 className="mt-0">Ecommerce HTML Theme.</h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <div className="d-flex" />
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">BigBoost Template</h5>
                              <h6>04:26 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/bigboost-ecommerce-htms-template/24168053">
                            https://themeforest.net/item/bigboost-ecommerce-htms-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/7.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Fully Responsive.</h5>
                              <h6 className="mt-0">
                                Multiple Header Varations.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">App Landing </h5>
                              <h6>10:05 PM 20/05/2023</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/unice-app-landing-corporate-and-portfolio-multipurpose-template/24581311">
                            https://themeforest.net/item/unice-app-landing-corporate-and-portfolio-multipurpose-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/4.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Multi-Purpos theme.</h5>
                              <h6 className="mt-0">
                                Unice is a Perfect Responsive.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Reno - Tools Store</h5>
                              <h6>12:26 PM</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/reno-multipurpose-htms-template/24141678">
                            https://themeforest.net/item/reno-multipurpose-htms-template
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/6.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Reno Template is a busines.</h5>
                              <h6 className="mt-0">
                                Android Mobile or tablets.
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="link-group mb-5">
                          <div className="d-flex">
                            <i data-feather="link" />
                            <div className="flex-grow-1">
                              <h5 className="mt-0">Shop - Mart</h5>
                              <h6>12:26 PM 03/11/2023</h6>
                            </div>
                          </div>
                          <a href="https://themeforest.net/item/shopmart-multipurpose-shopify-theme/24040917?s_rank=12">
                            https://themeforest.net/item/shopmart-multipurpose-shopify-theme
                          </a>
                          <div className="d-flex">
                            <img
                              className="img-fluid"
                              src="../assets/images/file_icons/5.png"
                              alt="media-img"
                            />
                            <div className="flex-grow-1">
                              <h5>Shop Mart Landing Page.</h5>
                              <h6 className="mt-0">
                                This is App Landing Template.
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab3">
                        <ul className="chat-main">
                          <li>
                            <div className="chat-box">
                              <div className="d-flex">
                                <div className="profile">
                                  <a
                                    className="icon-btn btn-outline-danger btn-xl pull-right rouded15"
                                    href="#"
                                  >
                                    <i className="fa fa-file-code-o" />
                                  </a>
                                </div>
                                <div className="details">
                                  <h5>messenger.html</h5>
                                  <h6>2, octomber 2023</h6>
                                </div>
                                <div className="flex-grow-1">
                                  <a
                                    className="icon-btn btn-outline-light btn-sm pull-right"
                                    href="../assets/doc/messenger.html"
                                    target="_blank"
                                  >
                                    <i data-feather="download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="chat-box">
                              <div className="d-flex">
                                <div className="profile">
                                  <a
                                    className="icon-btn btn-outline-success btn-xl pull-right rouded15"
                                    href="#"
                                  >
                                    <i className="fa fa-file-video-o" />
                                  </a>
                                </div>
                                <div className="details">
                                  <h5>chapter1.MP4</h5>
                                  <h6>3, Octomber 2023</h6>
                                </div>
                                <div className="flex-grow-1">
                                  <a
                                    className="icon-btn btn-outline-light btn-sm pull-right"
                                    href="../assets/doc/chapter1.MP4"
                                    target="_blank"
                                  >
                                    <i data-feather="download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="chat-box">
                              <div className="d-flex">
                                <div className="profile">
                                  <a
                                    className="icon-btn btn-outline-primary btn-xl pull-right rouded15"
                                    href="#"
                                  >
                                    <i className="fa fa-file-word-o" />
                                  </a>
                                </div>
                                <div className="details">
                                  <h5>salary.xlsx</h5>
                                  <h6>5, Octomber 2023</h6>
                                </div>
                                <div className="flex-grow-1">
                                  <a
                                    className="icon-btn btn-outline-light btn-sm pull-right"
                                    href="../assets/doc/salary.xlsx"
                                    target="_blank"
                                  >
                                    <i data-feather="download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="chat-box">
                              <div className="d-flex">
                                <div className="profile">
                                  <a
                                    className="icon-btn btn-outline-warning btn-xl pull-right rouded15"
                                    href="#"
                                  >
                                    <i className="fa fa-file-pdf-o" />
                                  </a>
                                </div>
                                <div className="details">
                                  <h5>document.pdf</h5>
                                  <h6>7, Octomber 2023</h6>
                                </div>
                                <div className="flex-grow-1">
                                  <a
                                    className="icon-btn btn-outline-light btn-sm pull-right"
                                    href="../assets/doc/document.pdf"
                                    target="_blank"
                                  >
                                    <i data-feather="download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="chat-box">
                              <div className="d-flex">
                                <div className="profile">
                                  <a
                                    className="icon-btn btn-outline-danger btn-xl pull-right rouded15"
                                    href="#"
                                  >
                                    <i className="fa fa-file-text-o" />
                                  </a>
                                </div>
                                <div className="details">
                                  <h5>details.txt</h5>
                                  <h6>20, Octomber 2023</h6>
                                </div>
                                <div className="flex-grow-1">
                                  <a
                                    className="icon-btn btn-outline-light btn-sm pull-right"
                                    href="../assets/doc/details.txt"
                                    target="_blank"
                                  >
                                    <i data-feather="download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="chat-box">
                              <div className="d-flex">
                                <div className="profile">
                                  <a
                                    className="icon-btn btn-outline-success btn-xl pull-right rouded15"
                                    href="#"
                                  >
                                    <i className="fa fa-file-code-o" />
                                  </a>
                                </div>
                                <div className="details">
                                  <h5>messenger.html</h5>
                                  <h6>2, octomber 2023</h6>
                                </div>
                                <div className="flex-grow-1">
                                  <a
                                    className="icon-btn btn-outline-light btn-sm pull-right"
                                    href="../assets/doc/messenger.html"
                                    target="_blank"
                                  >
                                    <i data-feather="download" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="notes">
                  <div className="notes-main">
                    <div className="theme-title">
                      <div className="d-flex">
                        <div>
                          <h2>Notes</h2>
                          <h4>Notes List</h4>
                        </div>
                        <div className="flex-grow-1">
                          <a
                            className="icon-btn btn-sm btn-outline-light close-apps"
                            href="#"
                          >
                            <i data-feather="x" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <form className="default-form">
                      <div className="form-group notes-content">
                        <select>
                          <option>Contact Or Channel</option>
                          <option>Weekdays (Mon-Fri)</option>
                          <option>Daily</option>
                          <option>Weekly (Custom)</option>
                        </select>
                        <ul>
                          <li>
                            <a
                              className="icon-btn btn-light button-effect btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#notesModal"
                            >
                              <i data-feather="plus" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </form>
                    <div className="notes-list">
                      <h6 className="mb-2 text-muted">
                        Joshephin Water.10 Jan
                      </h6>
                      <div className="d-flex">
                        <img
                          className="img-fluid me-3"
                          src="../assets/images/file_icons/5.png"
                          alt="media-img"
                        />
                        <div className="flex-grow-1">
                          <h5 className="mt-0">Joshephin Water</h5>
                        </div>
                      </div>
                      <h5 className="mb-2">Imporatnt project link</h5>
                      <h6 className="mb-2">
                        Please start testing task of your projects.
                      </h6>
                      <div className="forward-main">
                        <a className="line fa fa-mail-forward" href="#">
                          Forward{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="reminder">
                  <div className="reminder-main">
                    <div className="theme-title">
                      <div className="d-flex">
                        <div>
                          <h2>Reminders</h2>
                          <h4>Set reminders</h4>
                        </div>
                        <div className="flex-grow-1">
                          <a
                            className="icon-btn btn-sm btn-outline-light close-apps"
                            href="#"
                          >
                            <i data-feather="x" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="reminder-content tab-card">
                      <i className="ti-alarm-clock" />
                      <p>
                        Never forget important tasks. Set personal and group
                        reminders.
                      </p>
                      <a
                        className="setreminder btn btn-primary button-effect btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#setReminder"
                      >
                        set reminder
                      </a>
                    </div>
                    <div className="reminder-list-disp">
                      <h5>Themeforest Discusssion</h5>
                      <h6>Project Discussion</h6>
                      <span>11:22 PM | 15 FAB</span>
                      <ul className="reminder-disp">
                        <li className="reminder-list-toggle">
                          <a className="icon-btn bg-transparent" href="#">
                            <i data-feather="more-vertical" />
                          </a>
                          <div className="reminder-contentlist-toggle">
                            <ul>
                              <li>
                                <a className="icon-btn btn-sm" href="#">
                                  <i data-feather="trash" />
                                </a>
                                <h5>Delete</h5>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="reminder-list">
                      <button className="Show-reminder">Show Completed</button>
                      <button className="Hide-reminder">Hide Completed</button>
                      <div className="target-reminder-list">
                        <h5>Session Start</h5>
                        <h6>Project Discussion</h6>
                        <h6>05:22 PM | 1 JAN</h6>
                        <ul className="reminder-disp">
                          <li className="reminder-toggle">
                            <a
                              className="icon-btn bg-transparent"
                              href="#"
                              data-tippy-content="Quick action"
                            >
                              <i data-feather="more-vertical" />
                            </a>
                            <div className="reminder-content-toggle">
                              <ul>
                                <li>
                                  <a className="icon-btn btn-sm" href="#">
                                    <i data-feather="trash" />
                                  </a>
                                  <h5>Delete</h5>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="app-list">
              <ul className="app-list-ul custom-scroll">
                <li className="title apps-toggle">
                  <i data-feather="grid" />
                  <h5>Apps</h5>
                </li>
                <li>
                  <a
                    className="icon-btn btn-outline-success btn-sm button-effect"
                    href="files"
                  >
                    <i class="bi bi-file-earmark-arrow-up"></i>
                  </a>
                  <h5>Files </h5>
                </li>
                <li>
                  <a
                    className="icon-btn btn-outline-primary btn-sm button-effect"
                    href="notes"
                  >
                    <i class="bi bi-card-heading"></i>
                  </a>
                  <h5>Notes </h5>
                </li>
                <li>
                  <a
                    className="icon-btn btn-outline-danger btn-sm button-effect"
                    href="todo"
                  >
                    <i class="bi bi-journal-text"></i>
                  </a>
                  <h5>Todo </h5>
                </li>
                <li>
                  <a
                    className="icon-btn btn-outline-warning btn-sm button-effect"
                    href="reminder"
                  >
                    <i class="bi bi-alarm"></i>
                  </a>
                  <h5>Reminder</h5>
                </li>
                <li className="close-app">
                  <a
                    className="icon-btn btn-danger"
                    href="#"
                    onclick="removedefault()"
                  >
                    <i class="bi bi-x"></i>
                  </a>
                  <h5>close</h5>
                </li>
              </ul>
            </div>
          </aside>
   </>
  );
}

export default RightSidebar;
