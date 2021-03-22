import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const useStyles = makeStyles({
  content: {
    textAlign: "center",
  },
});
function Home() {
  const classes = useStyles();
  const history = useHistory();
  const { userId } = useContext(UserContext);
  useEffect(() => {
    console.log("Home was mounted");
    return () => {
      console.log("Home was unmounted");
    };
  }, []);
  const handleClick = () => {
    if (userId) {
      history.push("/resource");
    } else {
      history.push("/signin");
    }
  };
  return (
    <>
      <div className={classes.content}>
        <h1>write down how to use this application...</h1>
        <div onClick={handleClick}>Go ro resource page</div>
        <hr />
        <h1>admin messages</h1>
      </div>
    </>
  );
}

export default Home;
