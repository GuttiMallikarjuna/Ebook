import React,{useState} from 'react';
import Modal from 'react-modal';
import Stepper from 'react-stepper-horizontal';

const AnimatedModal = ({ isOpen, onRequestClose, currentStep, handleNext, handlePrev }) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        websiteurl:'',
        companyName:'',
        empstrength:'',
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const steps = [
        {
          title: 'Step 1',
          content: (
            <>
            <form>
              <div className='text-center'>
              <label>
                <b>Email</b>
              </label>
              <input className='form-control border-3' style={{width:"230px" ,marginLeft:"auto", marginRight:"auto"}} type="email" name="email" value={formData.email} onChange={handleInputChange} required/>
              </div>
            </form>
            </>
          ),
        },
        { title: 'Step 2', 
          content: (
            <>
            <form className='d-md-flex gap-3 justify-content-center'>
              <div className=''>
              <label>
                <b>First Name</b>
              </label>
              <input className='form-control border-3'  type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required/>
              </div>
              <div className=''>
              <label>
                <b>Last Name</b>
              </label>
              <input className='form-control border-3'  type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required/>
              </div>
            </form>
            </>

          ) },
        { title: 'Step 3', 
          content: (
            <>
            <form className='d-md-flex gap-3 justify-content-center'>
              <div className=''>
              <label>
                <b>Phone Number</b>
              </label>
              <input className='form-control border-3'  type="number" name="phone" value={formData.phone} onChange={handleInputChange} required/>
              </div>
              <div className=''>
              <label>
                <b>Website URL</b>
              </label>
              <input className='form-control border-3'  type="text" name="websiteurl" value={formData.websiteurl} onChange={handleInputChange} required/>
              </div>
            </form>
            </>

          )
        
        },
        { title: 'Step 4', 
        content: (
          <>
          <form className='d-md-flex gap-3 justify-content-center'>
            <div className=''>
            <label>
              <b>Company Name</b>
            </label>
            <input className='form-control border-3'  type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} required/>
            </div>
            <div className=''>
            <label>
              <b>How many employees work there?</b>
            </label>
            <select className='form-select border-3' name="empstrength"  onChange={handleInputChange} required>
                  <option>- Please Choose -</option>
                  <option value="1">1</option>
                  <option value="2 to 5">2 to 5</option>
                  <option value="6 to 10">6 to 10</option>
                  <option value="11 to 25">11 to 25</option>
                  <option value="26 to 50">26 to 50</option>
                  <option value="51 to 200">51 to 200</option>
                  <option value="201 to 1000">201 to 1000</option>
                  <option value="1001 to 10000">1001 to 10000</option>
                  <option value="10001 or more">10001 or more</option>
            </select>
            </div>
          </form>
          </>

        )
      
      },
      ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          width: '70%',
          height: '60%',
          margin: 'auto',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <div>
        <button onClick={onRequestClose} className="close-button btn fs-4">
        <i class="bi bi-x-circle-fill"></i>
        </button>
        <Stepper steps={steps} activeStep={currentStep} />

        <div className="modal-body">
        <h2 className='mt-5 text-center'>Download the Generative AI Ebook</h2>
            <p className='text-center'>All fields are required.</p>
        {steps[currentStep].content}
          {/* Your modal body content goes here */}
        </div>

        <div className="modal-footer d-flex justify-content-between">
         <div>
         {currentStep > 0 && <button className='btn btn-outline-danger' onClick={handlePrev}>Previous</button>}
         </div>

         <div>
         {currentStep < steps.length - 1 && <button className='btn btn-primary' onClick={handleNext} >Next</button>}

        {currentStep === steps.length - 1 && <button className='btn btn-success' onClick={onRequestClose}>Finish</button>}

        {/* <button onClick={onRequestClose}>Cancel</button> */}
         </div>
        </div>
      </div>
    </Modal>
  );
};

export default AnimatedModal;
