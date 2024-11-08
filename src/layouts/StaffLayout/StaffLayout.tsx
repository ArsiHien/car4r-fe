import { FC, ReactNode } from "react";

import { Header, Footer, StaffSidebar } from "../../components";
const StaffLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex">
      <StaffSidebar/>
      <main>{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default StaffLayout;
