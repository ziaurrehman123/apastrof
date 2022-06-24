import React from "react";
import { Typography, Grid, Box, makeStyles } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import sec10img1 from "../../assets/images/sec10img1.png";
import sec10img2 from "../../assets/images/sec10img2.png";
import { CardActionArea } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
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
  sec10img1: {
    width: 80,
    height: 80,
    position: "relative",
    top: "108px",
    left: "-28px",
    paddingTop: "20px",
    [theme.breakpoints.down("sm")]: {
      top: "170px",
      left: "-14px",
    },
  },
  sec10img2: {
    width: 80,
    height: 80,
    position: "relative",
    top: "108px",
    left: "28px",
    paddingTop: "20px",
    [theme.breakpoints.down("sm")]: {
      top: "170px",
      left: "14px",
    },
  },
}));
export default function SectionTen() {
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
          Clients
        </Typography>
        <Typography
          style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#19656B",
          }}
        >
          What Our Customer Are Saying
        </Typography>
      </Box>
      <Box sx={{ width: "80%", margin: "auto", paddingBottom: "60px" }}>
        <Carousel
          responsive={responsive}
          showDots={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          <div style={{ width: "80%", margin: "auto" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box>
                <Box
                  component="img"
                  className={classes.sec10img1}
                  alt="vector2"
                  src={sec10img1}
                />
              </Box>
              <Card
                style={{
                  borderRadius: "20px",
                  marginBottom: "50px",
                  marginTop: "-56px",
                }}
              >
                <CardActionArea>
                  <Box sx={{ textAlign: "left", width: "90%", margin: "auto" }}>
                    <CardContent>
                      <Box sx={{ paddingLeft: "20px" }}>
                        <Typography
                          gutterBottom
                          style={{
                            fontSize: "26px",
                            fontWeight: "500",
                          }}
                        >
                          Jane Cooper
                        </Typography>
                        <Typography
                          style={{ fontSize: "16px", fontWeight: "400" }}
                        >
                          Magna feugiat in imperdiet ut maecenas. Molestie eget
                          ultricies leo id accumsan. Faucibus turpis ut purus
                          pretium elementum. Vestibulum ante nunc aenean
                          tristique libero montes, dictum. Mauris turpis.
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          paddingLeft: "40px",
                          paddingTop: "20px",
                          display: "flex",
                        }}
                      >
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                          }}
                        >
                          <FacebookIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <WhatsAppIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <TwitterIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <InstagramIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                      </Box>
                    </CardContent>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          </div>

          <div style={{ width: "90%", margin: "auto" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box sx={{ textAlign: "right" }}>
                <Box
                  component="img"
                  className={classes.sec10img2}
                  alt="vector2"
                  src={sec10img2}
                />
              </Box>
              <Card
                style={{
                  borderRadius: "20px",
                  marginBottom: "50px",
                  marginTop: "-56px",
                }}
              >
                <CardActionArea>
                  <Box sx={{ textAlign: "left", width: "90%", margin: "auto" }}>
                    <CardContent>
                      <Box sx={{ paddingLeft: "10px" }}>
                        <Typography
                          gutterBottom
                          style={{
                            fontSize: "26px",
                            fontWeight: "500",
                          }}
                        >
                          Floyd Miles
                        </Typography>
                        <Typography
                          style={{ fontSize: "16px", fontWeight: "400" }}
                        >
                          Magna feugiat in imperdiet ut maecenas. Molestie eget
                          ultricies leo id accumsan. Faucibus turpis ut purus
                          pretium elementum. Vestibulum ante nunc aenean
                          tristique libero montes, dictum. Mauris turpis turpis.
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          paddingLeft: "40px",
                          paddingTop: "20px",
                          display: "flex",
                        }}
                      >
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                          }}
                        >
                          <FacebookIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <WhatsAppIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <TwitterIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <InstagramIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                      </Box>
                    </CardContent>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          </div>
          <div style={{ width: "90%", margin: "auto" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box>
                <Box
                  component="img"
                  className={classes.sec10img1}
                  alt="vector2"
                  src={sec10img1}
                />
              </Box>
              <Card
                style={{
                  borderRadius: "20px",
                  marginBottom: "50px",
                  marginTop: "-56px",
                }}
              >
                <CardActionArea>
                  <Box sx={{ textAlign: "left", width: "90%", margin: "auto" }}>
                    <CardContent>
                      <Box sx={{ paddingLeft: "40px" }}>
                        <Typography
                          gutterBottom
                          style={{
                            fontSize: "26px",
                            fontWeight: "500",
                          }}
                        >
                          Jane Cooper
                        </Typography>
                        <Typography
                          style={{ fontSize: "16px", fontWeight: "400" }}
                        >
                          Magna feugiat in imperdiet ut maecenas. Molestie eget
                          ultricies leo id accumsan. Faucibus turpis ut purus
                          pretium elementum. Vestibulum ante nunc aenean
                          tristique libero montes, dictum. Mauris turpis.
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          paddingLeft: "20px",
                          paddingTop: "20px",
                          display: "flex",
                        }}
                      >
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                          }}
                        >
                          <FacebookIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <WhatsAppIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <TwitterIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <InstagramIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                      </Box>
                    </CardContent>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          </div>

          <div style={{ width: "90%", margin: "auto" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box sx={{ textAlign: "right" }}>
                <Box
                  component="img"
                  className={classes.sec10img2}
                  alt="vector2"
                  src={sec10img2}
                />
              </Box>
              <Card
                style={{
                  borderRadius: "20px",
                  marginBottom: "50px",
                  marginTop: "-56px",
                }}
              >
                <CardActionArea>
                  <Box sx={{ textAlign: "left", width: "90%", margin: "auto" }}>
                    <CardContent>
                      <Box sx={{ paddingLeft: "10px" }}>
                        <Typography
                          gutterBottom
                          style={{
                            fontSize: "26px",
                            fontWeight: "500",
                          }}
                        >
                          Floyd Miles
                        </Typography>
                        <Typography
                          style={{ fontSize: "16px", fontWeight: "400" }}
                        >
                          Magna feugiat in imperdiet ut maecenas. Molestie eget
                          ultricies leo id accumsan. Faucibus turpis ut purus
                          pretium elementum. Vestibulum ante nunc aenean
                          tristique libero montes, dictum. Mauris turpis turpis.
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          paddingLeft: "20px",
                          paddingTop: "20px",
                          display: "flex",
                        }}
                      >
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                          }}
                        >
                          <FacebookIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <WhatsAppIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <TwitterIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            borderRadius: "50px",
                            marginLeft: "10px",
                          }}
                        >
                          <InstagramIcon
                            sx={{
                              marginTop: "6px",
                              marginLeft: "6px",
                              fontSize: "18px",
                            }}
                          />
                        </Box>
                      </Box>
                    </CardContent>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          </div>
        </Carousel>
      </Box>
    </>
  );
}
