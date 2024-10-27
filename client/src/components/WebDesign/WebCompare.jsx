import React from "react";
import { InView } from "react-intersection-observer";
import '../../styles/pricing.css'
const WebCompare = () => {
  return (
    <div className="web-compare" id="web-compare">
    

      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`w3-justify w3-text-grey w3-padding-16 
       ${inView ? "animate-fade-in" : ""}`}
          >
            <div className="w-100 py-1">
              <div className="container w3-padding-48">
                <div className="py-3">
                  <h3 className="display-6 fw-normal text-body-emphasis text-center">
                    Compare plans
                  </h3>
                  <p>
                    Choosing the best cloud storage provider is difficult. This
                    guide shows the 10 top cloud storage services for cost,
                    safety and collaboration features, covering personal cloud
                    storage and business file storage solutions.
                  </p>
                </div>
                <div className="bg-dark rounded shadow w3-padding-large w3-padding-24 ">
                  <table className="table table-dark text-white text-center">
                    <thead>
                      <tr>
                        <th style={{ width: "34%" }}></th>
                        <th style={{ width: "22%" }}>Free</th>
                        <th style={{ width: "22%" }}>Pro</th>
                        <th style={{ width: "22%" }}>Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="text-start">
                          Public
                        </th>
                        <td>
                          <svg
                            className="bi text"
                            width="24"
                            height="24"
                            style={{ fill: "white" }}
                          >
                            <use xlinkHref="#check" />
                          </svg>
                        </td>
                        <td>
                          <svg
                            className="bi text"
                            width="24"
                            height="24"
                            style={{ fill: "white" }}
                          >
                            <use xlinkHref="#check" />
                          </svg>
                        </td>
                        <td>
                          <svg
                            className="bi text"
                            width="24"
                            height="24"
                            style={{ fill: "white" }}
                          >
                            <use xlinkHref="#check" />
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Private
                        </th>
                        <td></td>
                        <td>
                          <svg
                            className="bi text"
                            width="24"
                            height="24"
                            style={{ fill: "white" }}
                          >
                            <use xlinkHref="#check" />
                          </svg>
                        </td>
                        <td>
                          <svg
                            className="bi text"
                            width="24"
                            height="24"
                            style={{ fill: "white" }}
                          >
                            <use xlinkHref="#check" />
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <th scope="row" className="text-start">
                          Permissions
                        </th>
                        <td>
                          <svg
                            className="bi text"
                            width="24"
                            height="24"
                            style={{ fill: "white" }}
                          >
                            <use xlinkHref="#check" />
                          </svg>
                        </td>
                        <td>
                          <svg
                            className="bi text"
                            width="24"
                            height="24"
                            style={{ fill: "white" }}
                          >
                            <use xlinkHref="#check" />
                          </svg>
                        </td>
                        <td>
                          <svg
                            className="bi text"
                            width="24"
                            height="24"
                            style={{ fill: "white" }}
                          >
                            <use xlinkHref="#check" />
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Sharing
                        </th>
                        <td></td>
                        <td>
                          <svg
                            className="bi text"
                            width="24"
                            height="24"
                            style={{ fill: "white" }}
                          >
                            <use xlinkHref="#check" />
                          </svg>
                        </td>
                        <td>
                          <svg
                            className="bi text"
                            width="24"
                            height="24"
                            style={{ fill: "white" }}
                          >
                            <use xlinkHref="#check" />
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Unlimited members
                        </th>
                        <td></td>
                        <td>
                          <svg
                            className="bi text"
                            width="24"
                            height="24"
                            style={{ fill: "white" }}
                          >
                            <use xlinkHref="#check" />
                          </svg>
                        </td>
                        <td>
                          <svg
                            className="bi text"
                            width="24"
                            height="24"
                            style={{ fill: "white" }}
                          >
                            <use xlinkHref="#check" />
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Extra security
                        </th>
                        <td></td>
                        <td></td>
                        <td>
                          <svg
                            className="bi text"
                            width="24"
                            height="24"
                            style={{ fill: "white" }}
                          >
                            <use xlinkHref="#check" />
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
};

export default WebCompare;
