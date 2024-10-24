import { FC, ReactNode } from "react";

import { Header, Footer } from "../../components";
const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
