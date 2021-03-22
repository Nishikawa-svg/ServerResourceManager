import React, { createContext, useState, useEffect } from "react";
import { sampleUserList, sampleServerList } from "../sampleData/sampleData";

export const ServerContext = createContext({
  serverList: null,
  setServerList: () => {},
});

export const ServerProvider = (props) => {
  const [serverList, setServerList] = useState(sampleServerList);
  return (
    <ServerContext.Provider
      value={{
        serverList: serverList,
        setServerList: setServerList,
      }}
    >
      {props.children}
    </ServerContext.Provider>
  );
};
