import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/EmailOutlined";

const useStyles = makeStyles((theme) => ({
  root: {},
  form: {
    paddingBottom: theme.spacing(3),
  },
}));

export default ({ props }) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Typography className={classes.form} variant="h4" color="textSecondary">
        <b>Login</b>
      </Typography>
      <FormControl fullWidth className={classes.form}>
        <TextField
          label="Email"
          variant="outlined"
          // error={}
          // value={}
          // onChange={}
        />
        {/* <FormHelperText>{email.error}</FormHelperText> */}
      </FormControl>
      <FormControl fullWidth className={classes.form}>
        <TextField
          label="Password"
          variant="outlined"
          // error={}
          // value={}
          // onChange={}
        />
        {/* <FormHelperText>{email.error}</FormHelperText> */}
      </FormControl>
      <Button fullWidth size="large" variant="contained" color="primary">
        Login
      </Button>
    </Box>
  );
};
