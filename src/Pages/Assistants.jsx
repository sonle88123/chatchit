import React from "react";
import "../css/assistant.css";
import "../css/asst.css";
import Sidebar from "../components/Sidebar";

// Add this CSS rule to ensure the page width is 100%
const pageStyle = {
  width: "100%",
  margin: 0,
  padding: 0,
};

function Assistants() {
  return (
    <div style={pageStyle}>
      <Sidebar/>
      <div className="main-content" id="main-content">
        <header className="header">
          <a href="assistants">
            {" "}
            <img src="assets/images/logo/logo.png" alt="logo" />
          </a>
          <h1>
            <span className="highlight ">CHIT</span>
            <span>CHAT</span>
          </h1>
          <div className="menu-icon" onclick="toggleSidebar()">
            <i className="fa fa-bars" />
          </div>
        </header>
        <div className="banner">
          <img src="assets/images/contact/bannerhihi.png" alt="Banner Image" />
          <div className="banner-text">
            <h1>Welcome to CHITCHAT AI!</h1>
            <p>
              Your journey with AI starts here. Explore our AI assistants and
              chat now.
            </p>
          </div>
        </div>
        <h2>
          <span className="highlight">Explore</span> AI Assistants
        </h2>
        <div className="assistant-container">
          @foreach ($assistants as $assistant)
          <div className="assistant-card">
            <a href="{{ route('chat', ['assistant_id' => $assistant->id]) }}">
              <div className="image-container">
                <img
                  className="image-1"
                  src="{{ asset($assistant->image) }}"
                  alt="Assistant"
                />
                <div className="chat-icon">
                  <i className="fa fa-comment" />
                </div>
                <div className="status-icon online" />
              </div>
              <div className="assistant-info">
                <h3>
                  {"{"}
                  {"{"} $assistant-&gt;title {"}"}
                  {"}"}
                </h3>
                <div className="typing-container">
                  <span className="typing-text" />
                </div>
              </div>
            </a>
          </div>
          @endforeach
        </div>
        <footer className="footer">
          <div className="footer-banner">
            <span className="copyright">Trendi AI. All Rights Reserved</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Assistants;
