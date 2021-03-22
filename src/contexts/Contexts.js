import React, { createContext, useState, useEffect } from "react";
import { UserProvider } from "./UserContext";
import { ServerProvider } from "./ServerContext";

const Providers = (props) => {
  return (
    <UserProvider>
      <ServerProvider>{props.children}</ServerProvider>
    </UserProvider>
  );
};

export default Providers;
