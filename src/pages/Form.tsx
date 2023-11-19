import React, { useState } from 'react';
import './AppStyles.css';

const AppForm: React.FC = () => {
  const [formData, setFormData] = useState({
    subdomain: '',
    title: '',
    description: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Add logic to handle form submission
  };

  return (
    <form className="app-form" onSubmit={handleSubmit}>
      <label>
        Subdomain:
        <input
          type="text"
          name="subdomain"
          value={formData.subdomain}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        H1 Heading:
        <input
          type="text"
          name="heading"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <br />

      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AppForm;
