import "./assets/styles/global.scss";
import { Redirect, Switch, Route } from "wouter";
import { Login, Register } from "./pages";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect from="*" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
