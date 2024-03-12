import React, { useState } from "react";
import Modal from "react-modal";
import Stepper from "react-stepper-horizontal";

const AnimatedModal = ({
  isOpen,
  onRequestClose,
  currentStep,
  handleNext,
  handlePrev,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    websiteurl: "",
    companyName: "",
    empstrength: "",
  });

  const [touchedFields, setTouchedFields] = useState({
    email: false,
    firstName: false,
    lastName: false,
    phone: false,
    websiteurl: false,
    companyName: false,
  });

  const isStep1Valid = () => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return (
      (touchedFields.email && formData.email.trim() !== "") &&
      (formData.email.trim() === "" || emailRegex.test(formData.email))
    );
  };
  const isStep2Valid = () => {
    return (
      (touchedFields.firstName && formData.firstName.trim() !== "") &&
      (touchedFields.lastName && formData.lastName.trim() !== "")
    );
  };
  

  const isStep3Valid = () => {
    return (
      (touchedFields.phone && formData.phone.trim().length === 10) &&
      (touchedFields.websiteurl && formData.websiteurl.trim() !== "")
    );
  };
  

  const isStep4Valid = () => {
    return (
      (touchedFields.companyName && formData.companyName.trim() !== "") &&
      (touchedFields.empstrength && formData.empstrength.trim() !== "")
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Allow only numeric input for the phone number
    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [name]: true,
    }));
  };
  

  const handleInputBlur = (field) => {
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [field]: true,
    }));
  };
  const steps = [
    {
      title: "Step 1",
      content: (
        <>
         <form className="d-md-flex flex-column justify-content-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                className={`form-control border-3 ${
                  touchedFields.email && formData.email.trim() === ""
                    ? "is-invalid"
                    : ""
                }`}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur("email")}
                style={{width:"250px", marginLeft:'auto', marginRight:'auto'}}
                required
              />
              {touchedFields.email &&
                formData.email.trim() === "" && (
                  <div className="invalid-feedback text-center">
                    Please enter a valid email address.
                  </div>
                )}
            </div>
            <div className="text-end mt-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNext}
                disabled={!isStep1Valid()}
              >
                Next
              </button>
            </div>
          </form>
        </>
      ),
    },
    {
      title: "Step 2",
      content: (
        <>
                   <form className="d-md-flex flex-column">
            <div className="d-md-flex gap-3 justify-content-center mb-5">
              <div className="">
                <label>
                  <b>First Name</b>
                </label>
                <input
                  className={`form-control border-3 ${
                    touchedFields.firstName &&
                    formData.firstName.trim() === ""
                      ? "is-invalid"
                      : ""
                  }`}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={() => handleInputBlur("firstName")}
                  placeholder="Enter First Name"
                  required
                />
                {touchedFields.firstName &&
                  formData.firstName.trim() === "" && (
                    <div className="invalid-feedback">
                      Please enter your first name.
                    </div>
                  )}
              </div>

              <div className="">
                <label>
                  <b>Last Name</b>
                </label>
                <input
                  className={`form-control border-3 ${
                    touchedFields.lastName &&
                    formData.lastName.trim() === ""
                      ? "is-invalid"
                      : ""
                  }`}
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={() => handleInputBlur("lastName")}
                  placeholder="Enter Last Name"
                  required
                />
                {touchedFields.lastName &&
                  formData.lastName.trim() === "" && (
                    <div className="invalid-feedback">
                      Please enter your last name.
                    </div>
                  )}
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handlePrev}
                // Add similar logic for disabling Previous button
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNext}
                disabled={!isStep2Valid()}
              >
                Next
              </button>
            </div>
          </form>
        </>
      ),
    },
    {
      title: "Step 3",
      content: (
        <>
         <form className="d-md-flex flex-column">
         <div className="d-md-flex gap-3 justify-content-center mb-5">
            <div className="">
              <label>
                <b>Phone Number</b>
              </label>
              <input
                className={`form-control border-3 ${
                  touchedFields.phone &&
                  (formData.phone.trim() === "" || formData.phone.trim().length !== 10)
                    ? "is-invalid"
                    : ""
                }`}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur("phone")}
                minLength="10"
                maxLength="10"
                placeholder="Enter your Phone Number"
                pattern="[0-9]*"
                inputMode="numeric"
                required
              />


              {touchedFields.phone &&
                formData.phone.trim() === "" && (
                  <div className="invalid-feedback">
                    Please enter your phone number.
                  </div>
                )}
            </div>
            <div className="">
              <label>
                <b>Website URL</b>
              </label>
              <input
                className={`form-control border-3 ${
                  touchedFields.websiteurl && formData.websiteurl.trim() === ""
                    ? "is-invalid"
                    : ""
                }`}
                type="text"
                name="websiteurl"
                value={formData.websiteurl}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur("websiteurl")}
                placeholder="Enter Website URL"
                required
              />
              {touchedFields.websiteurl &&
                formData.websiteurl.trim() === "" && (
                  <div className="invalid-feedback">
                    Please enter your website URL.
                  </div>
                )}
            </div>
          </div>
            <div className="d-flex justify-content-between mt-3" >
             
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handlePrev}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNext}
                disabled={!isStep3Valid()}
              >
                Next
              </button>
            </div>
          </form>
        </>
      ),
    },
    {
      title: "Step 4",
      content: (
        <>
          <form className="d-md-flex flex-column">
          <div className="d-md-flex gap-3 justify-content-center mb-5">
            <div className="">
              <label>
                <b>Company Name</b>
              </label>
              <input
                className={`form-control border-3 ${
                  touchedFields.companyName &&
                  formData.companyName.trim() === ""
                    ? "is-invalid"
                    : ""
                }`}
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur("companyName")}
                placeholder="Enter Company Name"
                required
              />
              {touchedFields.companyName &&
                formData.companyName.trim() === "" && (
                  <div className="invalid-feedback">
                    Please enter your company name.
                  </div>
                )}
            </div>
            <div >
              <label>
                <b>How many employees work there?</b>
              </label>
              <select
                className={`form-select border-3 ${
                  touchedFields.empstrength &&
                  formData.empstrength.trim() === ""
                    ? "is-invalid"
                    : ""
                }`}
                name="empstrength"
                onChange={handleInputChange}
                onBlur={() => handleInputBlur("empstrength")}
                required
              >
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
              {touchedFields.empstrength &&
                formData.empstrength.trim() === "" && (
                  <div className="invalid-feedback">
                    Please choose the number of employees.
                  </div>
                )}
            </div>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handlePrev}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={onRequestClose}
                disabled={!isStep4Valid()}
              >
                Finish
              </button>
            </div>
           
          </form>
        </>
      ),
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          width: "80%",
          height: "70%",
          margin: "auto",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div>
        <button onClick={onRequestClose} className="close-button btn fs-4">
          <i class="bi bi-x-circle-fill"></i>
        </button>
        <Stepper steps={steps} activeStep={currentStep} />

        <div className="modal-body">
          <h2 className="mt-5 text-center">Download the Generative AI Ebook</h2>
          <p className="text-center">All fields are required.</p>
          {steps[currentStep].content}
          {/* Your modal body content goes here */}
        </div>

        <div className="modal-footer d-flex justify-content-between">
          {/* <div>
            {currentStep > 0 && (
              <button
                className="btn btn-outline-danger"
                onClick={handlePrev}
                // disabled={
                //   !Object.values(formData).some((x) => x !== null && x !== "")
                // }
              >
                Previous
              </button>
            )}
          </div> */}

          {/* <div>
            {currentStep < steps.length - 1 && (
              <button
                className="btn btn-primary"
                onClick={handleNext}
                disabled={
                  !Object.values(formData).some((x) => x !== null && x !== "")
                }
              >
                Next
              </button>
            )}

            {currentStep === steps.length - 1 && (
              <button className="btn btn-success" onClick={onRequestClose}>
                Finish
              </button>
            )}

            <button onClick={onRequestClose}>Cancel</button>
          </div> */}
        </div>
      </div>
    </Modal>
  );
};

export default AnimatedModal;
