import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ContactLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-layout">
      <h2>Contact Page</h2>

      <div className="contact-buttons">
        <button onClick={() => navigate('info')}>Contact Info</button>
        <button onClick={() => navigate('form')}>Contact Form</button>
      </div>

      <hr />

      <Outlet />
    </div>
  );
};

export default ContactLayout;
