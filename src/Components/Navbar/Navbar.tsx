import { Avatar, Space } from "antd";
import { Link } from "react-router";
import { BellOutlined, UserOutlined } from "@ant-design/icons";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="navBarUl">
          <li>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
            </div>
          </li>
          <li>
            <div className="navBarUserPanel">
              <p className="navBarUserCredits">100</p>
              <BellOutlined className="navBarUserNotifications" />
              <Space size={16} wrap>
                <Avatar className="navBarUserAvatar" icon={<UserOutlined />} />
              </Space>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
