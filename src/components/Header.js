import React, { useState, useContext } from "react";
import { makeStyles, Grid, Paper, Button, IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { UserContext } from "../contexts/UserContext";

const useStyles = makeStyles({
  headerPaper: {
    backgroundColor: "#aaa",
    minHeight: 60,
  },
  headerTitle: {
    fontSize: 24,
    textAlign: "center",
    paddingTop: 10,
  },
  headerButtonContainer: {
    marginTop: 10,
  },
  headerButton: {
    textTransform: "none",
  },

  headerButtonIcon: {
    marginRight: 10,
  },
  signOutButtonContanier: {
    marginTop: 10,
    marginLeft: 20,
  },
  signOutButton: {
    textTransform: "none",
  },
  signOutButtonIcon: {
    marginLeft: 10,
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
              <Grid
                container
                justify="flex-start"
                className={classes.signOutButtonContanier}
              >
                <Button
                  className={classes.signOutButton}
                  variant="contained"
                  onClick={signOut}
                >
                  <div>Sign Out</div>
                  <ExitToAppIcon className={classes.signOutButtonIcon} />
                </Button>
              </Grid>
            )}
          </Grid>
          <Grid item xs={6}>
            <Link to="/" className={classes.link}>
              <div className={classes.headerTitle}>Server Resource Manager</div>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Grid
              className={classes.headerButtonContainer}
              container
              justify="flex-start"
            >
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
  const classes = useStyles();
  const handleClick = () => {
    history.push("/signin");
  };
  return (
    <Grid>
      <Button
        className={classes.headerButton}
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        <LockIcon className={classes.headerButtonIcon} />
        Sign In
      </Button>
    </Grid>
  );
}

function UserStatusButton({ userName }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.headerButton}
      variant="contained"
      color="primary"
    >
      <AccountCircleIcon className={classes.headerButtonIcon} />
      <div>{userName}</div>
    </Button>
  );
}

export default Header;
