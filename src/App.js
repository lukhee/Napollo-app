import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./components/general/GlobalStyle";
import theme from "./components/theme";
import DashBoard from "./components/layout/DashBoardLayout";
import Discoveries from "./components/views/discoveries";
import HotMusic from "./components/views/hotMusic";
import Music from "./components/views/music";
import Profile from "./components/views/profile";
import Expansion from "./components/views/expansion";
import NotFound from "./components/views/error/NotFoundView";

const App = () => {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
    <DashBoard>
      <Switch>
        <Route exact path='/' component={Discoveries} />
        <Route path="/hot_music" component={HotMusic} />
        <Route path="/music" component={Music} />
        <Route path="/expansion" component={Expansion} />
        <Route path="/profile" component={Profile} />
        <Route path="/discoveries" component={Discoveries} />
        <Route path="*" component={NotFound} />
      </Switch>
    </DashBoard>
      </ThemeProvider>
    </Router>
  );
};

export default App;
