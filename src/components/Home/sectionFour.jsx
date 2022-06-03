import React from "react";
import { Typography, Grid, Box, makeStyles, Button } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import icon1 from "../../assets/images/icon1.png";
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
    items: 3,
    margin: 4,
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

export default function SectionFour() {
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
                  backgroundColor: "#808080",
                }}
              >
                <CardActionArea>
                  <Box
                    sx={{ textAlign: "center", width: "90%", margin: "auto" }}
                  >
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
                      <Typography
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Find the investment that fits your needs, know about all
                        hidden costs and make contracts with verified local
                        advisory firms.
                      </Typography>
                      <Button
                        variant="contained"
                        style={{
                          color: "white",
                          backgroundColor: "#41B375",
                          textTransform: "capitalize",
                          marginTop: "20px",
                          padding: "5px 30px 5px 30px",
                        }}
                      >
                        View More
                      </Button>
                    </CardContent>
                  </Box>
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
                  backgroundColor: "#808080",
                }}
              >
                <CardActionArea>
                  <Box
                    sx={{ textAlign: "center", width: "90%", margin: "auto" }}
                  >
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
                      <Typography
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Find the investment that fits your needs, know about all
                        hidden costs and make contracts with verified local
                        advisory firms.
                      </Typography>
                      <Button
                        variant="contained"
                        style={{
                          color: "white",
                          backgroundColor: "#41B375",
                          textTransform: "capitalize",
                          marginTop: "20px",
                          padding: "5px 30px 5px 30px",
                        }}
                      >
                        View More
                      </Button>
                    </CardContent>
                  </Box>
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
                  backgroundColor: "#808080",
                }}
              >
                <CardActionArea>
                  <Box
                    sx={{ textAlign: "center", width: "90%", margin: "auto" }}
                  >
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
                      <Typography
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Find the investment that fits your needs, know about all
                        hidden costs and make contracts with verified local
                        advisory firms.
                      </Typography>
                      <Button
                        variant="contained"
                        style={{
                          color: "white",
                          backgroundColor: "#41B375",
                          textTransform: "capitalize",
                          marginTop: "20px",
                          padding: "5px 30px 5px 30px",
                        }}
                      >
                        View More
                      </Button>
                    </CardContent>
                  </Box>
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
                  backgroundColor: "#808080",
                }}
              >
                <CardActionArea>
                  <Box
                    sx={{ textAlign: "center", width: "90%", margin: "auto" }}
                  >
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
                      <Typography
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Find the investment that fits your needs, know about all
                        hidden costs and make contracts with verified local
                        advisory firms.
                      </Typography>
                      <Button
                        variant="contained"
                        style={{
                          color: "white",
                          backgroundColor: "#41B375",
                          textTransform: "capitalize",
                          marginTop: "20px",
                          padding: "5px 30px 5px 30px",
                        }}
                      >
                        View More
                      </Button>
                    </CardContent>
                  </Box>
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
                  backgroundColor: "#808080",
                }}
              >
                <CardActionArea>
                  <Box
                    sx={{ textAlign: "center", width: "90%", margin: "auto" }}
                  >
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
                      <Typography
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Find the investment that fits your needs, know about all
                        hidden costs and make contracts with verified local
                        advisory firms.
                      </Typography>
                      <Button
                        variant="contained"
                        style={{
                          color: "white",
                          backgroundColor: "#41B375",
                          textTransform: "capitalize",
                          marginTop: "20px",
                          padding: "5px 30px 5px 30px",
                        }}
                      >
                        View More
                      </Button>
                    </CardContent>
                  </Box>
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
                  backgroundColor: "#808080",
                }}
              >
                <CardActionArea>
                  <Box
                    sx={{ textAlign: "center", width: "90%", margin: "auto" }}
                  >
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
                      <Typography
                        style={{ fontSize: "18px", fontWeight: "400" }}
                      >
                        Find the investment that fits your needs, know about all
                        hidden costs and make contracts with verified local
                        advisory firms.
                      </Typography>
                      <Button
                        variant="contained"
                        style={{
                          color: "white",
                          backgroundColor: "#41B375",
                          textTransform: "capitalize",
                          marginTop: "20px",
                          padding: "5px 30px 5px 30px",
                        }}
                      >
                        View More
                      </Button>
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
