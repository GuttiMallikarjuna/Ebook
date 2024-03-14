import React,{useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import Contactbanner from '../images/contactus-img-banner.jpg'
import AnimatedModal from './ebookmodal';

const Contactus = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
      setCurrentStep(0);
      window.location.reload(false);
    };
  
    const handleNext = () => {
      setCurrentStep(currentStep + 1);
    };
  
    const handlePrev = () => {
      setCurrentStep(currentStep - 1);
    };
    return (
        <div className='fullscreen'>
            <Navbar/>
            <main>
                <img src={Contactbanner} alt='banner image' className='contactbanner'/>
                <div className='container text-center pt-md-5 pb-md-5 p-3 container-contact'>
                <p className='mb-5'>Thank you for your interest in Infomerica services. Please provide the following information about your business needs to help us serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within 8 hours.</p>
                <div className='contactform text-white rounded p-md-5 p-3'>
                    <h2>Contact Us</h2>
                    <form>
                    <div className='d-md-flex m-1'>
                  <input type="text" placeholder='First Name' className='form-control m-md-3 mt-3 mb-3 rounded-pill p-4' required/>
                  <input type="text" placeholder='Last Name' className='form-control  m-md-3 mt-3 mb-3 rounded-pill p-4' required/>
                  </div>
                  <div className='d-md-flex m-1'>
                    <input type="number" placeholder='Mobile Number' className='form-control  m-md-3 mt-3 mb-3 rounded-pill p-4' required/>
                    <input type="email" placeholder='Email' className='form-control  m-md-3 mt-3 mb-3 rounded-pill p-4'required/>
                  </div>
                   <div className='m-3'>
                   <textarea placeholder='Message' className='form-control rounded' style={{height:"130px"}}></textarea>
                   </div>
                   <div>
                    <button className='btn btn-danger m-2'>Submit</button>
                  
                   </div>
                    </form>
                    <button onClick={openModal} className='btn btn-warning m-2'>Download Ebook</button>
                    <AnimatedModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        currentStep={currentStep}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
                </div>
                
                </div>
               
            </main>
           
            <Footer/>
            
        </div>
    );
};

export default Contactus;