import { FC, ReactNode } from "react";

const SidebarLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <aside>Sidebar</aside>
      <main>{children}</main>
    </div>
  );
};

export default SidebarLayout;
