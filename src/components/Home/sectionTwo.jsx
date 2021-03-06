import React from "react";
import { Typography, Grid, Box, Button, makeStyles } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import { CardActionArea } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  cardStyle: {
    height: "100%",
  },
  buttonStyle: {
    color: "white",
    background: "linear-gradient(180deg, #19656B 0%, #41B375 100%)",
    textTransform: "capitalize",
    marginTop: "20px",
    padding: "5px 30px 5px 30px",
    "&:hover": {
      background: "linear-gradient(89.8deg, #ffffff 100%, #41B375 99.85%)",
      color: "#1CC9A5",
    },
  },
}));
export default function SectionOne() {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          width: "80%",
          margin: "auto",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card
              className={classes.cardStyle}
              style={{ borderRadius: "20px" }}
            >
              <CardActionArea>
                <Box sx={{ textAlign: "center", width: "90%", margin: "auto" }}>
                  <Box
                    component="img"
                    sx={{
                      width: 60,
                      height: 60,
                      paddingTop: "20px",
                    }}
                    alt="vector2"
                    src={icon1}
                  />

                  <CardContent>
                    <Typography
                      gutterBottom
                      style={{
                        color: "#41B375",
                        fontSize: "18px",
                        fontWeight: "700",
                      }}
                    >
                      BUSINESSMAN
                    </Typography>
                    <Typography style={{ fontSize: "18px", fontWeight: "400" }}>
                      Find the investment that fits your needs, know about all
                      hidden costs and make contracts with verified local
                      advisory firms.
                    </Typography>
                    <Button variant="contained" className={classes.buttonStyle}>
                      View More
                    </Button>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card
              className={classes.cardStyle}
              style={{ borderRadius: "20px" }}
            >
              <CardActionArea>
                <Box sx={{ textAlign: "center", width: "90%", margin: "auto" }}>
                  <Box
                    component="img"
                    sx={{
                      width: 60,
                      height: 60,
                      paddingTop: "20px",
                    }}
                    alt="vector2"
                    src={icon2}
                  />

                  <CardContent>
                    <Typography
                      gutterBottom
                      style={{
                        color: "#41B375",
                        fontSize: "18px",
                        fontWeight: "700",
                      }}
                    >
                      SERVICE PROVIDER
                    </Typography>
                    <Typography style={{ fontSize: "18px", fontWeight: "400" }}>
                      Register your services. After our verification process,
                      you will be able to sell your services directly to the
                      Businessmen in Platform.
                    </Typography>
                    <Button variant="contained" className={classes.buttonStyle}>
                      Register to Service
                    </Button>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card
              className={classes.cardStyle}
              style={{ borderRadius: "20px" }}
            >
              <CardActionArea>
                <Box sx={{ textAlign: "center", width: "90%", margin: "auto" }}>
                  <Box
                    component="img"
                    sx={{
                      width: 60,
                      height: 60,
                      paddingTop: "20px",
                    }}
                    alt="vector2"
                    src={icon3}
                  />

                  <CardContent>
                    <Typography
                      gutterBottom
                      style={{
                        color: "#41B375",
                        fontSize: "18px",
                        fontWeight: "700",
                      }}
                    >
                      LOOKING FOR AN INVESTOR ?
                    </Typography>
                    <Typography style={{ fontSize: "18px", fontWeight: "400" }}>
                      Let us know about the project that you are looking for a
                      partner, investor or financier and Apastrof provides you
                      the solutions.
                    </Typography>
                    <Button variant="contained" className={classes.buttonStyle}>
                      Post Here
                    </Button>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
