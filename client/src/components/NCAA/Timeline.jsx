import React from "react";
import { MDBContainer, MDBRow, MDBCol} from "mdb-react-ui-kit";
import './timeline.css'
export default function App() {
  return (
    <div>
      <style>
        {`
        .p-small, ul-small {
          font-size: 14px;
        }`
        }
      </style>
<div className="w3-container">
  <div className="w3-padding-24">
    <h1>STEPS TO NCAA ELIGIBILITY</h1>
    <h2>Following this timeline ensures that high school athletes stay on track to meet NCAA academic and athletic eligibility requirements for playing college sports.</h2>
    </div>
<div className="row">
<div className="col-sm-12 col-md-8"> 
      <div className="container w3-padding-24">
         <h1>NCAA ELIGIBILITY</h1>
          <p>Eligibility for NCAA sports is based on a number of factors, including the student-athlete's academic record, SAT or ACT scores, and overall amateur status. The NCAA Eligibility Center is responsible for evaluating the academic and amateur credentials of all student-athletes who wish to compete in NCAA sports at the Division I or II levels. If you have questions about your eligibility or the registration process, please contact the NCAA Eligibility Center at www.eligibilitycenter.org.</p>
 
         <div className="container w3-padding-24">
          <div className="header mt-1 mb-2">
         <h4>STEPS BY GRADE</h4>
         </div>
    <MDBContainer className="py-2">
      <MDBRow style={{marginLeft:'5px'}}>
        <MDBCol md="12">
        <div id="content">
      <ul className="timeline-with-icons">
        <li className="timeline-item mb-5">
          <span className="timeline-icon fw-bold">
            9
          </span>

          <h5 className="fw-bold">FRESHMAN</h5>
          <p className="text-muted mb-2 fw-bold">Start Planning Early</p>
          <ul className="text-muted">
        <li>Take challenging academic courses and aim for strong grades.</li>
        <li>Build a strong foundation in core subjects: English, math, science, and social studies.</li>
          </ul>
          <p className="text-muted mb-2 fw-bold">Create a Game Plan</p>
          <ul className="text-muted">
        <li>Set athletic and academic goals. Discuss them with your coaches and academic counselors.</li>
        <li>Consider which NCAA division (D1, D2, D3) best aligns with your athletic abilities and academic goals.</li>
          </ul>
          <p className="text-muted mb-2 fw-bold">Review NCAA Eligibility Requirements</p>
          <ul className="text-muted">
        <li>Learn about the NCAA Eligibility Center. This is the body that certifies whether high school athletes meet the academic and amateurism standards to compete at the college level.</li>
        <li>Understand core course requirements (16 core courses for D1 & D2).</li>
          </ul>
        </li>
{/****End 9 */}
{/****Start 10 */}
        <li className="timeline-item mb-5">
        <span className="timeline-icon fw-bold">
            10
          </span>
          <h5 className="fw-bold">SOPHOMORE</h5>
          <p className="text-muted mb-2 fw-bold">Register with the NCAA Eligibility Center</p>
          <ul className="text-muted">
        <li>Visit the NCAA Eligibility Center website and create a profile.</li>
        <li>Begin uploading your academic records and tracking your progress.</li>
          </ul>
          <p className="text-muted mb-2 fw-bold">Continue Strong Academics</p>
          <ul className="text-muted">
        <li>Stay focused on completing core courses and maintaining strong grades.</li>
          </ul>

          <p className="text-muted mb-2 fw-bold">Develop & Promote Your Skills</p>
          <ul className="text-muted">
            <li>Continue participating in your sport. Take part in camps, tournaments, and leagues.</li>
            <li className="text-muted"> Start recording highlight videos and maintaining a record of your stats.</li>
        </ul>

        <p className="text-muted mb-2 fw-bold">Guidance</p>
          <ul>
            <li className="text-muted">  Consult with your high school counselor to ensure you're meeting academic and eligibility requirements.</li>
    </ul>
        </li>
{/**End 10 */}
{/**Start 11 */}
        <li className="timeline-item mb-5">
        <span className="timeline-icon fw-bold">
            11
          </span>
          <h5 className="fw-bold">JUNIOR</h5>
          <p className="text-muted mb-2 fw-bold">Submit Transcripts to NCAA</p>
          <ul className="text-muted">
        <li className="text-muted"> Request your high school to send your transcripts to the NCAA Eligibility Center at the end of your junior year.</li> 
          </ul>
          <p className="text-muted mb-2 fw-bold">Take Standardized Tests</p>
          <ul className="text-muted">
        <li className="text-muted"> Take the SAT or ACT and ensure your scores are sent directly to the NCAA using the code 9999.</li> 
        <li className="text-muted"> Check NCAA minimum test score requirements, which depend on your GPA (higher GPA allows for a lower test score and vice versa).</li> 
          </ul>

          <p className="text-muted mb-2 fw-bold">Monitor Core Course Progress</p>
          <ul className="text-muted">
        <li className="text-muted">By the end of junior year, you should have completed at least 10 of your 16 required core courses.</li> 
        <li>Seven of these courses should be in English, math, or science.</li>
          </ul>
          <p className="text-muted mb-2 fw-bold">Continue Athletic Development</p>
          <ul className="text-muted">
        <li className="text-muted"> Attend recruitment camps and showcases. Keep refining your highlight video to send to college coaches.</li> 
        <li className="text-muted"> Actively communicate with college coaches, including sending emails and filling out recruiting questionnaires.</li> 
          </ul>

          <p className="text-muted mb-2 fw-bold">Start Narrowing College Choices</p>
          <ul className="text-muted">
        <li className="text-muted">Research colleges that are a good fit for both your academics and athletic abilities.</li> 
        <li className="text-muted">Make unofficial visits to campuses.</li> 
          </ul>
        </li>
        {/**end 11 */}

          {/**sttart 12 */}
        <li className="timeline-item mb-5">
        <span className="timeline-icon fw-bold">
            12
          </span>
          <h5 className="fw-bold">SENIOR</h5>
          <p className="text-muted mb-2 fw-bold">Complete Core Courses</p>
          <ul className="text-muted">
        <li className="text-muted"> Finish all 16 core courses required by the NCAA.</li> 
        <li className="text-muted">Keep your grades up—your GPA must meet NCAA standards (minimum 2.3 GPA for Division I).</li> 
          </ul>

          <p className="text-muted mb-2 fw-bold">Final ACT/SAT</p>
          <ul className="text-muted">
        <li className="text-muted"> Retake the SAT/ACT if needed to ensure your scores meet the required eligibility for the NCAA.
</li> 
     </ul>


          <p className="text-muted mb-2 fw-bold">Apply to Colleges and Send Transcripts</p>
          <ul className="text-muted">
        <li className="text-muted"> Apply to your chosen colleges. Make sure your final transcript is sent to the NCAA Eligibility Center after graduation.</li> 
          </ul>


          <p className="text-muted mb-2 fw-bold">Sign National Letter of Intent (NLI)</p>
          <ul className="text-muted">
        <li className="text-muted"> If you receive a scholarship offer from an NCAA Division I or II school, you may be asked to sign a National Letter of Intent (NLI), which officially commits you to that school.</li> 
          </ul>

          
          <p className="text-muted mb-2 fw-bold">Amateurism Certification</p>
          <ul className="text-muted">
        <li className="text-muted"> Complete your amateurism certification on the NCAA Eligibility Center website. This verifies you’ve maintained amateur status and haven’t violated NCAA rules.</li> 
          </ul>

    
          <p className="text-muted mb-2 fw-bold">Stay in Contact with Coaches</p>
          <ul className="text-muted">
        <li className="text-muted"> Continue communicating with college coaches and attend official visits if offered.</li> 
          </ul>

        </li>
      </ul>
      </div>
      </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </div>
    </div>
    <div className="col-sm-12 col-md-4">    
    <div className="container">
<div className="card">
  <div className="card-body">
    <div className="card-text">
      <h4>Key NCAA Eligibility Requirements</h4>
      <ul className="text-muted">
        <li>Core Courses: Complete 16 NCAA-approved core courses by the end of high school.</li>
    <li>GPA: Minimum of 2.3 for Division I and 2.2 for Division II.</li>
     <li>Standardized Tests: SAT or ACT scores that correspond with your GPA on the NCAA sliding scale.</li>
     <li>Amateurism: Maintain amateur status by avoiding professional contracts or endorsement deals.</li>
      </ul>
 </div>
 </div>
  </div>
</div>

<hr />
    <div className="container w3-padding-top-24">
    <div className="card">
    <section className="w3-padding d-flex justify-content-center align-items-center mb-0">
    <article>
    <div className="card-body">
      <div className="card-title">  
      <h4>The the NCAA Requires 16 Core Courses Be Completed in High School</h4>
        <div className="text-decoration-none w3-margin-top">
          <h5 className="text-muted w3-margin-left">16 CORE COURSES BY SUBJECT:</h5>
          <ul className="text-muted" style={{fontSize:'14px'}}>
          <li>4 years of English.</li>
          <li>3 years of Math (Algebra 1 or higher).</li>
          <li>2 years of Natural/Physical Science (1 year of lab).</li>
          <li>Additional courses in Social Science and other electives (world language, extra sciences).</li>
          </ul>
        </div>
      </div>

      <div className="card-title">    
        <p className="fw-bold mt-2 mb-1 w3-margin-left">Understanding The Difference in NCAA Requirement & State Requirements to graduate:</p>
      </div>
      <div className="card-text">
    <ul className="small mt-3 mb-2">
      <li className=" text-dark-emphasis fw-bold">
        NCAA VS. STATE REQUIREMENTS: <br />
       <span className="text-muted fw-light mt-2"> 
        The core courses required by the NCAA MAY VARY from your state's graduation requirements.
        </span> 
    </li>
    </ul> 
    </div>
    </div>
    </article>
    </section>
   </div>
   </div>


   <div className="container py-4">
  <div className="card">
    <section className="card-body d-flex justify-content-center align-items-center mb-0">
      <div>
        <header className="card-title">
          <h4>The NCAA Requires 16 Core Courses Be Completed in High School</h4>
        </header>

        <div className="mt-3">
          <h5 className="text-muted ms-2">16 CORE COURSES BY SUBJECT:</h5>
          <ul className="text-muted" style={{ fontSize: '14px' }}>
            <li>4 years of English.</li>
            <li>3 years of Math (Algebra 1 or higher).</li>
            <li>2 years of Natural/Physical Science (1 year of lab).</li>
            <li>Additional courses in Social Science and other electives (world language, extra sciences).</li>
          </ul>
        </div>

        <div className="card-title">
          <p className="fw-bold mt-3 mb-2 ms-2">
            Understanding The Difference in NCAA Requirement & State Requirements to graduate:
          </p>
        </div>

        <div className="card-text">
          <ul className="small mt-3 mb-2">
            <li className="text-dark-emphasis fw-bold">
              NCAA VS. STATE REQUIREMENTS: <br />
              <span className="text-muted fw-light mt-2">
                The core courses required by the NCAA MAY VARY from your state's graduation requirements.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</div>

  {/**Start  HOW TO LOOK FO COLLEGES
        <li className="timeline-item mb-5">
        <span className="timeline-icon fw-bold">
            11
          </span>
          <h5 className="fw-bold">JUNIOR</h5>
          <p className="text-muted mb-2 fw-bold">Submit Transcripts to NCAA</p>
          <ul className="text-muted">
        <li className="text-muted"> Request your high school to send your transcripts to the NCAA Eligibility Center at the end of your junior year.</li> 
          </ul>
          <p className="text-muted mb-2 fw-bold">Take Standardized Tests</p>
          <ul className="text-muted">
        <li className="text-muted"> Take the SAT or ACT and ensure your scores are sent directly to the NCAA using the code 9999.</li> 
        <li className="text-muted"> Check NCAA minimum test score requirements, which depend on your GPA (higher GPA allows for a lower test score and vice versa).</li> 
          </ul>

          <p className="text-muted mb-2 fw-bold">Monitor Core Course Progress</p>
          <ul className="text-muted">
        <li className="text-muted">By the end of junior year, you should have completed at least 10 of your 16 required core courses.</li> 
        <li>Seven of these courses should be in English, math, or science.</li>
          </ul>
          <p className="text-muted mb-2 fw-bold">Continue Athletic Development</p>
          <ul className="text-muted">
        <li className="text-muted"> Attend recruitment camps and showcases. Keep refining your highlight video to send to college coaches.</li> 
        <li className="text-muted"> Actively communicate with college coaches, including sending emails and filling out recruiting questionnaires.</li> 
          </ul>

          <p className="text-muted mb-2 fw-bold">Start Narrowing College Choices</p>
          <ul className="text-muted">
        <li className="text-muted">Research colleges that are a good fit for both your academics and athletic abilities.</li> 
        <li className="text-muted">Make unofficial visits to campuses.</li> 
          </ul>
        </li>
*/}
    </div>
    </div>
    </div>
    </div>
  );
}