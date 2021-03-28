import React from "react";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    chidren: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    chidren: <Page1DetailA />
  }
];
