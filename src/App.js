import "./App.css";
//react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <LandingSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
