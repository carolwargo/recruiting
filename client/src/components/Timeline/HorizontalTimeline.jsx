import React from "react";

const HorizontalTimeline = () => {
    return (
        <div>
<style>
    {`
    .horizontal-timeline .items {
      position: relative;
      width: 100%; /* Keeps the main container full width */
    }

    /* Add a before pseudo-element for the border line only */
    .horizontal-timeline .items:before {
      content: "";
      position: absolute;
      top: 0;
      width: 75%; /* Line reduced to 75% width */
      border-top: 3px solid #e9ecef;
    }

    .horizontal-timeline .items .items-list {
      display: block;
      position: relative;
      text-align: center;
      padding-top: 70px;
      margin-right: 0;
    }

    .horizontal-timeline .items .items-list:before {
      content: "";
      position: absolute;
      height: 36px;
      border-right: 2px dashed #dee2e6;
      top: 0;
    }

    .horizontal-timeline .items .items-list .event-date {
      position: absolute;
      top: 36px;
      left: 0;
      right: 0;
      width: 75px;
      margin: 0 auto;
      font-size: 0.9rem;
      padding-top: 8px;
    }

    @media (min-width: 1140px) {
      .horizontal-timeline .items .items-list {
        display: inline-block;
        width: 24%;
        padding-top: 45px;
      }

      .horizontal-timeline .items .items-list .event-date {
        top: -40px;
      }
    }
    `}
</style>


<div className="row justify-content-center">
  <div className="col-sm-12 col-md-9 col-md-9">
<div className="container py-5">
<div className="row">
  <div className="col-lg-12">
    <div className="horizontal-timeline">
      <ul className="list-inline items">
        <li className="list-inline-item items-list">
          <div className="px-4">
            <div className="event-date"> Step One</div>
            <h5 className="pt-2">DISCOVERY</h5>
            <p className="text-muted">It will be as simple as occidental in fact it will be Occidental Cambridge
              friend</p>
          </div>
        </li>
        <li className="list-inline-item items-list">
          <div className="px-4">
            <div className="event-date">Step Two</div>
            <h5 className="pt-2">PLANNING</h5>
            <p className="text-muted">Everyone realizes why a new common language one could refuse translators.
            </p>
          </div>
        </li>
     
        <li className="list-inline-item items-list">
          <div className="px-4">
            <div className="event-date">Step Four</div>
            <h5 className="pt-2">DELIVERY</h5>
            <p className="text-muted">If several languages coalesce the grammar of the resulting simple and
              regular</p>
          </div>
        </li>
      </ul>

    </div>

  </div>
</div>

</div>
</div>
</div>
        </div>
    )
}

export default HorizontalTimeline
