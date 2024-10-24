import { FC, ReactNode } from "react";

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default DefaultLayout;
