import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  Box,
  Typography,
  makeStyles,
  TextField,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/images/logo.svg";
const useStyles = makeStyles((theme) => ({
  loginHeading: {
    color: "#151515",
    fontFamily: "Righteous",
    fontWeight: "400",
    fontSize: "35px",
  },
  loginSubHeading: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
  },

  forgetPassword: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "18px",
    color: "#808080",
    textDecoration: "none",
  },
  checkBox: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "13px",
    color: "#808080",
  },
  loginButton: {
    background: "#19656B",
    borderRadius: "5px",
    fontStyle: "normal",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: "24px",
    color: "white",
    textTransform: "capitalize",
    margin: "15px 0",
    "&:hover": {
      background: "#19656B",
      opacity: ".6",
      transition: ".4s",
    },
  },
  or: {
    fontFamily: "Poppins",
    fontWeight: "300",
    fontSize: "18px",
    color: "#151515",
    textAlign: "center",
    textTransform: "capitalize",
  },
  linkdin: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "22px",
    background: "#0077B5",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.12)",
    borderRadius: "5px",
    color: "#ffff",
    textTransform: "capitalize",
    "&:hover": {
      background: "#0077B5",
      opacity: ".6",
      transition: ".4s",
    },
  },
  gmail: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "22px",
    background: "#DB4437",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.12)",
    borderRadius: "5px",
    color: "#ffff",
    textTransform: "capitalize",
    "&:hover": {
      background: "#DB4437",
      opacity: ".6",
      transition: ".4s",
    },
  },

  para: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "18px",
    color: "#151515",
    textAlign: "center",
    margin: "5px 0",
  },

  createAccount: {
    fontFamily: "Poppins",
    fontWeight: "700",
    margin: "0 5px",
    fontSize: "18px",
    color: "#808080",
    textDecoration: "none",
  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Box sx={{ pt: 5 }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Link to={"/"}>
                <Box component="img" sx={{}} alt="Logo." src={Logo} />
              </Link>
            </Grid>
            <Grid item>
              <Box marginTop={"30px"} textAlign={"center"}>
                <Typography fontSize={"35px"} className={classes.loginHeading}>
                  Welcome Back !
                </Typography>
                <Typography className={classes.loginSubHeading}>
                  Please Login to continue
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box py={4}>
                <Grid container direction="column">
                  <Grid item>
                    <Box component={"form"} sx={{ mt: 1 }}>
                      <TextField
                        style={{ margin: "5px 0", backgroundColor: "#F3F3F3" }}
                        fullWidth
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                      />
                      <TextField
                        style={{ margin: "5px 0", backgroundColor: "#F3F3F3" }}
                        fullWidth
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                      />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item>
                        <FormGroup>
                          <FormControlLabel
                            className={classes.checkBox}
                            control={<Checkbox defaultChecked />}
                            label="Remember Me"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item alignItems="center" className="abc">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={"/resetPassword"}
                        >
                          <a href="##" className={classes.forgetPassword}>
                            Forget Password ?
                          </a>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Box component={"div"} width="100%">
                      <Grid container direction="column">
                        <Grid item>
                          <Box component={"form"} sx={{ mt: 1 }}>
                            <Button
                              fullWidth
                              className={classes.loginButton}
                              size="medium"
                            >
                              Login
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.or}>OR</Typography>
                  </Grid>
                  <Grid item>
                    <Box
                      component={"div"}
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                      marginTop={"20px"}
                      gridGap={"10px"}
                    >
                      <Box flexGrow={"1"}>
                        <Button className={classes.linkdin} fullWidth>
                          Linkdin
                        </Button>
                      </Box>
                      <Box flexGrow={"1"}>
                        <Button fullWidth className={classes.gmail}>
                          Gmail
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.para} textAlign="center">
                      <p>
                        {" "}
                        Don’t Have an Account?{" "}
                        <a className={classes.createAccount} href="##">
                          Create Account
                        </a>
                      </p>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
