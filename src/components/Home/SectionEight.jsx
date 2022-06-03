import React from "react";
import { Typography, Grid, Box, makeStyles } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import section8img from "../../assets/images/section8img.png";
import section8img1 from "../../assets/images/sec8img1.png";
import StarIcon from "@mui/icons-material/Star";
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

export default function SectionEight() {
  return (
    <>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          paddingBottom: "60px",
          paddingTop: "60px",
        }}
      >
        <Carousel responsive={responsive}>
          <div style={{ width: "90%", margin: "auto" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card style={{ borderRadius: "20px", marginBottom: "10px" }}>
                <CardActionArea>
                  <Box sx={{ width: "100%", margin: "auto" }}>
                    <Box
                      component="img"
                      sx={{ width: "100%" }}
                      alt="vector2"
                      src={section8img}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        style={{
                          color: "#41B375",
                          fontSize: "18px",
                          fontWeight: "500",
                        }}
                      >
                        Legal Services for Residency by Investment
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                          <Typography
                            style={{ fontSize: "14px", fontWeight: "300" }}
                          >
                            Starting from
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                          <Typography
                            style={{
                              fontSize: "14px",
                              fontWeight: "700",
                              color: "#19656B",
                              textAlign: "right",
                            }}
                          >
                            10,000 $
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Box>
                  <Box
                    boxShadow={12}
                    sx={{ borderRadius: "20px", paddingBottom: "10px" }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Box sx={{ display: "flex", marginLeft: "10px" }}>
                          <Box
                            component="img"
                            sx={{
                              width: 40,
                              height: 40,
                            }}
                            alt="vector2"
                            src={section8img1}
                          />
                          <Typography
                            style={{
                              fontSize: "14px",
                              fontWeight: "500",
                              marginTop: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Allice
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "right",
                            marginRight: "10px",
                            marginTop: "7px",
                          }}
                        >
                          <StarIcon style={{ color: "#FFC90A" }} />
                          <Typography
                            style={{
                              fontSize: "12px",
                              fontWeight: "400",
                              color: "#19656B",
                              textAlign: "right",
                              marginTop: "5px",
                              marginLeft: "5px",
                            }}
                          >
                            5(3)
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          </div>
          <div style={{ width: "90%", margin: "auto" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card style={{ borderRadius: "20px", marginBottom: "10px" }}>
                <CardActionArea>
                  <Box sx={{ width: "100%", margin: "auto" }}>
                    <Box
                      component="img"
                      sx={{ width: "100%" }}
                      alt="vector2"
                      src={section8img}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        style={{
                          color: "#41B375",
                          fontSize: "18px",
                          fontWeight: "500",
                        }}
                      >
                        Legal Services for Residency by Investment
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                          <Typography
                            style={{ fontSize: "14px", fontWeight: "300" }}
                          >
                            Starting from
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                          <Typography
                            style={{
                              fontSize: "14px",
                              fontWeight: "700",
                              color: "#19656B",
                              textAlign: "right",
                            }}
                          >
                            10,000 $
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Box>
                  <Box
                    boxShadow={12}
                    sx={{ borderRadius: "20px", paddingBottom: "10px" }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Box sx={{ display: "flex", marginLeft: "10px" }}>
                          <Box
                            component="img"
                            sx={{
                              width: 40,
                              height: 40,
                            }}
                            alt="vector2"
                            src={section8img1}
                          />
                          <Typography
                            style={{
                              fontSize: "14px",
                              fontWeight: "500",
                              marginTop: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Allice
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "right",
                            marginRight: "10px",
                            marginTop: "7px",
                          }}
                        >
                          <StarIcon style={{ color: "#FFC90A" }} />
                          <Typography
                            style={{
                              fontSize: "12px",
                              fontWeight: "400",
                              color: "#19656B",
                              textAlign: "right",
                              marginTop: "5px",
                              marginLeft: "5px",
                            }}
                          >
                            5(3)
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          </div>
          <div style={{ width: "90%", margin: "auto" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card style={{ borderRadius: "20px", marginBottom: "10px" }}>
                <CardActionArea>
                  <Box sx={{ width: "100%", margin: "auto" }}>
                    <Box
                      component="img"
                      sx={{ width: "100%" }}
                      alt="vector2"
                      src={section8img}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        style={{
                          color: "#41B375",
                          fontSize: "18px",
                          fontWeight: "500",
                        }}
                      >
                        Legal Services for Residency by Investment
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                          <Typography
                            style={{ fontSize: "14px", fontWeight: "300" }}
                          >
                            Starting from
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                          <Typography
                            style={{
                              fontSize: "14px",
                              fontWeight: "700",
                              color: "#19656B",
                              textAlign: "right",
                            }}
                          >
                            10,000 $
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Box>
                  <Box
                    boxShadow={12}
                    sx={{ borderRadius: "20px", paddingBottom: "10px" }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Box sx={{ display: "flex", marginLeft: "10px" }}>
                          <Box
                            component="img"
                            sx={{
                              width: 40,
                              height: 40,
                            }}
                            alt="vector2"
                            src={section8img1}
                          />
                          <Typography
                            style={{
                              fontSize: "14px",
                              fontWeight: "500",
                              marginTop: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Allice
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "right",
                            marginRight: "10px",
                            marginTop: "7px",
                          }}
                        >
                          <StarIcon style={{ color: "#FFC90A" }} />
                          <Typography
                            style={{
                              fontSize: "12px",
                              fontWeight: "400",
                              color: "#19656B",
                              textAlign: "right",
                              marginTop: "5px",
                              marginLeft: "5px",
                            }}
                          >
                            5(3)
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          </div>
          <div style={{ width: "90%", margin: "auto" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card style={{ borderRadius: "20px", marginBottom: "10px" }}>
                <CardActionArea>
                  <Box sx={{ width: "100%", margin: "auto" }}>
                    <Box
                      component="img"
                      sx={{ width: "100%" }}
                      alt="vector2"
                      src={section8img}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        style={{
                          color: "#41B375",
                          fontSize: "18px",
                          fontWeight: "500",
                        }}
                      >
                        Legal Services for Residency by Investment
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                          <Typography
                            style={{ fontSize: "14px", fontWeight: "300" }}
                          >
                            Starting from
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                          <Typography
                            style={{
                              fontSize: "14px",
                              fontWeight: "700",
                              color: "#19656B",
                              textAlign: "right",
                            }}
                          >
                            10,000 $
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Box>
                  <Box
                    boxShadow={12}
                    sx={{ borderRadius: "20px", paddingBottom: "10px" }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Box sx={{ display: "flex", marginLeft: "10px" }}>
                          <Box
                            component="img"
                            sx={{
                              width: 40,
                              height: 40,
                            }}
                            alt="vector2"
                            src={section8img1}
                          />
                          <Typography
                            style={{
                              fontSize: "14px",
                              fontWeight: "500",
                              marginTop: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Allice
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "right",
                            marginRight: "10px",
                            marginTop: "7px",
                          }}
                        >
                          <StarIcon style={{ color: "#FFC90A" }} />
                          <Typography
                            style={{
                              fontSize: "12px",
                              fontWeight: "400",
                              color: "#19656B",
                              textAlign: "right",
                              marginTop: "5px",
                              marginLeft: "5px",
                            }}
                          >
                            5(3)
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          </div>
          <div style={{ width: "90%", margin: "auto" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card style={{ borderRadius: "20px", marginBottom: "10px" }}>
                <CardActionArea>
                  <Box sx={{ width: "100%", margin: "auto" }}>
                    <Box
                      component="img"
                      sx={{ width: "100%" }}
                      alt="vector2"
                      src={section8img}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        style={{
                          color: "#41B375",
                          fontSize: "18px",
                          fontWeight: "500",
                        }}
                      >
                        Legal Services for Residency by Investment
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                          <Typography
                            style={{ fontSize: "14px", fontWeight: "300" }}
                          >
                            Starting from
                          </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                          <Typography
                            style={{
                              fontSize: "14px",
                              fontWeight: "700",
                              color: "#19656B",
                              textAlign: "right",
                            }}
                          >
                            10,000 $
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Box>
                  <Box
                    boxShadow={12}
                    sx={{ borderRadius: "20px", paddingBottom: "10px" }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Box sx={{ display: "flex", marginLeft: "10px" }}>
                          <Box
                            component="img"
                            sx={{
                              width: 40,
                              height: 40,
                            }}
                            alt="vector2"
                            src={section8img1}
                          />
                          <Typography
                            style={{
                              fontSize: "14px",
                              fontWeight: "500",
                              marginTop: "10px",
                              marginLeft: "10px",
                            }}
                          >
                            Allice
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "right",
                            marginRight: "10px",
                            marginTop: "7px",
                          }}
                        >
                          <StarIcon style={{ color: "#FFC90A" }} />
                          <Typography
                            style={{
                              fontSize: "12px",
                              fontWeight: "400",
                              color: "#19656B",
                              textAlign: "right",
                              marginTop: "5px",
                              marginLeft: "5px",
                            }}
                          >
                            5(3)
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
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
