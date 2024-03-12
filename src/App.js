import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contactus from './components/contactus';

function App() {
  return (
    <>
    <BrowserRouter basename="Ebook">
        <Routes>
          <Route path="/" element={<Contactus/>} />  
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


// import React,{useState} from 'react';
// import AnimatedModal from './ebookmodal';

// export default function Contactus(){
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [currentStep, setCurrentStep] = useState(0);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setCurrentStep(0);
//     window.location.reload(false);
//   };

//   const handleNext = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const handlePrev = () => {
//     setCurrentStep(currentStep - 1);
//   };
// return(
//   <>
//    <button onClick={openModal} className='btn btn-warning m-2'>Download Ebook</button>
//                     <AnimatedModal
//                       isOpen={modalIsOpen}
//                       onRequestClose={closeModal}
//                       currentStep={currentStep}
//                       handleNext={handleNext}
//                       handlePrev={handlePrev}
//                     />
//   </>
// )
// }