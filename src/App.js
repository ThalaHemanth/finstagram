import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./shared/Navbar";
import NotFound from "./pages/not-found";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Feed from "./pages/feed";
import Explore from "./pages/explore";
import ProfilePage from "./pages/profile";
import EditProfile from "./pages/edit-profile";
import { AuthContext } from "./auth";

function App() {
  const { authState } = React.useContext(AuthContext);
  console.log(authState);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/explore" component={Explore} />
        <Route exact path="/:username" component={ProfilePage} />
        <Route path="/accounts/edit" component={EditProfile} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;