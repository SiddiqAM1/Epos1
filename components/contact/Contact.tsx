"use client"
import React, { useState } from 'react';
import "./Contact.css"
import contactImage from "@/public/1.png"
import Image from 'next/image';
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    const dataToSend={
      sender:formData.email,
      message:formData.message,
      name:formData.name
    }
    e.preventDefault();

    fetch('http://localhost:4000/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        // Handle response
        console.log(response);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });

    
    let newErrors: { [key: string]: string } = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length === 0) {
      // Submit the form
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='contact' id='contact'>
        <div className="contact-image">
            <Image src={contactImage} alt=""/>
        </div>
    <form className="contact-form"onSubmit={handleSubmit}>
        <p>Contact Form</p>
        <h1 className='contact-title'>General Enquiry</h1>
      <div className={`contact-form-field ${errors.name ? "invalid" : ""}`}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className='form-validate'>{errors.name}</p>}
      </div>
      <div className={`contact-form-field ${errors.email ? "invalid" : ""}`}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className='form-validate'>{errors.email}</p>}
      </div>
      <div className={`contact-form-field ${errors.message ? "invalid" : ""}`}>
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className='form-validate'>{errors.message}</p>}
      </div>
      <button className='contact-btn' type="submit" disabled={isSubmitted}>Submit</button>
    </form>
    </div>
  );
};

export default ContactForm;
