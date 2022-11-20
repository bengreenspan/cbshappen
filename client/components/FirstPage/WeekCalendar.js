import React from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Divider } from "@mui/material";
// import "aos/dist/aos.css"
import Za from "./CustomerComp/Za";
// import CBS from "./CustomerComp/CBS";
import Aos from "aos";
import { Link } from "react-router-dom";

{
  /* <div>
<a
  target="_blank"
  href="https://groups.gsb.columbia.edu/MMA/rsvp_boot?id=32939"
>
  MMA NBC Universal Careers Panel
  <p style={{fontWeight:100}}>
   by Media Management
  Association
  </p>
</a>

<h4 style={{fontStyle:"italic"}}>Geffen 430, 12:00pm – 1:00pm</h4>
</div>
<br /> */
}

const WeekCalendar = () => {
  return (
    <BS.Container>
      <h2 id="Weekly"></h2>
      <Container sx={{ pt: 10, pb: 10 }}>
        <Box
          sx={{
            pt: 3,
            pl: 3,
            pr: 3,
            pb: 3,

            display: "flex",
            justifyContent: "left",
          }}
        >
          <div
            className="fontbold"
            // data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Typography
              variant="h5"
              // className="white-background"
              sx={{
                pt: 3,
                pl: 3,
                pr: 3,
                pb: 3,
                justifyContent: "center",
              }}
            >
              <div className="fontbold">
                Weekly Events
                <h4>11/21/22 - 11/26/22</h4>
                <br />
                <BS.Row>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      className="fontbold"
                    >
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="monday"></span>
                        Monday
                      </h1>
                      <br />
                      <h2>Lunch Happenings:</h2>
                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=32944"
                        >
                          Immigration Attorney Workshop: US Visa Options
                          Post-Graduation
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Career Management Center
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 590, 12:15pm – 1:45pm
                        </h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=38077"
                        >
                          CMC Advising: Consulting with Tricia Baione
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Career Management Center
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 570, 12:30pm – 1:30pm
                        </h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="https://groups.gsb.columbia.edu/CJEB/rsvp_boot?id=31000"
                        >
                          Japan’s New Economic Security Policy: Impact on
                          Businesses, Supply Chains, and Investment
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Center on Japanese Economy and Business
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 540, 12:30pm – 1:30pm
                        </h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=33388"
                        >
                          Technical skills for non-technical job seekers
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Technology Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 520, 12:30pm – 1:30pm
                        </h4>
                      </div>
                      <br />
                    </div>
                  </BS.Col>

                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="200"
                      className="fontbold"
                    >
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="tuesday"></span>
                        Tuesday
                      </h1>

                      <br />
                      <h2>Lunchtime Happenings:</h2>
                      <br />
                      <div className="links">
                        <a
                          target="_blank"
                          href="https://groups.gsb.columbia.edu/CMC/rsvp_boot?id=38270"
                        >
                          CMC Advising: Investment Banking with Anjna Motwan
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Career Management Center
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 440, 12:00pm – 1:30pm
                        </h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/VCC/rsvp_boot?id=37663
                          "
                        >
                          VCC Open Lunch
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Venture Capital Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Kravis 490, 12:15pm – 1:15pm
                        </h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/sec/rsvp_boot?id=33435
                          "
                        >
                          Pangea Teams Appreciation Social
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Social Enterprise Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 390, 12:30pm – 1:30pm
                        </h4>
                      </div>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/Tech/rsvp_boot?id=33445
                          "
                        >
                          Nailing the Tech Behavioral Interview Workshop
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Technology Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 620/Virtual, 12:30pm – 1:45pm
                        </h4>
                      </div>
                      <br />

                      <h2>Afterclass Happenings:</h2>

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/energy/rsvp_boot?id=33345
                          "
                        >
                          Energy & Infrastructure Club - Green Hydrogen Panel
                          Event
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Energy & Infrastructure Club
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 520, 6:00pm – 8:00pm
                        </h4>
                      </div>
                      <br />
                    </div>
                  </BS.Col>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="300"
                      className="fontbold"
                    >
                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        {" "}
                        <span id="wednesday"></span>
                        Wednesday:
                      </h1>
                      <br />
                      <h2>Lunch Happenings:</h2>
                      <br />

                      <div className="links">
                        <a
                          target="_blank"
                          href="
                          https://groups.gsb.columbia.edu/osa/rsvp_boot?id=29491
                          "
                        >
                          CBS | well: Meditation Space
                          <p style={{ fontStyle: "italic", fontWeight: 100 }}>
                            by Office of Student Affairs
                          </p>
                        </a>

                        <h4 style={{ fontWeight: 100 }}>
                          Geffen 380, 12:00pm – 1:45pm
                        </h4>
                      </div>

                      <br />
                    </div>
                  </BS.Col>
                </BS.Row>
                <BS.Row>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="300"
                      className="fontbold"
                    >
                      <br />

                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="thursday"></span>
                        Thursday:
                      </h1>

                      <div className="links">
                        No Events Found
                        <br />
                        Happy Thanksgiving!
                      </div>
                      <br />
                    </div>
                  </BS.Col>

                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-offset="200"
                      // className="fontbold"
                    >
                      <br />

                      <h1 style={{ fontStyle: "italic", fontWeight: 900 }}>
                        <span id="friday"></span>
                        Friday:
                      </h1>
                      {/* <br /> */}
                      <div className="links">
                        <div>
                          {/* <a
                            target="_blank"
                            // href="https://milsteincenter.org/civicrm/event/info?reset=1&id=1073"
                          > */}
                          No Events Found
                          {/* <a href="#Weekly">top</a>. */}
                          {/* </a> */}
                          {/* <h4>Randall's Island, Field 51 4:30 Kickoff</h4> */}
                        </div>
                      </div>
                      <br />

                      <br />
                    </div>
                    {/* <br /> */}
                  </BS.Col>
                  <BS.Col lg={4} md={6} sm={12} xs={12}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      // data-aos-offset="200"
                      className="fontbold"
                    >
                      <br />
                      <h1> Saturday:</h1>
                      <div className="links">
                        <div>No Events Found</div>
                      </div>
                      <br />
                    </div>
                  </BS.Col>
                </BS.Row>
              </div>
            </Typography>
          </div>
        </Box>
        <br /> <br /> <br /> <br /> <br /> <br />
      </Container>
    </BS.Container>
  );
};
export default WeekCalendar;
