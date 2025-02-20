import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BellOutlined,
  EditOutlined,
  LeftOutlined,
  QuestionOutlined,
  RightOutlined,
  SettingOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const SideNavigation: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleResize = () => {
    setCollapsed(window.innerWidth <= 365);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: collapsed ? 50 : 200,
        maxWidth: "200px",
        borderRight: "1px solid #E2E2E2",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <Button
        className="collapseButton"
        style={{ width: collapsed ? 50 : 130, marginBottom: "10px" }}
        variant="solid"
        type="text"
        onClick={toggleCollapsed}
      >
        {collapsed ? (
          <RightOutlined />
        ) : (
          <>
            <LeftOutlined style={{ marginRight: "20px" }} /> Settings
          </>
        )}
      </Button>
      <ul className="sideNavigationUl">
        <li
          style={{
            fontWeight:
              location.pathname === "/edit-profile" ? "bold" : "normal",
          }}
        >
          <Link
            to="/edit-profile"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {collapsed ? (
              <EditOutlined />
            ) : (
              <div style={{ display: "flex" }}>
                <EditOutlined style={{ marginRight: "10px" }} />
                <p className="sideNavigationText">Edit Profile</p>
              </div>
            )}
          </Link>
        </li>
        <li
          style={{
            fontWeight:
              location.pathname === "/notifications" ? "bold" : "normal",
          }}
        >
          <Link
            to="/notifications"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {collapsed ? (
              <BellOutlined />
            ) : (
              <div style={{ display: "flex" }}>
                <BellOutlined style={{ marginRight: "10px" }} />
                <p className="sideNavigationText">Notifications</p>
              </div>
            )}
          </Link>
        </li>
        <li
          style={{
            fontWeight: location.pathname === "/security" ? "bold" : "normal",
          }}
        >
          <Link
            to="/security"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {collapsed ? (
              <UnlockOutlined />
            ) : (
              <div style={{ display: "flex" }}>
                <UnlockOutlined style={{ marginRight: "10px" }} />
                <p className="sideNavigationText">Security</p>
              </div>
            )}
          </Link>
        </li>
        <li
          style={{
            fontWeight: location.pathname === "/settings" ? "bold" : "normal",
          }}
        >
          <Link
            to="/settings"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {collapsed ? (
              <SettingOutlined />
            ) : (
              <div style={{ display: "flex" }}>
                <SettingOutlined style={{ marginRight: "10px" }} />
                <p className="sideNavigationText">Settings</p>
              </div>
            )}
          </Link>
        </li>
        <li
          style={{
            fontWeight: location.pathname === "/help" ? "bold" : "normal",
          }}
        >
          <Link to="/help" style={{ textDecoration: "none", color: "inherit" }}>
            {collapsed ? (
              <QuestionOutlined />
            ) : (
              <div style={{ display: "flex" }}>
                <QuestionOutlined style={{ marginRight: "10px" }} />
                <p className="sideNavigationText">Help</p>
              </div>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavigation;
