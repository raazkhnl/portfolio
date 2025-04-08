import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Contact = () => {
  const formRef = useRef(null);

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending...");


    const formElement = formRef.current;
    const formData = new FormData(formElement);

    formData.append("access_key", "a85833d1-1e17-4e4f-b717-33712b7c1d19");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ success: true, message: 'Message sent successfully!' });
        setFormDetails(formInitialDetails);
        formElement.reset(); // Reset the actual form
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later!' });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({ success: false, message: 'An error occurred. Please try again.' });
    } finally {
      setButtonText("Send");
    }
  };

  const onFormUpdate = (category, value) => {
    setFormDetails(prev => ({
      ...prev,
      [category]: value
    }));
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={onSubmit} ref={formRef}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1 text-center">
                        <textarea name="message" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>

                        {status.message && (
                          <p className={status.success ? "text-success" : "text-danger"} style={{ fontSize: '20px' }}>
                            {status.message}
                          </p>
                        )}

                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;