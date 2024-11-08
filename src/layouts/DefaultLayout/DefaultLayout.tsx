import { FC, ReactNode } from "react";

import { Header, Footer, MainSidebar } from "../../components";
const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex">
      <MainSidebar/>
      <main>{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
