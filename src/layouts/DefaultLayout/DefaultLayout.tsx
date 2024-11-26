import { FC, ReactNode } from "react";

import { Header, Footer } from "../../components";
const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <div className="fixed top-0 w-full z-10">
        <Header />
      </div>
      <main className="p-20">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
