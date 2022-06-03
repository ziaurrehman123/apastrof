import React from "react";
import { Typography, Grid, Box, Button, makeStyles } from "@material-ui/core";
import sec3img from "../../assets/images/sec3img.png";
import sec5img from "../../assets/images/sec5img.png";
const useStyles = makeStyles((theme) => ({
  sec5img: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      width: "100%",
    },
  },
  sec3img: {
    marginTop: "-528px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      width: "100%",
      marginTop: "-528px",
    },
  },
}));
export default function SectionFive() {
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
                  Business Men
                </Typography>
                <Typography
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#19656B",
                  }}
                >
                  Pursue Your Dream Of Growing Abroad
                </Typography>
                <Typography style={{ fontSize: "20px", fontWeight: "400" }}>
                  Discover opportunities around the world. Get matched and apply
                  to programs at educational institutions that meet your needs,
                  and start your study abroad journey!
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
                  sx={{}}
                  alt="vector1"
                  src={sec5img}
                  className={classes.sec5img}
                />
                <Box
                  component="img"
                  alt="vector1"
                  src={sec3img}
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
