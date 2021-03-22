import React, { useState, useContext, useEffect } from "react";
import { Button, Grid, Paper, makeStyles } from "@material-ui/core";
import { UserContext } from "../contexts/UserContext";
import { ServerContext } from "../contexts/ServerContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    height: 140,
    width: 140,
    margin: 0.3,
    border: "solid 1px red",
    borderRadius: "0% 0% 0% 0%",
  },
});

function Resource() {
  const { userId, userList, setUserId } = useContext(UserContext);
  const { serverList, setServerList } = useContext(ServerContext);
  const history = useHistory();
  const classes = useStyles();
  //  console.log(userId, userList);
  useEffect(() => {
    console.log("resource was mounted");
    if (userId > userList.length || userId === null) {
      setUserId(null);
      sessionStorage.removeItem("srmUserId");
      history.push("/");
    }
    return () => {
      console.log("resource was unmounted");
    };
  }, []);
  const handleClick = (id, idx) => {
    let newServerList = [...serverList];
    if (newServerList[id - 1].coreUser[idx] === null) {
      newServerList[id - 1].coreUser[idx] = userId;
    } else if (newServerList[id - 1].coreUser[idx] === userId) {
      newServerList[id - 1].coreUser[idx] = null;
    }
    setServerList(newServerList);
  };
  return (
    <>
      <h1>Resource page</h1>
      {userList.length < userId || userId === null ? (
        <h1>please sign in</h1>
      ) : (
        <h1>hey {userList[userId - 1].userName}</h1>
      )}
      {serverList.map((server) => (
        <div key={server.serverId}>
          <Grid container justify="center">
            <Grid item xs={11}>
              <h1>{server.serverAddress}</h1>
              <Grid container justify="flex-start">
                {server.coreUser.map((core, index) => (
                  <Paper
                    className={classes.paper}
                    key={index}
                    onClick={() => handleClick(server.serverId, index)}
                  >
                    <Grid container>core{index + 1}</Grid>
                    <Grid container justify="center">
                      {core && <div>{userList[core - 1].userName}</div>}
                    </Grid>
                  </Paper>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      ))}
    </>
  );
}

function ResourcePanel() {
  return <h1>jj</h1>;
}
export default Resource;
