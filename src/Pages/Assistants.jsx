import React from "react";

function Assistants() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        href="assets/images/favicon/favicon.png"
        type="image/x-icon"
      />
      <link
        rel="shortcut icon"
        href="assets/images/favicon/favicon.png"
        type="image/x-icon"
      />
      <title>Assistants</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="resources/css/app.css"
        media="screen"
        id="color"
      />
      <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            color: #333;\n            background-color: #f5f5f5;\n            display: flex;\n            min-height: 100vh;\n            overflow: hidden;\n        }\n\n        .header {\n            background-color: #fff;\n            color: white;\n            padding: 20px;\n            text-align: center;\n            width: 100%;\n            position: relative;\n            z-index: 1;\n        }\n\n        .header h1 {\n            margin: 0;\n        }\n\n        .highlight {\n            color: black;\n            font-weight: bold;\n        }\n\n        .header span {\n            color: #333;\n        }\n\n        .main-content {\n            padding: 20px;\n            text-align: center;\n            flex: 1;\n            transition: margin-left 0.3s ease;\n            margin-left: 0;\n            /* Reset margin for main content */\n        }\n\n        .assistant-container {\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: center;\n            gap: 20px;\n        }\n\n        .assistant-card {\n            background-color: white;\n            border-radius: 12px;\n            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n            overflow: hidden;\n            width: 300px;\n            text-align: center;\n            transition: transform 0.3s ease, box-shadow 0.3s ease;\n            position: relative;\n            /* Cần thiết để định vị biểu tượng trò chuyện */\n            margin: 15px;\n        }\n\n        .assistant-card:hover {\n            transform: scale(1.05);\n            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);\n        }\n\n        .assistant-card img {\n            width: 100%;\n            /* Đảm bảo ảnh chiếm toàn bộ chiều rộng card */\n            height: 70%;\n            /* Ảnh chiếm 70% chiều cao của thẻ card */\n            object-fit: cover;\n            /* Đảm bảo ảnh không bị méo và cắt đúng tỷ lệ */\n            display: block;\n        }\n\n        .assistant-card img:hover {\n            opacity: 0.8;\n        }\n\n        .assistant-card h3 {\n            margin: 10px 0;\n            font-size: 18px;\n            color: #282c34;\n        }\n\n        .sidebar {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 300px;\n            height: 100%;\n            background-color: #1e1e1e;\n            color: #ffffff;\n            transform: translateX(-100%);\n            transition: transform 0.3s ease, box-shadow 0.3s ease;\n            z-index: 999;\n            overflow-y: auto;\n            padding-top: 20px;\n            box-shadow: 4px 0 10px rgba(0, 0, 0, 0.5);\n        }\n\n        .sidebar-header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 0 20px;\n            background-color: #333;\n            border-bottom: 1px solid #444;\n            position: relative;\n        }\n\n        .close-btn {\n            position: absolute;\n            top: 50%;\n            right: -50px;\n            /* Đưa nút ra ngoài sidebar một chút để dễ nhấn */\n            transform: translateY(-50%);\n            background-color: #61dafb;\n            /* Màu nền của nút */\n            color: white;\n            /* Màu chữ của nút */\n            padding: 15px;\n            /* Tăng khoảng cách xung quanh */\n            border-radius: 50%;\n            cursor: pointer;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n            transition: background-color 0.3s, box-shadow 0.3s;\n            z-index: 1000;\n            font-size: 24px;\n            /* Tăng kích thước font để biểu tượng lớn hơn */\n            width: 50px;\n            /* Đặt chiều rộng của nút */\n            height: 50px;\n            /* Đặt chiều cao của nút */\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n\n        .close-btn:hover {\n            background-color: #4a90e2;\n            /* Màu nền khi hover */\n            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);\n        }\n\n        .close-btn i {\n            font-size: 24px;\n        }\n\n        .sidebar.show {\n            transform: translateX(0);\n        }\n\n        .sidebar .logo-wrapper {\n            text-align: center;\n            margin-bottom: 20px;\n            border-bottom: 2px solid #444;\n            padding-bottom: 20px;\n        }\n\n        .sidebar .logo-wrapper img {\n            width: 120px;\n        }\n\n        .sidebar ul {\n            list-style: none;\n            padding: 0;\n        }\n\n        .sidebar ul li {\n            margin: 0;\n        }\n\n        .sidebar ul li a {\n            display: flex;\n            align-items: center;\n            color: #ffffff;\n            text-decoration: none;\n            padding: 15px 20px;\n            transition: background-color 0.3s, color 0.3s;\n            border-radius: 5px;\n            /* Bo góc để làm mềm các liên kết */\n        }\n\n        .sidebar ul li a:hover {\n            background-color: #333;\n            /* Màu nền khi hover */\n            color: #61dafb;\n            /* Màu chữ khi hover */\n        }\n\n        .sidebar ul li a i {\n            margin-right: 10px;\n            /* Khoảng cách giữa biểu tượng và chữ */\n        }\n\n        .sidebar ul li a .user-popup {\n            display: flex;\n            align-items: center;\n        }\n\n        .sidebar ul li a .user-popup img {\n            width: 30px;\n            height: 30px;\n            border-radius: 50%;\n            margin-right: 10px;\n        }\n\n        .menu-icon {\n            font-size: 24px;\n            color: #1e1e1e;\n            cursor: pointer;\n            transition: color 0.3s;\n            position: absolute;\n            top: 20px;\n            left: 20px;\n            z-index: 1000;\n        }\n\n        .menu-icon:hover {\n            color: #61dafb;\n        }\n\n        .footer {\n            background-color: #282c34;\n            color: white;\n            text-align: center;\n            padding: 10px;\n            position: relative;\n        }\n\n        .header h1 {\n            margin: 0;\n        }\n\n        .highlight {\n            color: black;\n            font-weight: bold;\n        }\n\n        .header span {\n            color: #333;\n        }\n\n        .main-content.shift {\n            margin-left: 250px;\n            /* Adjust to match the width of the sidebar */\n        }\n\n        .assistant-card {\n            border-radius: 8px;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            overflow: hidden;\n            width: 100%;\n            /* Chiếm toàn bộ chiều rộng container cha */\n            max-width: 300px;\n            /* Đặt chiều rộng tối đa cho card */\n            height: 400px;\n            /* Đặt chiều cao cho card để ảnh và thông tin hiển thị cân đối */\n            position: relative;\n            transition: transform 0.3s ease, box-shadow 0.3s ease;\n        }\n\n        .assistant-card:hover {\n            transform: scale(1.05);\n            /* Phóng to card khi hover */\n            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);\n            /* Tăng độ bóng khi hover */\n        }\n\n        .assistant-card img {\n            width: 100%;\n            /* Chiều rộng ảnh tràn khung */\n            height: 100%;\n            /* Chiều cao ảnh tràn khung */\n            object-fit: cover;\n        }\n\n        .assistant-info {\n            padding: 15px;\n            background-color: #fff;\n            /* Nền trắng cho thông tin */\n            bottom: 0;\n            /* Cố định ở dưới cùng */\n            position: absolute;\n            /* Đặt ở vị trí tuyệt đối so với thẻ chứa */\n            border-radius: 0 0 8px 8px;\n            /* Bo tròn góc dưới của thẻ */\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            /* Đổ bóng nhẹ */\n            transition: background-color 0.3s ease, transform 0.3s ease;\n\n            color: #333;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            width: 100%;\n            /* Chiếm toàn bộ chiều rộng thẻ */\n        }\n\n        .assistant-info h3 {\n            margin: 0;\n            font-size: 20px;\n            color: #333;\n            font-weight: 600;\n            transition: color 0.3s ease;\n        }\n\n        .assistant-info p {\n            margin: 5px 0 0;\n            font-size: 14px;\n            color: #666;\n        }\n\n        .assistant-info::before {\n            content: "";\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 5px;\n            height: 100%;\n            background-color: #61dafb;\n            border-top-left-radius: 8px;\n            border-bottom-left-radius: 8px;\n            transition: background-color 0.3s ease;\n        }\n\n        .assistant-info:hover {\n            background-color: #f0f0f0;\n            transform: translateY(-5px);\n            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n        }\n\n        .assistant-info:hover h3 {\n            color: #61dafb;\n        }\n\n        .image-container {\n            position: relative;\n            width: 100%;\n            height: 350px;\n            /* Chiều cao lớn hơn để hình ảnh dài hơn */\n            overflow: hidden;\n        }\n\n        .image-container img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n            transition: opacity 0.3s ease;\n        }\n\n        .image-container img:hover {\n            transform: scale(1.1);\n            /* Phóng to hình ảnh khi hover */\n        }\n\n        .chat-icon {\n            position: absolute;\n            top: 10px;\n            right: 10px;\n            background-color: #61dafb;\n            /* Màu nền của biểu tượng */\n            border-radius: 50%;\n            /* Hình tròn cho nền biểu tượng */\n            padding: 10px;\n            /* Khoảng cách xung quanh biểu tượng */\n            color: white;\n            /* Màu của biểu tượng */\n            font-size: 18px;\n            /* Kích thước của biểu tượng */\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n            /* Đổ bóng cho biểu tượng */\n            transition: background-color 0.3s ease, box-shadow 0.3s ease;\n        }\n\n        .chat-icon:hover {\n            background-color: #4a90e2;\n            /* Màu nền khi hover */\n            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);\n            /* Tăng độ bóng khi hover */\n        }\n\n        /* .image-2 {\n            opacity: 0;\n        } */\n\n        .image-container:hover .image-1 {\n            opacity: 0, 9;\n        }\n\n        /* .image-container:hover .image-2 {\n            opacity: 1;\n        } */\n        .status-icon {\n            position: absolute;\n            top: 10px;\n            left: 10px;\n            width: 20px;\n            height: 20px;\n            border-radius: 50%;\n            border: 2px solid white;\n            /* Đường viền của biểu tượng trạng thái */\n            background-color: green;\n            /* Màu nền của trạng thái hoạt động */\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n        }\n\n        .status-icon.online {\n            background-color: #4CAF50;\n            /* Màu xanh cho trạng thái trực tuyến */\n        }\n\n        .status-icon.offline {\n            background-color: #F44336;\n            /* Màu đỏ cho trạng thái ngoại tuyến */\n        }\n\n        h2 {\n            font-size: 2.5rem;\n            /* Kích thước chữ lớn */\n            font-weight: bold;\n            /* Chữ đậm */\n            color: #333;\n            /* Màu chữ cơ bản */\n            text-align: center;\n            /* Căn giữa */\n            margin: 30px 0;\n            /* Khoảng cách trên và dưới */\n            position: relative;\n            /* Cần thiết để thêm hiệu ứng chồng chéo */\n            text-transform: uppercase;\n            /* Chữ hoa */\n        }\n\n        h2 span {\n            background: linear-gradient(45deg, #ff6b6b, #f06595);\n            /* Gradient nền cho chữ */\n            -webkit-background-clip: text;\n            /* Cắt nền theo chữ */\n            -webkit-text-fill-color: transparent;\n            /* Chữ trong suốt để hiện gradient */\n            padding: 0 5px;\n            /* Khoảng cách bên trong chữ */\n            border-radius: 5px;\n            /* Bo tròn góc cho chữ */\n            display: inline-block;\n            /* Cho phép áp dụng padding */\n        }\n\n        h2 .highlight {\n            color: white;\n            /* Màu trắng cho phần chữ nổi bật */\n            background: linear-gradient(45deg, #61dafb, #4a90e2);\n            /* Gradient sáng cho chữ */\n            -webkit-background-clip: text;\n            /* Cắt nền theo chữ */\n            -webkit-text-fill-color: transparent;\n            /* Chữ trong suốt để hiện gradient */\n            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);\n            /* Hiệu ứng bóng chữ sáng */\n        }\n\n        h2::before {\n            content: \'\';\n            /* Tạo một phần tử giả */\n            position: absolute;\n            left: 0;\n            right: 0;\n            bottom: -10px;\n            /* Đưa phần tử này xuống dưới tiêu đề */\n            height: 5px;\n            /* Chiều cao của đường viền */\n            background: linear-gradient(90deg, #61dafb, #4a90e2);\n            /* Đường viền gradient */\n            border-radius: 5px;\n            /* Bo tròn góc đường viền */\n        }\n\n        h2::after {\n            content: \'\';\n            /* Tạo một phần tử giả */\n            position: absolute;\n            left: 50%;\n            bottom: -20px;\n            /* Đưa phần tử này xuống dưới tiêu đề */\n            width: 60px;\n            /* Chiều rộng của chấm tròn */\n            height: 5px;\n            /* Chiều cao của chấm tròn */\n            background-color: #61dafb;\n            /* Màu chấm tròn */\n            border-radius: 50%;\n            /* Bo tròn để tạo chấm tròn */\n            transform: translateX(-50%);\n            /* Căn giữa chấm tròn */\n        }\n\n        h2 {\n            animation: fadeIn 1s ease-out;\n            /* Hiệu ứng fade-in cho tiêu đề */\n        }\n\n        @keyframes fadeIn {\n            from {\n                opacity: 0;\n                transform: translateY(-20px);\n            }\n\n            to {\n                opacity: 1;\n                transform: translateY(0);\n            }\n        }\n\n        .header h1 {\n            margin: 0;\n            font-size: 2.5rem;\n            /* Kích thước font chung */\n        }\n\n        .header .highlight {\n            font-weight: bold;\n            /* Đậm chữ "CHIT" */\n            color: #333;\n            /* Màu sắc nổi bật */\n            /* text-shadow: 0 0 5px rgba(0, 150, 255, 0.6); */\n            /* Hiệu ứng sáng nhấp nháy */\n            margin-right: -0.1em;\n            /* Giảm khoảng cách bên phải chữ "CHIT" */\n        }\n\n        .header span:not(.highlight) {\n            font-weight: normal;\n            /* Chữ "CHAT" không đậm */\n            color: #333;\n            /* Màu sắc chữ "CHAT" */\n        }\n\n        .header h1 span {\n            margin: 0;\n            /* Loại bỏ khoảng cách mặc định */\n            letter-spacing: -0.05em;\n            /* Giảm khoảng cách giữa các chữ cái */\n        }\n\n        /* Đặt kích thước và căn chỉnh cho logo */\n        .logo-wrapper {\n            text-align: center;\n            margin-bottom: 20px;\n            position: relative;\n        }\n\n        .logo-wrapper img {\n            width: 100px;\n            transition: transform 0.3s ease, box-shadow 0.3s ease;\n        }\n\n        /* Nếu cần thêm hiệu ứng khác khi mở sidebar */\n        .sidebar.show .logo-wrapper img {\n            /* Ví dụ: thêm bóng đổ khi sidebar mở */\n            box-shadow: 0 0 15px rgba(0, 150, 255, 0.5);\n        }\n\n        .typing-container {\n            position: relative;\n            margin-top: 10px;\n            text-align: center;\n        }\n\n        .typing-text {\n            font-size: 16px;\n            color: #666;\n            position: relative;\n            display: inline-block;\n            white-space: nowrap;\n        }\n\n        .typing-text::after {\n            content: \'|\';\n            position: absolute;\n            right: 0;\n            bottom: 0;\n            animation: blink-caret 0.8s step-end infinite;\n        }\n\n        @keyframes blink-caret {\n\n            from,\n            to {\n                border-color: transparent;\n            }\n\n            50% {\n                border-color: black;\n            }\n        }\n\n        footer {\n            background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.7), rgba(0, 123, 255, 0.7) 37.35%, rgba(0, 123, 255, 0.7) 62.65%, rgba(255, 255, 255, 0.7));\n            background-color: #f8f9fa;\n            /* Fallback color */\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            border-top: 1px solid #e7e7e7;\n            height: 300px;\n            padding: 40px 20px;\n            box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);\n            height: 200px;\n        }\n\n        .footer-banner {\n            text-align: center;\n            max-width: 500px;\n            margin: 0 auto;\n        }\n\n        /* Banner Section */\n        .banner {\n            position: relative;\n            width: 100%;\n            height: 600px;\n            overflow: hidden;\n            margin-bottom: 20px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            background-color: #f5f5f5;\n            /* Màu nền nếu không có ảnh */\n        }\n\n        .banner img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n            /* Căn chỉnh hình ảnh phù hợp */\n            opacity: 0.8;\n            /* Điều chỉnh độ trong suốt */\n        }\n\n        .banner-text {\n            position: absolute;\n            color: white;\n            text-align: center;\n            background-color: rgba(0, 0, 0, 0.5);\n            /* Nền đen mờ cho văn bản */\n            padding: 20px;\n            border-radius: 10px;\n        }\n\n        .banner-text h2 {\n            font-size: 36px;\n            margin: 0;\n        }\n\n        .banner-text p {\n            font-size: 18px;\n            margin-top: 10px;\n        }\n\n        #main-content {\n            max-height: 90vh;\n            /* Chiều cao tối đa bằng 90% chiều cao cửa sổ */\n            overflow-y: auto;\n            /* Thanh cuộn theo chiều dọc */\n        }\n\n        /* Tùy chỉnh thanh cuộn */\n        #main-content::-webkit-scrollbar,\n        .assistant-container::-webkit-scrollbar {\n            width: 8px;\n        }\n\n        #main-content::-webkit-scrollbar-thumb,\n        .assistant-container::-webkit-scrollbar-thumb {\n            background-color: #888;\n            border-radius: 10px;\n        }\n\n        #main-content::-webkit-scrollbar-thumb:hover,\n        .assistant-container::-webkit-scrollbar-thumb:hover {\n            background-color: #555;\n        }\n\n        @media (max-width: 768px) {\n            #main-content {\n                max-height: 80vh;\n            }\n\n            .assistant-container {\n                max-height: 300px;\n            }\n        }\n    ',
        }}
      />
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
    </>
  );
}

export default Assistants;
