import React, { useState } from "react";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent ✅ \nFrom: ${form.name} (${form.email})\n${form.message}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Me</h2>
      <label>Name</label>
      <input name="name" value={form.name} onChange={handleChange} required />

      <label>Email</label>
      <input type="email" name="email" value={form.email} onChange={handleChange} required />

      <label>Message</label>
      <textarea name="message" value={form.message} onChange={handleChange} required />

      <button type="submit">Send Message</button>
    </form></div>
  );
}
