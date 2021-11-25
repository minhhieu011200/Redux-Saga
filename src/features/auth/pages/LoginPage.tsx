import React, { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAppDispatch } from "../../../app/hooks";
import { login, logOut } from "../authSlice";

export interface ILoginPageProps {}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
  },
  labelSmall: {
    top: "-7px!important",
  },
});

export default function LoginPage(props: ILoginPageProps) {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [values, setValues] = useState({
    userName: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop: any) => (event: { target: { value: any } }) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleLogin = () => {
    dispatch(
      login({
        userName: values.userName,
        password: values.password,
      })
    );
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          p: 1,
          m: 1,
        }}
      >
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => dispatch(logOut())}
          className="text-right"
        >
          LogOut
        </Button>
      </Box>
      <div className={classes.root}>
        <Paper elevation={3}>
          <Box m={4}>
            <Typography variant="h4" color="primary" className="text-center">
              Login
            </Typography>

            <div className="my-4">
              <FormControl sx={{ width: "25ch" }} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-username"
                  className={classes.labelSmall}
                >
                  Username
                </InputLabel>
                <OutlinedInput
                  id="outlined-size-small"
                  value={values.userName}
                  onChange={handleChange("userName")}
                  size="small"
                  label="UserName"
                />
              </FormControl>
            </div>

            <div className="my-4">
              <FormControl sx={{ width: "25ch" }} variant="outlined">
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  className={classes.labelSmall}
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-size-small"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  size="small"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>

            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </div>
    </div>
  );
}
