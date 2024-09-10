import React, { useState } from 'react';
import '../../styles/globals.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ Name: '', Email: '', Phone: '', Message: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxJNvlufnU5B4fOIkRYVuKbItZdvDIYjyX91dSaCNY-UcOtJnPjYSbEJmjDEUa7lJUF/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setMessage('Thank you!');
        setFormData({ Name: '', Email: '', Phone: '', Message: '' }); // Reset form data
        setTimeout(() => setMessage(''), 5000); // Clear message after 5 seconds
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error!', error.message);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
  <>
    <div>
    <h1 className='contact-title'>Subscribe!</h1>
    </div>
    <div className="contact-right">
      <form className="contact-right" name="submit-to-google-sheet" onSubmit={handleSubmit}>
        <input 
          className='input-box'
          type="text"
          name="Name"
          placeholder="Your Name"
          value={formData.Name}
          onChange={handleChange}
          required
        />
        <input
          className='input-box'
          type="email"
          name="Email"
          placeholder="Your Email"
          value={formData.Email}
          onChange={handleChange}
          required
        />
        <input
          className='input-box'
          type="tel"
          name="Phone"
          placeholder="Your Phone (optional)"
          value={formData.Phone}
          onChange={handleChange}
        />
        <textarea id="contact-message"
          className='input-box'
          name="Message"
          rows="6"
          placeholder="Your Message"
          value={formData.Message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn btn2 submit-button">Submit</button>
      </form>
      {message && <span id="msg">{message}</span>}
    </div>
  </>
  );
};

export default ContactForm;
