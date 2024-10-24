import React from "react";

const PlatformModal = () => {   

    return (

<div>
<style>
    {`
main,h1,h5 {font-family: "Raleway", sans-serif}
main, html {height: 100%}
.bgimg {
  background-image: url('/w3images/onepage_restaurant.jpg');
  min-height: 100%;
  background-position: center;
  background-size: cover;
}
  `}
</style>

<main>
<div className="bgimg w3-display-container w3-text-white">
  <div className="w3-display-topleft w3-container w3-xlarge">
    <p><button onclick="document.getElementById('menu').style.display='block'" className="w3-button w3-black">menu</button></p>
 </div>
</div>


<div id="menu" className="w3-modal">
  <div className="w3-modal-content w3-animate-zoom">
    <div className="w3-container w3-black w3-display-container">
      <span onclick="document.getElementById('menu').style.display='none'" className="w3-button w3-display-topright w3-large">x</span>
      <h1>Controlled Platforms vs. Platform Controls & Restrictions</h1>
    </div>
    <div className="w3-container">
    <h3>FAQS</h3>
<h3>BENEFITS OF HAVING A WEBSITE (a controlled platform) & USING SOCIAL MEDIA (a platform with CONTROLS & RESTRICTIONS):</h3>
<h4>What are Social Media Controls:</h4>
<p>- character limits, upload restrictions, and insesant algorithmic updates.</p>
<p>A: On the contrary! They work in tandum- </p>
<p>For Example- </p>
<p><b>SCENARIO:</b> 'You received All-Conference Honors'</p>
<p><b>SOCIAL MEDIA USE:</b> 'Post the announcement on social media sites, WITH A SEE MORE LINK, that takes the user to your website.'</p>

    </div>
  </div>
</div>
</main>
</div>

    );
};

export default PlatformModal;   