import React from "react";
import { Typography, Grid, Box, Button, makeStyles } from "@material-ui/core";
import sec7img from "../../assets/images/sec7img.png";
const useStyles = makeStyles((theme) => ({
  sec3img: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
export default function SectionSeven() {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F6F6F6",
          paddingTop: "70px",
        }}
      >
        <Box sx={{ width: "90%", margin: "auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ marginTop: "100px" }}>
                <Typography
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#41B375",
                  }}
                >
                  Service Provider
                </Typography>
                <Typography
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#19656B",
                  }}
                >
                  Leverage World-Class Consultants
                </Typography>
                <Typography style={{ fontSize: "20px", fontWeight: "400" }}>
                  We are the largest, globally-distributed network of top
                  business, Investment, and business migration consultants ready
                  to tackle your most important initiatives.
                </Typography>
                <Box sx={{ marginTop: "40px" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <Box
                        sx={{
                          backgroundColor: "rgba(65, 179, 117, 0.37)",
                          padding: "5px 10px 5px 10px",
                          borderRadius: "3px",
                          width: "auto",
                          textAlign: "center",
                        }}
                      >
                        <Typography>#Offshore_Bank_Account</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <Box
                        sx={{
                          backgroundColor: "rgba(65, 179, 117, 0.37)",
                          padding: "5px 10px 5px 10px",
                          borderRadius: "3px",
                          width: "auto",
                          textAlign: "center",
                        }}
                      >
                        <Typography>#Company_Registration</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <Box
                        sx={{
                          backgroundColor: "rgba(65, 179, 117, 0.37)",
                          padding: "5px 10px 5px 10px",
                          borderRadius: "3px",
                          width: "auto",
                          textAlign: "center",
                        }}
                      >
                        <Typography>#Shelf-Company</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Box
                      sx={{
                        backgroundColor: "rgba(65, 179, 117, 0.37)",
                        padding: "5px 10px 5px 10px",
                        borderRadius: "3px",
                        marginTop: "10px",
                        width: "auto",
                        textAlign: "center",
                      }}
                    >
                      <Typography>#Offshore_Trust</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  style={{
                    color: "white",
                    backgroundColor: "#41B375",
                    textTransform: "capitalize",
                    marginTop: "30px",
                  }}
                >
                  See More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  alt="vector1"
                  src={sec7img}
                  className={classes.sec3img}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
