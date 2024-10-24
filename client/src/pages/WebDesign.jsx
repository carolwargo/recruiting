import React from "react";
import { InView } from 'react-intersection-observer';
import WebPricing from '../components/WebDesign/WebPricing'
import WebIntro from '../components/WebDesign/WebIntro'
import WebTimeline from "../components/WebDesign/WebTimeline";

const WebDesign = () => {
  return (
<div>
  <InView triggerOnce={true}>
  {({ inView, ref }) => (
    <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
       ${inView ? "animate-fade-in" : ""}`}
    id="overview"
>

 <div>
<WebIntro/>
</div>
<div>
<WebTimeline/>
</div>
<div>
<WebPricing/>
</div>

</div>

)}
</InView>
</div>
  );
};

export default WebDesign;
