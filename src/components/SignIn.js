import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Button, Grid, Paper, TextField, makeStyles } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
const useStyles = makeStyles({
  paper: {},
  lockIcon: {},
  inputBox: {},
  title: {},
});
const initialState = { name: "", password: "" };
function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [signInInfo, setSignInInfo] = useState(initialState);
  const { userId, setUserId, userName, setUserName, userList } = useContext(
    UserContext
  );
  const userAuthentication = (name, password) => {
    let valid = false;
    userList.map((user) => {
      if (user.userName === name) {
        if (user.password === password) {
          valid = true;
          setUserId(user.userId);
          sessionStorage.setItem("srmUserId", user.userId);
        }
      }
    });
    if (valid) return { valid: valid, msg: "successed to sign in" };
    else return { valid: valid, msg: "failed to sign in" };
  };
  const handleClick = (e) => {
    e.preventDefault();
    const auth = userAuthentication(signInInfo.name, signInInfo.password);
    if (auth.valid) {
      history.push("/resource");
    } else {
      alert("failed to sign in");
    }
    setSignInInfo(initialState);
  };
  return (
    <>
      <Grid container justify="center">
        <Paper className={classes.paper}>
          <Grid container justify="center">
            <Grid item xs={10}>
              <Grid container direction="column">
                <Grid item>
                  <LockIcon color="secondary" className={classes.lockIcon} />
                </Grid>
                <Grid item>
                  <div className={classes.title}>Sign In</div>
                </Grid>
                <Grid container justify="flex-start">
                  <Grid item>Username</Grid>
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.inputBox}
                    variant="outlined"
                    fullWidth
                    value={signInInfo.name}
                    onChange={(e) =>
                      setSignInInfo({ ...signInInfo, name: e.target.value })
                    }
                  />
                </Grid>
                <Grid container justify="flex-start">
                  <Grid item>Password</Grid>
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.inputBox}
                    variant="outlined"
                    fullWidth
                    value={signInInfo.password}
                    onChange={(e) =>
                      setSignInInfo({ ...signInInfo, password: e.target.value })
                    }
                  />
                </Grid>
                <Grid item>
                  <Button
                    className={classes.button}
                    fullWidth
                    variant="contained"
                    onClick={handleClick}
                  >
                    Sign in
                  </Button>
                </Grid>
                <Grid container justify="flex-end">
                  <Link to="/signup" className={classes.link}>
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default SignIn;
