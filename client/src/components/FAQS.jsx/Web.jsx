import React from "react";
import Faq from "react-faq-component";
import { InView } from "react-intersection-observer";

const data = {
  title: "FAQS About the Process (How it works)",
  rows: [
    {
        title: " Does a website eliminate the use of my Social Media Accounts?,",
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

export default function WebFAQSComponent() {
  return (
<div>

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
 <div>
    <Faq
        data={data}
        styles={styles}
        config={config}
    />
</div>

<h3>FAQS</h3>
<p>Q: Does a website eliminate the use of my Social Media Accounts?</p>
<p>A: On the contrary! How it works.</p>
<p>For Example- </p>
<p><b>SCENARIO:</b> 'You received All-Conference Honors'</p>
<p><b>SOCIAL MEDIA USE:</b> 'Post the announcement on social media sites, WITH A SEE MORE LINK, that takes the user to your website.'</p>
<h1>For more on Controlled Platforms vs. Platform Controls & Restrictions</h1>
</div>
</div>
)}
</InView>
    </div>
    </div>
  );
}