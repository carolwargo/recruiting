// FAQSComponent.js
import React from "react";
import Faq from "react-faq-component";
import { InView } from "react-intersection-observer";
import data from "../../data/ncaaFaqsData"; 


const styles = {
 whiteSpace: "pre-line",
  bgColor: "white",
  titleTextColor: "blue",
  rowTitleColor: "blue",
  rowContentColor: "grey",
  arrowColor: "red",
};

const config = {
  animate: true,
  arrowIcon: "V",
  tabFocus: true,
};

export default function FAQSComponent() {
  return (
    <div>
       <p><i>NCAA FAQS</i></p>
      <div className="faqs-component" id="faqs-component">
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-justify w3-text-black w3-padding-16 ${
                inView ? "animate-fade-in" : ""
              }`}
            >
              <div className="container w3-padding-48 w3-padding-large">
                <Faq data={data} styles={styles} config={config} />
                <p>
                  <Faq data={data.text}></Faq>
                </p>
              </div>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
}



/**
<h3>FAQS</h3>
<p>Q: Does a website eliminate the use of my Social Media Accounts?</p>
<p>A: On the contrary! How it works.</p>
<p>For Example- </p>
<p><b>SCENARIO:</b> 'You received All-Conference Honors'</p>
<p><b>SOCIAL MEDIA USE:</b> 'Post the announcement on social media sites, WITH A SEE MORE LINK, that takes the user to your website.'</p>
<h1>For more on Controlled Platforms vs. Platform Controls & Restrictions</h1> */