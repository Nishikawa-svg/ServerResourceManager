import React, { createContext, useState, useEffect } from "react";
import { sampleUserList, sampleServerList } from "../sampleData/sampleData";

export const UserContext = createContext({
  userId: null,
  setUserId: () => {},
  userList: null,
  setUserList: () => {},
});

export const UserProvider = (props) => {
  const getId = sessionStorage.getItem("srmUserId");
  let initialId = null;
  if (getId) {
    initialId = getId;
  }
  console.log("initialId ->", initialId);

  const [userId, setUserId] = useState(initialId);
  const [userList, setUserList] = useState(sampleUserList);

  useEffect(() => {
    console.log("contexts was mounted");
    return () => {
      console.log("contexts was unmounted");
    };
  }, []);
  return (
    <UserContext.Provider
      value={{
        userId: userId,
        setUserId: setUserId,
        userList: userList,
        setUserList: setUserList,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
