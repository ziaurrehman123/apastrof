import React from "react";
import { Typography, Grid, Box, makeStyles } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import sec4img1 from "../../assets/images/sec4img1.png";
import sec4img2 from "../../assets/images/sec4img2.png";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const useStyles = makeStyles((theme) => ({
  imageBox: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
}));

export default function SectionFour() {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{ textAlign: "center", paddingTop: "40px", paddingBottom: "40px" }}
      >
        <Typography
          style={{
            fontSize: "22px",
            fontWeight: "600",
            color: "#41B375",
          }}
        >
          Find Investments
        </Typography>
        <Typography
          style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#19656B",
          }}
        >
          Business and Investment Opportunities
        </Typography>
      </Box>
      <Box sx={{ width: "90%", margin: "auto", paddingBottom: "60px" }}>
        <Carousel responsive={responsive}>
          <div style={{ width: "90%", margin: "auto" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card
                style={{
                  borderRadius: "20px",
                  marginBottom: "10px",
                }}
              >
                <CardActionArea>
                  <CardActionArea>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Box
                          component="img"
                          alt="vector1"
                          src={sec4img1}
                          className={classes.imageBox}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                        <Box
                          style={{ paddingLeft: "20px", paddingRight: "20px" }}
                        >
                          <Typography
                            style={{
                              fontSize: "18px",
                              fontWeight: "700",
                              paddingTop: "20px",
                              color: "#19656B",
                            }}
                          >
                            Business for Entertainment Park in ethiopia
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "12px",
                              fontWeight: "400",
                              paddingTop: "10px",
                              color: "#41B375",
                            }}
                          >
                            Negotiable EUR
                          </Typography>
                          <Box style={{ paddingTop: "20px" }}>
                            <Grid container spacing={2}>
                              <Grid item xs={3}>
                                <Typography
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "#19656B",
                                    textAlign: "center",
                                  }}
                                >
                                  Industry
                                </Typography>
                                <Typography
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                    paddingTop: "5px",
                                    textAlign: "center",
                                  }}
                                >
                                  Textile
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <div
                                  style={{
                                    width: "2px",
                                    height: "20px",
                                    backgroundColor: "grey",
                                    marginTop: "10px",
                                  }}
                                ></div>
                              </Grid>
                              <Grid item xs={3}>
                                <Typography
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "#19656B",
                                    textAlign: "center",
                                  }}
                                >
                                  City
                                </Typography>
                                <Typography
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                    paddingTop: "5px",
                                    textAlign: "center",
                                  }}
                                >
                                  California
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <div
                                  style={{
                                    width: "2px",
                                    height: "20px",
                                    backgroundColor: "grey",
                                    marginTop: "10px",
                                  }}
                                ></div>
                              </Grid>
                              <Grid item xs={3}>
                                <Typography
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "#19656B",
                                    textAlign: "center",
                                  }}
                                >
                                  Bids
                                </Typography>
                                <Typography
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                    paddingTop: "5px",
                                    textAlign: "center",
                                  }}
                                >
                                  3 Bids
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <div
                                  style={{
                                    width: "2px",
                                    height: "20px",
                                    marginTop: "10px",
                                  }}
                                ></div>
                              </Grid>
                            </Grid>
                            <Typography
                              style={{
                                fontSize: "10px",
                                marginTop: "20px",
                                paddingBottom: "20px",
                              }}
                            >
                              This project involves the design and construction
                              of an Entertainment Theme Park Close ..
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardActionArea>
                </CardActionArea>
              </Card>
            </Grid>
          </div>
          <div style={{ width: "90%", margin: "auto" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card
                style={{
                  borderRadius: "20px",
                  marginBottom: "10px",
                }}
              >
                <CardActionArea>
                  <CardActionArea>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Box
                          component="img"
                          alt="vector1"
                          src={sec4img2}
                          className={classes.imageBox}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                        <Box
                          style={{ paddingLeft: "20px", paddingRight: "20px" }}
                        >
                          <Typography
                            style={{
                              fontSize: "18px",
                              fontWeight: "700",
                              paddingTop: "20px",
                              color: "#19656B",
                            }}
                          >
                            Business for Entertainment Park in ethiopia
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "12px",
                              fontWeight: "400",
                              paddingTop: "10px",
                              color: "#41B375",
                            }}
                          >
                            Negotiable EUR
                          </Typography>
                          <Box style={{ paddingTop: "20px" }}>
                            <Grid container spacing={2}>
                              <Grid item xs={3}>
                                <Typography
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "#19656B",
                                    textAlign: "center",
                                  }}
                                >
                                  Industry
                                </Typography>
                                <Typography
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                    paddingTop: "5px",
                                    textAlign: "center",
                                  }}
                                >
                                  Textile
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <div
                                  style={{
                                    width: "2px",
                                    height: "20px",
                                    backgroundColor: "grey",
                                    marginTop: "10px",
                                  }}
                                ></div>
                              </Grid>
                              <Grid item xs={3}>
                                <Typography
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "#19656B",
                                    textAlign: "center",
                                  }}
                                >
                                  City
                                </Typography>
                                <Typography
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                    paddingTop: "5px",
                                    textAlign: "center",
                                  }}
                                >
                                  California
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <div
                                  style={{
                                    width: "2px",
                                    height: "20px",
                                    backgroundColor: "grey",
                                    marginTop: "10px",
                                  }}
                                ></div>
                              </Grid>
                              <Grid item xs={3}>
                                <Typography
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "#19656B",
                                    textAlign: "center",
                                  }}
                                >
                                  Bids
                                </Typography>
                                <Typography
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                    paddingTop: "5px",
                                    textAlign: "center",
                                  }}
                                >
                                  3 Bids
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <div
                                  style={{
                                    width: "2px",
                                    height: "20px",
                                    marginTop: "10px",
                                  }}
                                ></div>
                              </Grid>
                            </Grid>
                            <Typography
                              style={{
                                fontSize: "10px",
                                marginTop: "20px",
                                paddingBottom: "20px",
                              }}
                            >
                              This project involves the design and construction
                              of an Entertainment Theme Park Close ..
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardActionArea>
                </CardActionArea>
              </Card>
            </Grid>
          </div>
          <div style={{ width: "90%", margin: "auto" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card
                style={{
                  borderRadius: "20px",
                  marginBottom: "10px",
                }}
              >
                <CardActionArea>
                  <CardActionArea>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Box
                          component="img"
                          alt="vector1"
                          src={sec4img1}
                          className={classes.imageBox}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                        <Box
                          style={{ paddingLeft: "20px", paddingRight: "20px" }}
                        >
                          <Typography
                            style={{
                              fontSize: "18px",
                              fontWeight: "700",
                              paddingTop: "20px",
                              color: "#19656B",
                            }}
                          >
                            Business for Entertainment Park in ethiopia
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "12px",
                              fontWeight: "400",
                              paddingTop: "10px",
                              color: "#41B375",
                            }}
                          >
                            Negotiable EUR
                          </Typography>
                          <Box style={{ paddingTop: "20px" }}>
                            <Grid container spacing={2}>
                              <Grid item xs={3}>
                                <Typography
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "#19656B",
                                    textAlign: "center",
                                  }}
                                >
                                  Industry
                                </Typography>
                                <Typography
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                    paddingTop: "5px",
                                    textAlign: "center",
                                  }}
                                >
                                  Textile
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <div
                                  style={{
                                    width: "2px",
                                    height: "20px",
                                    backgroundColor: "grey",
                                    marginTop: "10px",
                                  }}
                                ></div>
                              </Grid>
                              <Grid item xs={3}>
                                <Typography
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "#19656B",
                                    textAlign: "center",
                                  }}
                                >
                                  City
                                </Typography>
                                <Typography
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                    paddingTop: "5px",
                                    textAlign: "center",
                                  }}
                                >
                                  California
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <div
                                  style={{
                                    width: "2px",
                                    height: "20px",
                                    backgroundColor: "grey",
                                    marginTop: "10px",
                                  }}
                                ></div>
                              </Grid>
                              <Grid item xs={3}>
                                <Typography
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    color: "#19656B",
                                    textAlign: "center",
                                  }}
                                >
                                  Bids
                                </Typography>
                                <Typography
                                  style={{
                                    fontSize: "10px",
                                    fontWeight: "400",
                                    paddingTop: "5px",
                                    textAlign: "center",
                                  }}
                                >
                                  3 Bids
                                </Typography>
                              </Grid>
                              <Grid item xs={1}>
                                <div
                                  style={{
                                    width: "2px",
                                    height: "20px",
                                    marginTop: "10px",
                                  }}
                                ></div>
                              </Grid>
                            </Grid>
                            <Typography
                              style={{
                                fontSize: "10px",
                                marginTop: "20px",
                                paddingBottom: "20px",
                              }}
                            >
                              This project involves the design and construction
                              of an Entertainment Theme Park Close ..
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardActionArea>
                </CardActionArea>
              </Card>
            </Grid>
          </div>
        </Carousel>
      </Box>
    </>
  );
}
