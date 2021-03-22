import React, { useState, useContext } from "react";
import { makeStyles, Grid, Paper, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { UserContext } from "../contexts/UserContext";

const useStyles = makeStyles({
  headerPaper: {
    backgroundColor: "#aaa",
    height: 60,
  },
  headerTitle: {
    fontSize: 24,
    textAlign: "center",
    paddingTop: 10,
  },
  link: {
    textDecoration: "none",
    color: "blue",
    verticalAlign: "middle",
  },
});

function Header() {
  const { userId, userList, setUserId } = useContext(UserContext);
  const history = useHistory();
  const classes = useStyles();
  const signOut = () => {
    setUserId(null);
    sessionStorage.removeItem("srmUserId");
    history.push("/");
  };
  return (
    <>
      <Paper className={classes.headerPaper}>
        <Grid container justify="center">
          <Grid item xs={3}>
            {userId > 0 && (
              <Button
                className={classes.signOutButton}
                variant="outlined"
                onClick={signOut}
              >
                <div>Sign out</div>
                <ExitToAppIcon />
              </Button>
            )}
          </Grid>
          <Grid item xs={6}>
            <Link to="/" className={classes.link}>
              <div className={classes.headerTitle}>Server Resource Manager</div>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Grid container justify="center">
              {userId === null || userList.length < userId ? (
                <SignInButton />
              ) : (
                <UserStatusButton userName={userList[userId - 1].userName} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

function SignInButton() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/signin");
  };
  return <Button onClick={handleClick}>sing in</Button>;
}

function UserStatusButton({ userName }) {
  return (
    <Button>
      <Grid container>
        <AccountCircleIcon />
        <div>{userName}</div>
      </Grid>
    </Button>
  );
}

export default Header;
