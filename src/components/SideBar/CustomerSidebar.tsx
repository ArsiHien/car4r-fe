import { HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { ConfigProvider, Menu, MenuProps } from "antd";
import React from "react";
import { TbLogout2 } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import routes from "../../config/routes";
import { CgProfile } from "react-icons/cg";
import { BsClipboard2Check } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { logout } from "../../store/Authen/authenSlice";
import { clearUser } from "../../store/User/userSlice";

const CustomerSidebar: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    dispatch(clearUser());
  };

  type MenuItem = Required<MenuProps>["items"][number];
  const items: MenuItem[] = [
    {
      key: "main",
      label: "MAIN MENU",
      type: "group",
      children: [
        {
          key: routes.home,
          label: <Link to={routes.home}>Home</Link>,
          icon: <HomeOutlined />,
        },
        {
          key: routes.customer.profile,
          label: <Link to={routes.customer.profile}>Profile</Link>,
          icon: <CgProfile />,
        },
        {
          key: routes.customer.orderManagement,
          label: <Link to={routes.customer.orderManagement}>Orders</Link>,
          icon: <BsClipboard2Check />,
        },
      ],
    },
    {
      key: "settings",
      label: "SETTINGS",
      type: "group",
      children: [
        { key: "settings", label: "Settings", icon: <SettingOutlined /> },
        {
          key: "logout",
          label: (
            <Link to="/login" onClick={handleLogout}>
              Log out
            </Link>
          ),
          icon: <TbLogout2 />,
        },
      ],
    },
  ];

  return (
    <aside className="fixed top-20 rounded-lg p-6 w-64 h-screen bg-gray-100 flex flex-col justify-between">
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              padding: 0,
              margin: 0,
              itemPaddingInline: 0,
              paddingContentHorizontal: 0,
              colorText: "#4b5563",
              fontSize: 16,
              iconSize: 16,
            },
          },
        }}
      >
        <Menu
          mode="inline"
          className="bg-inherit"
          selectedKeys={[location.pathname]}
          items={items}
          inlineIndent={8}
        />
      </ConfigProvider>
    </aside>
  );
};

export default CustomerSidebar;
