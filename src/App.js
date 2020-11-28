import Home from "./components/Home";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Work from "../src/pages/Work";
import ErrorPage from "../src/pages/ErrorPage";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route exact path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
