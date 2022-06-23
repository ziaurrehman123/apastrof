import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
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

// Images
import Logo from "../../assets/images/logo.svg";
const useStyles = makeStyles((theme) => ({
  signupHeading: {
    color: "#151515",
    fontFamily: "Righteous",
    fontWeight: "400",
    fontSize: "35px",
  },
  signupSubHeading: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
  },

  checkBox: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "13px",
    color: "#808080",
  },
  signupButton: {
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

  loginAccount: {
    fontFamily: "Poppins",
    fontWeight: "700",
    margin: "0 10px",
    fontSize: "18px",
    color: "#808080",
    textDecoration: "none",
  },
}));

export default function SignUp() {
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
              <Box textAlign={"center"} marginTop={"30px"}>
                <Typography fontSize={"35px"} className={classes.signupHeading}>
                  Welcome !
                </Typography>
                <Typography className={classes.signupSubHeading}>
                  Please Create Account to continue
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
                            label="Accept terms of services 
                            accept policy "
                          />
                        </FormGroup>
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
                              className={classes.signupButton}
                              size="medium"
                            >
                              Create Account
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
                        Already Have an Account?
                        <Link
                          to="/login"
                          className={classes.loginAccount}
                          href="##"
                        >
                          Login
                        </Link>
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
