import React from "react";
import "./App.css";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Home from "./components/Home/home";
import Weather from "./components/Weather/weather";

export default function App() {
  const routes = ["/home", "/weather"];
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/"
          render={(history) => (
            <AppBar>
              <Tabs
                value={
                  history.location.pathname !== "/"
                    ? history.location.pathname
                    : false
                }
              >
                {console.log(history.location.pathname)}
                <Tab
                  value={routes[0]}
                  label="home"
                  component={Link}
                  to={routes[0]}
                />
                <Tab
                  value={routes[1]}
                  label="weather"
                  component={Link}
                  to={routes[1]}
                />
              </Tabs>
            </AppBar>
          )}
        />

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/weather" component={Weather} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
