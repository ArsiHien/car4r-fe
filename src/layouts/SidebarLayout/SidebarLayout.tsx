import { FC, ReactNode } from "react";
import { Footer, Header } from "../../components";

const SidebarLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default SidebarLayout;
