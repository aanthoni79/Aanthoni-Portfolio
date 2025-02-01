import React from 'react';

const ContactForm = () => {
  return (
    <div className="">
      <h1>Contact Us</h1>
      <iframe
        src="/conatct-form/contact_form.html" // Path to your HTML file
        title="Contact Form"
        width="100%"
        height="500px"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default ContactForm;