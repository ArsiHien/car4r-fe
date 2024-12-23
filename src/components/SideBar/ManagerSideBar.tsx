import {
  BarChartOutlined,
  CarOutlined,
  HomeOutlined,
  ScheduleOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Menu, MenuProps } from "antd";
import React from "react";
import { TbLogout2 } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import routes from "../../config/routes";
import { useDispatch } from "react-redux";
import { logout } from "../../store/Authen/authenSlice";
import { clearUser } from "../../store/User/userSlice";

const ManagerSidebar: React.FC = () => {
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
          key: routes.manager.overview,
          label: <Link to={routes.manager.overview}>Overview</Link>,
          icon: <ScheduleOutlined />,
        },
        {
          key: routes.manager.dashboard,
          label: <Link to={routes.manager.dashboard}>Dashboard</Link>,
          icon: <BarChartOutlined />,
        },
        {
          key: routes.manager.cars,
          label: <Link to={routes.manager.cars}>Cars</Link>,
          icon: <CarOutlined />,
        },
        {
          key: routes.manager.staffManagement,
          label: <Link to={routes.manager.staffManagement}>Staffs</Link>,
          icon: <UserOutlined />,
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
          defaultSelectedKeys={[
            location.pathname.startsWith(routes.manager.cars)
              ? routes.manager.cars
              : location.pathname,
          ]}
          items={items}
          inlineIndent={8}
        />
      </ConfigProvider>
    </aside>
  );
};

export default ManagerSidebar;
