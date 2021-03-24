import React, { useState, useContext } from "react";
import { Button, Grid, Paper, TextField, makeStyles } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { useHistory, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
const useStyles = makeStyles({
  paper: {
    marginTop: 50,
    width: 400,
    textAlign: "center",
  },
  personAddIcon: {
    width: 40,
    height: 40,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    margin: "8px 8px",
  },
  inputBox: {
    height: 40,
    marginBottom: 30,
  },
  button: {
    height: 50,
    marginBottom: 10,
    backgroundColor: "#1870DB",
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "blue",
    },
    link: {
      textDecoration: "none",
      fontSize: 14,
      color: "blue",
    },
  },
});
const initialState = { name: "", grade: "", password: "", confirmPassword: "" };

function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const [signUpInfo, setSignUpInfo] = useState(initialState);
  const { userList, setUserList, setUserId } = useContext(UserContext);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(signUpInfo);
    let signUpFormCheck = { valid: true, errorMessage: "" };
    if (signUpInfo.name === "") {
      signUpFormCheck.valid = false;
      signUpFormCheck.errorMessage += "enter Username\n";
    }
    if (signUpInfo.grade === "") {
      signUpFormCheck.valid = false;
      signUpFormCheck.errorMessage += "enter Grade\n";
    }
    if (signUpInfo.password === "" || signUpInfo.confirmPassword === "") {
      signUpFormCheck.valid = false;
      signUpFormCheck.errorMessage += "enter Password";
    } else if (signUpInfo.password !== signUpInfo.confirmPassword) {
      signUpFormCheck.valid = false;
      signUpFormCheck.errorMessage += "Passwords do not match";
    }
    if (signUpFormCheck.valid) {
      const newUser = {
        userId: userList.length + 1,
        userName: signUpInfo.name,
        grade: signUpInfo.grade,
        password: signUpInfo.password,
      };
      sessionStorage.setItem("srmUserId", newUser.userId);
      setUserList([...userList, newUser]);
      setUserId(newUser.userId);
      history.push("/resource");
      setSignUpInfo(initialState);
    } else {
      alert(`${signUpFormCheck.errorMessage}`);
      setSignUpInfo({ ...signUpInfo, password: "", confirmPassword: "" });
    }
  };
  return (
    <>
      <Grid container justify="center">
        <Paper className={classes.paper}>
          <Grid container justify="center">
            <Grid item xs={10}>
              <Grid container direction="column">
                <Grid item>
                  <PersonAddIcon
                    color="secondary"
                    className={classes.personAddIcon}
                  />
                </Grid>
                <Grid item>
                  <div className={classes.title}>Sign up</div>
                </Grid>

                <Grid container justify="flex-start">
                  <Grid item>Username</Grid>
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.inputBox}
                    variant="outlined"
                    fullWidth
                    value={signUpInfo.name}
                    onChange={(e) =>
                      setSignUpInfo({ ...signUpInfo, name: e.target.value })
                    }
                  />
                </Grid>

                <Grid container justify="flex-start">
                  <Grid item>Grade</Grid>
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.inputBox}
                    variant="outlined"
                    fullWidth
                    value={signUpInfo.grade}
                    onChange={(e) =>
                      setSignUpInfo({ ...signUpInfo, grade: e.target.value })
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
                    value={signUpInfo.password}
                    onChange={(e) =>
                      setSignUpInfo({ ...signUpInfo, password: e.target.value })
                    }
                  />
                </Grid>
                <Grid container justify="flex-start">
                  <Grid item>Confirm Password</Grid>
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.inputBox}
                    variant="outlined"
                    fullWidth
                    value={signUpInfo.confirmPassword}
                    onChange={(e) =>
                      setSignUpInfo({
                        ...signUpInfo,
                        confirmPassword: e.target.value,
                      })
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
                    Sign up
                  </Button>
                </Grid>
                <Grid container justify="flex-end">
                  <Link to="/signin" className={classes.link}>
                    <Grid item>
                      <div>I have my own account</div>
                    </Grid>
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

export default SignUp;
