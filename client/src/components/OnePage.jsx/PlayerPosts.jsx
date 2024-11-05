import React from "react";
import { Link } from "react-router-dom";
import AllState from "../../assets/images/PlayerPosts/AllState.png";
import Signing from "../../assets/images/PlayerPosts/Signing.png";
import MVP from "../../assets/images/PlayerPosts/MVP.png";
import Big26 from "../../assets/images/PlayerPosts/Big26.png";
import SBC from "../../assets/images/PlayerPosts/SBC.png";
import NCAA from "../../assets/images/PlayerPosts/NCAA.png";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";


const PlayerPosts = () => {
  return (
    <div className="posts" id="posts">


        <div className="py-2">
        <h3 className="fw-bold text-white">POSTS & NEWS</h3>
        <h5 className="w3-margin-top">
          The Video Library showcases my skills, featuring a mix of in-game and
          practice videos, categorized into Offense, Defense, and MLB Bullpens.
        </h5>

 <h6 className="w3-margin-top"> Watch a video, share a video, request additional footage, or
          <span>  {" "} <Link to="contact" className=" link-light">contact me</Link>
          </span>{" "}
          with questions or feedback.
        </h6>
      </div>
      {/* ROW 1 */}
      <div className="row">
   <div className="col-12 col-md-4 my-2">
<img
  src={AllState}
  alt="principal"
 className=" w3-left rounded w3-grayscale hover-zoom mb-4"
  style={{ width: "100%", boxShadow:'0 0 4px 2px rgb(179, 145, 145)' }}
/>
<div id="tweet-container">
  <blockquote className="twitter-tweet text-center">
    <a href="https://x.com/elonmusk/status/" 
className="w3-text-grey hover-zoom">VIEW THIS POST</a>
  </blockquote>
</div>
</div>

<div className="col-12 col-md-4 my-2">
<img
  src={Signing}
  alt="principal"
  className=" w3-left rounded w3-grayscale hover-zoom mb-4"
  style={{ width: "100%", boxShadow:'0 0 4px 2px rgb(179, 145, 145)' }}
/>
<div id="tweet-container">
  <blockquote className="twitter-tweet text-center">
    <a href="https://x.com/elonmusk/status/" 
className="w3-text-grey hover-zoom">VIEW THIS POST</a>
  </blockquote>
</div>
</div>
<div className="col-12 col-md-4 my-2">
<img
  src={MVP}
  alt="principal"
  className=" w3-left rounded w3-grayscale hover-zoom mb-4"
  style={{ width: "100%", boxShadow:'0 0 4px 2px rgb(179, 145, 145)' }}
/>
<div id="tweet-container">
  <blockquote className="twitter-tweet text-center">
    <a href="https://x.com/elonmusk/status/" 
 className="w3-text-grey hover-zoom">VIEW THIS POST</a>
  </blockquote>
</div>
</div>

        </div>
        <div className="row">
   <div className="col-12 col-md-4 my-2">
<img
  src={Big26}
  alt="principal"
  className=" w3-left rounded w3-grayscale hover-zoom mb-4"
  style={{ width: "100%", boxShadow:'0 0 4px 2px rgb(179, 145, 145)' }}
/>
<div id="tweet-container">
  <blockquote className="twitter-tweet text-center">
    <a href="https://x.com/elonmusk/status/" 
   className="w3-text-grey hover-zoom">VIEW THIS POST</a>
  </blockquote>
</div>
</div>

<div className="col-12 col-md-4 my-2">
<img
  src={SBC}
  alt="principal"
    className=" w3-left rounded w3-grayscale hover-zoom mb-4"
  style={{ width: "100%", boxShadow:'0 0 4px 2px rgb(179, 145, 145)' }}
/>
<div id="tweet-container">
  <blockquote className="twitter-tweet text-center">
    <a href="https://x.com/elonmusk/status/" 
    className="w3-text-grey hover-zoom">VIEW THIS POST</a>
  </blockquote>
</div>
</div>
<div className="col-12 col-md-4 my-2">
<img
  src={NCAA}
  alt="principal"
  className=" w3-left rounded w3-grayscale hover-zoom mb-4"
  style={{ width: "100%", boxShadow:'0 0 4px 2px rgb(179, 145, 145)' }}
/>
<div id="tweet-container">
  <blockquote className="twitter-tweet text-center">
    <a href="https://x.com/elonmusk/status/" 
  className="w3-text-grey hover-zoom">VIEW THIS POST</a>
  </blockquote>
</div>
</div>

        </div>


        {/**follow me */}
        <div className="container w3-text-white">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                          <div className=" container text-center w3-text-white py-3">
                          <hr  style={{paddingTop:'10px', paddingBottom:'10px'}}/>
                           
                            <h5>FOLLOW ME ON SOCIAL MEDIA:</h5>
                            <Link
                              className=" mx-1"
                              style={{ fontSize: "2.7rem" }}
                            >
                         <span className="icon-hover-zoom">
    <strong>
      <BsTwitterX />
    </strong>
  </span>
                            </Link>
                            <Link
                               className="mx-1"
                              style={{ fontSize: "2.9rem" }}
                            >
                               <span className="icon-hover-zoom">
    <strong>
    <FaSquareInstagram />
    </strong>
  </span>
                           
                            </Link>
                            <Link
                           className="mx-1"
                              style={{ fontSize: "2.9rem" }}
                            >
                                       <span className="icon-hover-zoom">
    <strong>
    <FaSnapchatSquare />
    </strong>
  </span>
                              
                            </Link>
                          </div>
                        </div>
                      </div>
                      </div>
      </div>
  );
};

export default PlayerPosts;


/**
 * import { Tweet } from 'react-tweet'
 * 
 * 
  <div className="container w3-padding-large">
<Tweet id="1852982550035112039" /> 
</div>
 */