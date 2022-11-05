import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Alert from '../Alert/index';

const Contact = () => {
  const [setValue] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    // alert('message sent');
    event.preventDefault();
    event.target.reset();
    setShowAlert(true);
  };

  // const alertMessage = () => {
  //   let success = document.querySelector('success');
  //   console.log(success);
  //   alert('message sent');
  // };

  return (
    <main className=" bg-milk">
      <h1 className="text-gray-dark pb-8 pt-3 pl-5 md:ml-24 md:pt-8">
        <Link to="/">Go back</Link>
      </h1>
      <div className="flex flex-col items-center py-12">
        <div className="py-12 px-7">
          <h1 className="text-4xl leading-10 font-semibold mb-5 text-gray-dark">
            Contact Me
          </h1>
          <p className="text-lg md:text-xl mb-12 text-light">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
          {showAlert && (
            <Alert
              message="Message Sent!"
              interval={2000}
              action="success"
              clear={() => setShowAlert(false)}
            />
          )}
          <form onSubmit={handleSubmit} className="w-full max-w-xl">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block tracking-wide text-mblack text-sm font-semibold mb-2">
                  First name
                </label>
                <input
                  className="block w-full bg-milk text-base text-gray-dark placeholder:focus:text-mblack border border-lighter_gray rounded py-3 px-4 mb-3 leading-tight focus:border-lighter_gray focus:outline-none"
                  type="text"
                  id="first_name"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block tracking-wide text-mblack text-sm font-semibold mb-2">
                  Last name
                </label>
                <input
                  className="block w-full text-base bg-milk text-gray-dark placeholder:focus:text-mblack border border-lighter_gray rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  type="text"
                  id="last_name"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  placeholder="Enter your last name"
                  required
                />
              </div>
              <div className="w-full px-3">
                <label className="block tracking-wide text-mblack text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  className="block w-full text-base bg-milk text-gray-dark placeholder:focus:text-mblack border border-lighter_gray rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  type="email"
                  id="email"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  placeholder="yourname@email.com"
                  required
                />
              </div>
              <div className="w-full px-3">
                <label className="block tracking-wide text-mblack text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  className="block w-full text-base bg-milk text-gray-dark placeholder:focus:text-mblack placeholder:focus:content-[hey] border border-lighter_gray rounded py-3 px-4 mb-6 leading-tight focus:outline-none"
                  placeholder="Send me a message and I will reply you as soon as possible..."
                  required
                ></textarea>
              </div>
              <div className="w-full px-3 relative">
                <input
                  type="checkbox"
                  id="checkbox"
                  required
                  className=" check_shadow w-5 h-5  cursor-pointer mr-3 outline-none accent-milk"
                />
                <span className=" absolute -top-0 left-10  text-base text-mblack">
                  You agree to providing your data to{' '}
                  <span className="font-semibold">Zedekiah Ambogo</span> who
                  may contact you.
                </span>
              </div>
              <div className="w-full px-3 mt-14 md:mt-6">
                <button
                  type="submit"
                  id="btn__submit"
                  className="mb-2 w-full py-3 inline-block bg-primary text-white font-semibold text-base rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
