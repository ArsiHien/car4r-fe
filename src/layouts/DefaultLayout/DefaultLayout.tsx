import { FC, ReactNode } from "react";

import { Header, Footer, SideBar } from "../../components";
const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      {/* <div className="flex">
      <SideBar/> */}
      <main>{children}</main>
      {/* </div> */}

      <Footer />
    </div>
  );
};

export default DefaultLayout;
