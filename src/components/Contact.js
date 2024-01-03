import React from 'react';

const Contact = () => {
    return (
      <div className="page-container">
        <h1>Contact</h1>
        <p>For inquiries, please contact me:</p>
        <div className="contact-item">
          <img src="/email_icon.png" alt="Email" />
          <span>stjepandeveloper@yahoo.com</span>
        </div>
        <div className="contact-item">
          <img src="/github_icon.png" alt="GitHub" />
          <span>github.com/stjepandeveloper</span>
        </div>
      </div>
    );
  };

export default Contact;