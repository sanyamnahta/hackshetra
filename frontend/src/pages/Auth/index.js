import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Login from "./components/Login";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "rgb(2,0,36)",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default ({ props }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Box p={10} bgcolor="#eee">
          <Grid container spacing={1} justify="center">
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}>
              <Login />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
