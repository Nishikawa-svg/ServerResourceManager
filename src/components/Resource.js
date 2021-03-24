import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Grid,
  Paper,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
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
  const [datetime, setDatetime] = useState();
  const history = useHistory();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [selectCore, setSelectCore] = useState({
    serverId: null,
    coreId: null,
  });
  const handleClickOpen = (serverId, coreId) => {
    //console.log(serverId, coreId);
    setSelectCore({ serverId: serverId, coreId: coreId });
    setOpen(true);
  };

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
  const handleClick = () => {
    let id = selectCore.serverId;
    let idx = selectCore.coreId;
    console.log(userId);
    console.log("k", id, idx);
    let newServerList = [...serverList];
    if (newServerList[id - 1].coreUser[idx] === null) {
      newServerList[id - 1].coreUser[idx] = parseInt(userId);
    } else if (newServerList[id - 1].coreUser[idx] === parseInt(userId)) {
      newServerList[id - 1].coreUser[idx] = null;
    }
    setServerList(newServerList);
    setOpen(false);
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
              <Grid container justify="center">
                <h1>{server.serverAddress}</h1>
              </Grid>
              <Grid container justify="center">
                {server.coreUser.map((core, index) => (
                  <Paper
                    className={classes.paper}
                    key={index}
                    onClick={() => handleClickOpen(server.serverId, index)}
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
      <TimeSelectDialog
        open={open}
        handleClick={handleClick}
        setOpen={setOpen}
        selectCore={selectCore}
      />
      <input
        type="datetime-local"
        onChange={(e) => setDatetime(e.target.value)}
      />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

function TimeSelectDialog({ open, setOpen, selectCore, handleClick }) {
  const { userId, userList, setUserId } = useContext(UserContext);
  const { serverList, setServerList } = useContext(ServerContext);
  const handleClose = () => {
    setOpen(false);
  };

  const StatusJudge = () => {
    if (
      serverList[selectCore.serverId - 1].coreUser[selectCore.coreId] === null
    ) {
      return (
        <>
          <DialogTitle>You can use</DialogTitle>
          <DialogContent>unused core</DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClick}>Use</Button>
          </DialogActions>
        </>
      );
    } else if (
      serverList[selectCore.serverId - 1].coreUser[selectCore.coreId] ===
      parseInt(userId)
    ) {
      return (
        <>
          <DialogTitle>You are using</DialogTitle>
          <DialogContent>Do you want to complete it</DialogContent>
          <DialogActions>
            <Button onClick={handleClick}>Complete</Button>
          </DialogActions>
        </>
      );
    } else {
      return (
        <>
          <DialogTitle>Another user using</DialogTitle>
          <DialogContent>used core</DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>OK</Button>
          </DialogActions>
        </>
      );
    }
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <StatusJudge />
    </Dialog>
  );
}

function ResourcePanel() {
  return <h1>jj</h1>;
}
export default Resource;
