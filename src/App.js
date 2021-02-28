import "./assets/styles/global.scss";
import { Redirect, Switch, Route } from "wouter";
import { Login, Register, Home, Profile, TemplateTasks } from "./pages";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/template/:template" component={TemplateTasks} />
        <Redirect from="*" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
