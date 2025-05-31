import Header from "../components/Header/Header";
import "./Layout.css";
import Summary from "../components/Summary/Summary";
import Skills from "../components/Skills/Skills";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        <div className="summary-skills-row">
          <Summary />
          <Skills />
        </div>
      </main>
    </div>
  );
};

export default Layout;
