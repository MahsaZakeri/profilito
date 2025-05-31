import type { WithChildren } from "../models/WithChildren";
import Header from "../components/Header/Header";
import "./Layout.css";

const Layout = ({ children }: WithChildren) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">{children}</main>
    </div>
  );
};

export default Layout;
