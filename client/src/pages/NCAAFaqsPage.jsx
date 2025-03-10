import React from "react";
import { InView } from "react-intersection-observer";
import Faq from "react-faq-component";
import BBHoop from "../assets/images/CardBG/BBHoop.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/pricing.css";

const data = {
  title: "FAQS (How it works)",
  rows: [
    {
      title: "HOW WAS THE NCAA FORMED?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
          ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
          In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
          Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
        Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
        Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
        Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};
const NCAAFaqs = () => {
  return (
    <div
      id="ncaa-faqs"
      style={{
        backgroundImage: "linear-gradient(#000000, #023996, #3882ff)",
      }}
    >
      <div>
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-justify w3-text-white 
       ${inView ? "animate-fade-in" : ""}`}
            >
              <div className="container w3-padding-large w3-padding-32  text-center">
                <h1 className="mt-5">
                  <i
                    style={{
                      fontFamily: "Raleway",
                      fontSize: "2.5rem",
                      textShadow: "1px 1px 4px black",
                    }}
                  >
                    THE{" "}
                    <span
                      className=" w3-text-blue"
                      style={{ fontWeight: "bold" }}
                    >
                      {" "}
                      NCAA{" "}
                    </span>
                    - Things You Need to Know
                  </i>
                </h1>
                <h4 className="text-white">
                  Understanding an organization's inner workings—like
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "1px 1px 3px black",
                    }}
                    className="w3-text-blue"
                  >
                    {" "}
                    <i>FUNDING SOURCES</i>
                  </span>
                  ,{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "1px 1px 3px black",
                    }}
                    className="w3-text-blue"
                  >
                    {" "}
                    <i>BOARD STRUCTURE</i>
                  </span>
                  ,{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "1px 1px 3px black",
                    }}
                    className="w3-text-blue"
                  >
                    {" "}
                    <i> LEGISLATURE</i>
                  </span>
                  , and{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "1px 1px 3px black",
                    }}
                    className="w3-text-blue"
                  >
                    {" "}
                    <i>FOCUSED MISSION</i>
                  </span>
                  — is essential for effective planning and tempering
                  expectations.
                  <span style={{ fontWeight: "bold", color: "#d32c9a" }}></span>
                  .
                  <span>
                    {" "}
                    <blockquote className="blockquote">
                      <p className="mb-0">
                        "Where the money flows is where the loyalty goes."
                      </p>
                    </blockquote>
                  </span>
                </h4>
                {/**<p>Coaches want exactly what you want; 
                one-stop-shop to tell me everything i need to know. 
                A SINGLE clear, concise, organized, and efficient platform,
                 that is easy navigate.
              A final destination- </p> */}
              </div>

              <div className="container w3-padding-large ">
                <div className="row">
                  <div className="col-lg-12">
                    <ul>
                      <li>
                        “What is your recruiting timeline? When would you like
                        your recruiting done for the class of [insert your grad
                        year]?”
                      </li>
                      <li>
                        “What is a ‘typical day’ like for a member of your team
                        during the season? What about during the off-season?”
                      </li>
                      <li>
                        “What goals do you have for your team during the next
                        four to five years?”
                      </li>
                      <li>
                        “Are your players close with each other outside of
                        practice and games?”
                      </li>
                      <li>
                        “What are the biggest challenges for a student-athlete
                        at your school?”
                      </li>
                      <li>
                        “What type of orientation program is offered for
                        incoming freshman?”
                      </li>
                    </ul>

                    <h1>BLOG TOPICS</h1>
                    <p>NCAA STRUCTURE</p>
                  </div>
                </div>
                <div className="row  justify-content-center align-items-center">
                  <div className="col-sm-12 col-md-5 col-lg-5 w3-padding-large mb-2">
                    <div className=" container mb-2">
                      {/**
                      <span
                          style={{
                            fontFamily: "Raleway",
                            textShadow: "1px 1px 4px black",
                          }}
                        >DID YOU KNOW...
                        </span> 
                        

                      <div className="mb-1 px-2">
                        <p>
                          {" "}
                          <i className="bi bi-lightbulb-fill w3-text-blue"></i>{" "}
                          The NCAA originally formed in response to repeated
                          injuries and deaths in college football (1904-
                          convened by: T. Roosevelt).
                        </p>
                      </div>
                      <hr />
 */}
                      <div className="mb-1 px-2 text-light">
                        <h5 style={{ color: "white", fontWeight: "bold" }}>
                          REVENUE & ASSETS{" "}
                          <span
                            style={{ fontSize: "13px", color: "lightGray" }}
                          >
                            <i>(fiscal year 2022-2023)</i>{" "}
                          </span>
                        </h5>
                        <p className="mb-0 pb-0">
                          <i className="bi bi-lightbulb-fill w3-text-blue"></i>{" "}
                          <span
                            style={{
                              fontWeight: "bold",
                              color: "white",
                              textShadow: "1px 1px 3px black",
                            }}
                          >
                            {" "}
                            The NCAA reported:
                          </span>{" "}
                        </p>
                        <ul>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $1.3 billion in revenue
                          </li>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $565 million in unrestricted assets
                          </li>
                        </ul>
                      </div>

                      <div className="mb-1 px-2 text-light">
                        <h5 style={{ color: "white", fontWeight: "bold" }}>
                          FUNDS DISTRIBUTED{" "}
                          <span
                            style={{ fontSize: "13px", color: "lightGray" }}
                          >
                            <i>(fiscal year 2022-2023)</i>{" "}
                          </span>
                        </h5>
                        <p className="mb-0 pb-0">
                          <i className="bi bi-lightbulb-fill w3-text-blue"></i>{" "}
                          <span
                            style={{
                              fontWeight: "bold",
                              color: "white",
                              textShadow: "1px 1px 3px black",
                            }}
                          >
                            {" "}
                            The NCAA distributed:
                          </span>{" "}
                        </p>
                        <ul>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            $669 million: Division I{" "}
                            <span style={{ fontSize: "13px" }}>
                              <i>(D1 asset distibutions)</i>
                            </span>
                          </li>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            $100 million: Division I{" "}
                            <span style={{ fontSize: "13px" }}>
                              <i>(Championship asset distibutions)</i>
                            </span>
                          </li>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            $224 million: Division I{" "}
                            <span style={{ fontSize: "13px" }}>
                              <i>(sponsorships & scholarships)</i>
                            </span>
                          </li>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            $89.6 million: Division I{" "}
                            <span style={{ fontSize: "13px" }}>
                              <i>(student assistance fund)</i>
                            </span>
                          </li>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            $89.2 million: Division I{" "}
                            <span style={{ fontSize: "13px" }}>
                              <i>(academic enhancement fund)</i>
                            </span>
                          </li>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            $10 million: Grants{" "}
                            <span style={{ fontSize: "13px" }}>
                              <i>(2.6 mill alloted for graduates)</i>
                            </span>
                          </li>
                        </ul>
                        <h5 style={{ color: "white", fontWeight: "bold" }}>
                          DISTRIBUTION TOTALS{" "}
                          <span
                            style={{ fontSize: "13px", color: "lightGray" }}
                          >
                            <i>(fiscal year 2022-2023)</i>{" "}
                          </span>
                        </h5>
                        <p className="mb-0 pb-0">
                          <i className="bi bi-lightbulb-fill w3-text-blue"></i>{" "}
                          <span
                            style={{
                              fontWeight: "bold",
                              color: "white",
                              textShadow: "1px 1px 3px black",
                            }}
                          >
                            {" "}
                            The NCAA Divisional Distribution:
                          </span>{" "}
                        </p>
                        <ul>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $669 million D1 Asset Distributions{" "}
                          </li>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $100 million Championship Asset Distributions{" "}
                          </li>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $414 million Total Distributions{" "}
                          </li>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $404 million: D1 Distributions{" "}
                          </li>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $2.6 million: Graduate Distributions{" "}
                          </li>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $7.4 million: for everyone else (to include D1){" "}
                          </li>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $414 million Total amount distributed:{" "}
                          </li>
                        </ul>
                      </div>

                      <div className="mb-1 mt-3 px-2 text-light">
                        <h5 style={{ color: "white", fontWeight: "bold" }}>
                          RECAP{" "}
                          <span
                            style={{ fontSize: "13px", color: "lightGray" }}
                          >
                            <i>(fiscal year 2022-2023)</i>{" "}
                          </span>
                        </h5>
                        <p className="mb-0 pb-0">
                          <i className="bi bi-lightbulb-fill w3-text-blue"></i>{" "}
                          <span
                            style={{
                              fontWeight: "bold",
                              color: "white",
                              textShadow: "1px 1px 3px black",
                            }}
                          >
                            {" "}
                            $1.3 BILLION - $414 MILLION = $990 MILLION <br />
                          </span>{" "}
                        </p>
                        <ul>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            More than 99% of distributed funds go to D1
                            programs, specifically MEN'S BASKETBALL & FOOTBALL
                          </li>
                          <li
                            className=" fw-light"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $565 million in unrestricted assets
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-7 col-lg-7 w3-padding-large mb-2">
                    <div className="mb-2">
                      <div
                        className="card rounded-3 shadow-lg position-relative"
                        style={{
                          backgroundImage: `url(${BBHoop})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          boxShadow: "2rem 5rem 10rem rgba(255, 192, 203, 0.5)",
                        }}
                      >
                        {/* Dark Overlay */}
                        <div
                          className="position-absolute top-0 start-0 w-100 h-100"
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay color with opacity
                            borderRadius: "0.75rem", // Match card border radius
                          }}
                        ></div>

                        {/* Content */}
                        <div className="container justify-content-center position-relative">
                          <div className="card-body w3-padding-large py-4 mt-2">
                            <h6 className="card-title pricing-card-title text-light fw-bold opacity-75">
                              Main Source of Revenue-
                            </h6>
                            <h4 className="card-title pricing-card-title mt-0 pt-0 w3-text-blue fw-bolder">
                              MEN'S BASKETBALL
                            </h4>
                            <h5
                              className="w3-text-light-gray mb-0 pb-0"
                              style={{ fontSize: "14px" }}
                            >
                              <i>"90% of the NCAA's Revenue comes from "</i>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="card pb-2 rounded-3 shadow-lg w3-light-grey">
                        <div className="container justify-content-center">
                          <div className="card-body w3-padding-large py-4 mt-2">
                            <h6 className="card-title pricing-card-title text-dark-emphasis fw-bold">
                              Main Source of Revenue
                            </h6>
                            <h4 className="my-0 fw-bold w3-text-blue">
                              Dynamic One-Page
                            </h4>
                            <p
                              className="text-secondary"
                              style={{ fontSize: "14px" }}
                            >
                              Customized Application
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div
                        className="card pb-2 rounded-3 shadow-lg"
                        style={{
                          backgroundImage:
                            "linear-gradient(#000000, #023996, #3882ff)",
                        }}
                      >
                        <div className="container justify-content-center text-light">
                          <div className="card-body w3-padding-large py-4 mt-2">
                            <h6 className="card-title pricing-card-title text-light text-opacity-75 fw-bold">
                              Main Source of Revenue
                            </h6>
                            <h4 className="card-title pricing-card-title mt-0 pt-0 w3-text-blue fw-bolder">
                              MEN'S BASKETBALL
                            </h4>
                            <p
                              className="w3-text-light-gray opacity-75 mb-0 pb-0"
                              style={{ fontSize: "14px" }}
                            >
                              The NCAA's Main Source of Revenue
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w3-container w3-padding-large w3-padding-16">
                <div className="row  justify-content-center align-items-center g-2">
                  <div className="col-sm-12 col-md-6 col-lg-6  w3-padding-large mb-2">
                    <div className="container w3-padding-48 w3-padding-large">
                      <div className="bg-white w3-padding-16">
                        <div className="w3-padding">
                          <Faq data={data} styles={styles} config={config} />
                        </div>
                      </div>
                      <h3>FAQS</h3>
                      <p>
                        Q: Does a website eliminate the use of my Social Media
                        Accounts?
                      </p>
                      <p>A: On the contrary! How it works.</p>
                      <p>For Example- </p>
                      <p>
                        <b>SCENARIO:</b> 'You received All-Conference Honors'
                      </p>
                      <p>
                        <b>SOCIAL MEDIA USE:</b> 'Post the announcement on
                        social media sites, WITH A SEE MORE LINK, that takes the
                        user to your website.'
                      </p>
                      <h1>
                        For more on Controlled Platforms vs. Platform Controls &
                        Restrictions
                      </h1>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-large mb-2">
                    <div className="mb-2">
                      <div
                        className="card rounded-3 shadow-lg"
                        style={{
                          backgroundImage: `url(${BBHoop})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          boxShadow: "2rem 5rem 10rem rgba(255, 192, 203, 0.5)",
                        }}
                      >
                        <div className="container justify-content-center">
                          <div
                            className="card-body w3-padding-large pb-2 mt-2"
                            style={{ height: "12rem" }}
                          >
                            <h6 className="card-title pricing-card-title text-light fw-bold opacity-75">
                              Main Source of Revenue-
                            </h6>
                            <h4 className="card-title pricing-card-title mt-0 pt-0 w3-text-blue fw-bolder">
                              MEN'S BASKETBALL
                            </h4>
                            <h5
                              className="w3-text-light-gray  mb-0 pb-0"
                              style={{ fontSize: "14px" }}
                            >
                              <i>"90% of the NCAA's Revenue comes from "</i>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div
                        className="card pb-2 rounded-3 shadow-lg w3-light-grey"
                        style={{ height: "12rem" }}
                      >
                        <div className="container justify-content-center">
                          <div className="card-body w3-padding-large py-4 mt-2">
                            <h6 className="card-title pricing-card-title text-dark-emphasis fw-bold">
                              Main Source of Revenue
                            </h6>
                            <h4 className="my-0 fw-bold w3-text-blue">
                              Dynamic One-Page
                            </h4>
                            <p
                              className="text-secondary"
                              style={{ fontSize: "14px" }}
                            >
                              Customized Application
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div
                        className="card pb-2 rounded-3 shadow-lg"
                        style={{
                          backgroundImage:
                            "linear-gradient(#000000, #023996, #3882ff)",
                        }}
                      >
                        <div className="container justify-content-center text-light">
                          <div
                            className="card-body w3-padding-large pb-2 mt-2"
                            style={{ height: "12rem" }}
                          >
                            <h6 className="card-title pricing-card-title text-light text-opacity-75 fw-bold">
                              Main Source of Revenue
                            </h6>
                            <h4 className="card-title pricing-card-title mt-0 pt-0 w3-text-blue fw-bolder">
                              MEN'S BASKETBALL
                            </h4>
                            <p
                              className="w3-text-light-gray opacity-75 mb-0 pb-0"
                              style={{ fontSize: "14px" }}
                            >
                              The NCAA's Main Source of Revenue
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default NCAAFaqs;
