import "./App.css";
//react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { css } from "@emotion/react";

import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Blog from "./components/Blog";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        setLoading(false);
      }
    };
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {loading ? (
              <div className="loader">
                <HashLoader color={"#36D7B7"} loading={loading} size={150} />
              </div>
            ) : (
              <>
                {" "}
                <Header />
                <LandingSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
              </>
            )}
          </Route>
          <Route path="/blog">
            <Header />
            <Blog />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
