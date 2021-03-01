import React from "react";
import { Redirect, Switch, Route } from "wouter";
import { Login, Register, Home, Profile, TemplateTasks } from "./pages";
import StoreProvider from "./store";

function App() {
  return (
    <StoreProvider>
      <div className="app">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/template/:index" component={TemplateTasks} />
          <Redirect from="*" to="/login" />
        </Switch>
      </div>
    </StoreProvider>
  );
}

export default App;
