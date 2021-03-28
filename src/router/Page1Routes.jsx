import React from "react";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    chidren: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    chidren: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    chidren: <Page1DetailB />
  }
];
