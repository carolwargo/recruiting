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

    <div className="w3-container">
    <h3 className=" text-light-emphasis">
    Bi·par·ti·san
    </h3>
    <h5> 
    /bīˈpärdəz(ə)n/

</h5>
<p><i className="text-secondary">adjective</i></p>
<p>involving the agreement or cooperation of two political parties that usually oppose each other's policies:
<span><i className="text-secondary">"the reforms received considerable bipartisan approval"</i></span></p>

    </div>
  </div>
</div>
</main>
</div>

    );
};

export default PlatformModal;   
