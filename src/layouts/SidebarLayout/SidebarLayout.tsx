import { FC, ReactNode } from "react";
import { Footer, Header } from "../../components";

import { Layout } from "antd";
const { Sider, Content } = Layout;

const SidebarLayout: FC<{ children: ReactNode; sidebar?: ReactNode }> = ({
  children,
  sidebar,
}) => {
  return (
    <div>
      <div className="fixed top-0 w-full z-10">
        <Header />
      </div>
      <Sider theme="light" className="w-64">
        {sidebar}
      </Sider>
      <Content className="mt-24 ml-72 mr-4 mb-8">
        {children}
      </Content>
      <hr />
      <div className="ml-64">
        <Footer />
      </div>
    </div>
  );
};

export default SidebarLayout;
