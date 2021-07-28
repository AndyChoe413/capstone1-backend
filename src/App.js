// import Single from "./components/pages/single/Single";
import TopBar from "../src/components/topbar/TopBar"
import Home from "./components/pages/home/Home.jsx"
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
// import Settings from "./components/pages/settings/Settings";
import Write from "./components/pages/write/Write.jsx"
import Single from "./components/pages/single/Single.jsx"
// import Write from "../src/components/pages/write/Write";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {

  const user = false;

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/register">
          {user ? <Home/> : <Register/>}
        </Route>
         <Route exact path="/login">
          {user ? <Home/> : <Login/>}
        </Route>
        <Route exact path="/write">
          {user ? <Write/> : <Register/>}
        </Route>
        <Route exact path="/settings">
           {user ? <settings/> : <Register/>}
        </Route>
         <Route exact path="/post/:postId">
          <Single/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
