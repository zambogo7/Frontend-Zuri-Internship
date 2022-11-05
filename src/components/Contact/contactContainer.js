import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';

const ContactContainer = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ContactContainer;
