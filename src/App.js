import React from "react";
import SignIn  from "./components/SignIn";
import Topbar from "./components/Topbar";
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme"

const App = props => (
  <MuiThemeProvider theme={theme}>
    return (
    <div>
      <SignIn/>
      <Topbar />
    </div>
  );
  </MuiThemeProvider>
);

export default App;
