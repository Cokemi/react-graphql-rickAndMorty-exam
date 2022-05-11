import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";

//import {Button} from "@mui/material";
import RMCharacters from "../rmcharacters/";

function Main() {
  return (
    <BrowserRouter>{
      /*  <Box className={classes.root}>
          <CssBaseline />
          <Topbar /> */
    }
    <Switch>
      <Route exact path="/">

        <Link to="/rmcharacters" style={{ margin: "100px", backgroundColor: "yellow" }}>
          Click here to see the Rick and Morty characters
        </Link>
      </Route>
      <Route path="/rmcharacters">
        <RMCharacters />
      </Route>
    </Switch>{
      /* </Box> */}
    </BrowserRouter>
  );}

export default Main;

