import React, { useState } from "react";

const ContactModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
 
      {/* Button to trigger modal */}
      <p className='px-4 w3-hide-small'>Click <span className='w3-text-pink'><i>LEARN MORE</i></span> to explore.</p>
              <button tag="a" 
               onClick={openModal}
               className='btn mt-4 pink-button' size="lg"
               style={{backgroundImage: 'linear-gradient(to right, #f64b65, #fa52ce)'}}>
                 Message us
              </button>


      {/* Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="contactModalLabel">Contact</h5>
                <button type="button" className="close" onClick={openModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
    
              </div>
              <div className="modal-body">
                <p>Reserve a table, ask for today's special, or just send us a message:</p>
                <form action="/action_page.php" target="_blank">
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="Name" required name="Name" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="number" placeholder="How many people" required name="People" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="datetime-local" required name="date" defaultValue="2020-11-16T20:00" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="Message \ Special requirements" required name="Message" />
                  </div>
                  <button className="btn btn-primary" type="submit">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
