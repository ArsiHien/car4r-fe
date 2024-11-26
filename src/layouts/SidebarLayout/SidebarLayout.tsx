import { Children, FC, ReactNode } from "react";
import { Footer, Header } from "../../components";

const SidebarLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <div className="fixed top-0 w-full z-10">
        <Header />
      </div>
      <main className="mt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default SidebarLayout;
