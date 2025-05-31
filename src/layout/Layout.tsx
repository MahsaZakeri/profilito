import Header from "../components/Header/Header";
import "./Layout.css";
import Summary from "../components/Summary/Summary";
import Skills from "../components/Skills/Skills";
import ExperienceTimeline from "../components/ExperienceTimeline/ExperienceTimeline";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        <div className="summary-skills-row">
          <Summary />
          <Skills />
        </div>
        <ExperienceTimeline />
      </main>
    </div>
  );
};

export default Layout;
