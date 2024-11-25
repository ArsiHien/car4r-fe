import { FC, ReactNode } from "react";

import { Header, Footer, MainSidebar } from "../../components";
const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <div className="fixed top-0 w-full z-10">
        <Header />
      </div>
      {/* <div className="flex">
      <SideBar/> */}
      <main className="pt-20">{children}</main>
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
