import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted', formData);
  };

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label>Email</label>
        <input
          type='text'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label>Message</label>
        <textarea
          type='text'
          id='message'
          name='message'
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}
