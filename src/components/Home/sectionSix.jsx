import React from "react";
import { Typography, Grid, Box, makeStyles } from "@material-ui/core";
import sec3img from "../../assets/images/sec3img.png";
import sec3img1 from "../../assets/images/sec3img1.png";
const useStyles = makeStyles((theme) => ({
  sec3img1: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      width: "100%",
    },
  },
  sec3img: {
    marginTop: "-528px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-528px",
      width: "100%",
    },
  },
}));
export default function SectionSix() {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          
          paddingTop: "70px",
        }}
      >
        <Box sx={{ width: "90%", margin: "auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  sx={{}}
                  alt="vector1"
                  src={sec3img1}
                  className={classes.sec3img1}
                />
                <Box
                  component="img"
                  className={classes.sec3img}
                  alt="vector1"
                  src={sec3img}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box sx={{ marginTop: "100px" }}>
                <Typography
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#41B375",
                  }}
                >
                  Investment Seekers
                </Typography>
                <Typography
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#19656B",
                  }}
                >
                  Showcase Your Projects, to International Investors
                </Typography>
                <Typography style={{ fontSize: "20px", fontWeight: "400" }}>
                The Apastrof Platform allows you to make added value for your businesses and by putting your project in a network of interconnected services offered to global investors.
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
                        <Typography>#Business_For_Sale</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                      <Box
                        sx={{
                          backgroundColor: "rgba(65, 179, 117, 0.37)",
                          padding: "5px 10px 5px 10px",
                          borderRadius: "3px",
                          width: "auto",
                          textAlign: "center",
                        }}
                      >
                        <Typography>#Investment_Opportunity</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ marginTop: "10p" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                      <Box
                        sx={{
                          backgroundColor: "rgba(65, 179, 117, 0.37)",
                          padding: "5px 10px 5px 10px",
                          borderRadius: "3px",
                          width: "auto",
                          textAlign: "center",
                        }}
                      >
                        <Typography>#Residency_By_Investment</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
