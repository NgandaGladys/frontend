import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/footer';
import { useEffect } from 'react';

const HomePage = () => {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = () => {
    let formData = {
      customerName: customerName,
      email: email,
      message: message,
    };
    saveData(formData);
    alert('Your message has been received successfully!');
  };

  // // save data to localstorage  but first make it a string
  // const saveData = (formData) => {
  //   let jsonData = JSON.stringify(formData);
  //   localStorage.setItem('formData', jsonData);
  // };

  // // get data from localStorage, parse it from string back to object
  // const getSavedData = () => {
  //   let formData = localStorage.getItem('formData');
  //   let data = JSON.parse(formData);
  //   return data;
  // };

  const saveData = (formData) => {
    let jsonData = JSON.stringify([...getSavedData(), formData]);
    localStorage.setItem('customerData', jsonData);
  };

  const getSavedData = () => {
    let formData = localStorage.getItem('customerData');
    return formData ? JSON.parse(formData) : [];
  };



  useEffect(() => {
    let data = getSavedData();
    if (data) {
      setCustomerName(data.customerName);
      setEmail(data.email);
      setMessage(data.message);
    }
  }, []);

  return (
    <section className="flex flex-col gap-4 justify-between items-start w-full min-h-screen bg-white">
      <main className="flex gap-4 justify-between items-start w-full px-[5%] mt-24">
        {/* Left */}
        <div className="flex min-w-min flex-col justify-center items-center w-1/2 gap-4">
          <div className="flex flex-col">
            <h1 className="flex gap-2 font-semibold text-lg md:text-2xl">
              <span className="font-bold text-2xl md:text-3xl">Get in</span>
              Touch with us
            </h1>
            <p className="font-medium md:text-xl text-balance">
              For all your inquries or complaints, we got you covered you can
              also reach out via email or phone call. Thank you for choosing us
            </p>
          </div>
          {/* The Image Stuff */}
          <div className="flex flex-col w-full justify-start items-start">
            <img src="img/team.png" alt="support" width={400} />

            <Link to="/form">
              <button
                type="button"
                className="flex bg-[#F6B535] hover:bg-[#c7932b] text-black border-2 border-black rounded-3xl px-12 py-2">
                Log in
              </button>
            </Link>
          </div>
        </div>
        {/* Right Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4 justify-center items-center border-none font-medium  rounded-md p-4 shadow">
          <div className="flex flex-col">
            <label htmlFor="nameInput">Customer/Institution Name:</label>
            <input
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              id="nameInput"
              type="text"
              className="outline-none flex p-2 w-full border border-gray-500 hover:border-lime-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="emailInput">Email:</label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="emailInput"
              type="text"
              className="outline-none flex p-2 w-full border border-gray-500 hover:border-lime-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="messageInput">Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              id="messageInput"
              type="text"
              className="outline-none flex p-4 w-full border border-gray-500 hover:border-lime-500"
            />
          </div>
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="flex bg-lime-700 hover:bg-lime-800 text-white rounded-3xl px-12 py-2">
            submit
          </button>
        </form>
      </main>
      {/* The Footer */}
      <footer className="flex w-full justify-between items-center bg-lime-800 text-white px-[5%] pb-8 pt-8">
        <div className="flex">
          <p>Eseri, Plot 2893 Kayondo Road Bbuye-Ntinda Kampala(U)</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>+256 777767608</h3>
          <h3>info@zimba.io</h3>
        </div>
      </footer>
      {/* <Footer /> */}
    </section>
  );
};

export default HomePage;
