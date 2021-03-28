import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { page1Routes } from "./Page1Routes";
import { Page2 } from "../Page2";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map(route => (
              <Route
                kye={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.chidren}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/Page2"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url}>
              <Page2 />
            </Route>
            <Route path={`${url}/detailA`}>
              <UrlParameter />
            </Route>
          </Switch>
        )}
      />
    </Switch>
  );
};
