import React from 'react'

function Sidebar() {
  return (
    <>
          <div className="sidebar" id="sidebar">
        <div className="close-btn" onclick="toggleSidebar()">
          <i className="fa fa-chevron-left" />
        </div>
        <div className="logo-wrapper">
          <a href="messenger.html">
            <img src="assets/images/contact/200w.gif" alt="logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="status" data-tippy-content="status">
              <div className="user-popup status one">
                <div>
                  <img
                    className="bg-img"
                    src="assets/images/avtar/2.jpg"
                    alt="Avatar"
                  />
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="favourite" data-tippy-content="Favourite">
              <i className="fa fa-star" /> Favourite
            </a>
          </li>
          <li>
            <a href="document" data-tippy-content="Document">
              <i className="fa fa-file-text" /> Document
            </a>
          </li>
          <li>
            <a href="contact-list" data-tippy-content="Contact List">
              <i className="fa fa-users" /> Contact List
            </a>
          </li>
          <li>
            <a href="notification" data-tippy-content="Notification">
              <i className="fa fa-bell" /> Notification
            </a>
          </li>
          <li>
            <a href="settings" data-tippy-content="Setting">
              <i className="fa fa-cog" /> Settings
            </a>
          </li>
          <li>
            <a href="#" data-tippy-content="Theme Mode">
              <i className="fa fa-moon-o" /> Theme Mode
            </a>
          </li>
          <li>
            <a href="{{ route('logout') }}" data-tippy-content="SignOut">
              <i className="fa fa-power-off" /> SignOut
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar