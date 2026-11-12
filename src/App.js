import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agreeTerms: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const provinces = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Data Entry Form</h1>
        <form onSubmit={handleSubmit}>
          {/* Row 1: Email & Name */}
          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group half">
              <label htmlFor="fullName">Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="1234 Main St"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address2">Address 2</label>
            <input
              type="text"
              id="address2"
              name="address2"
              placeholder="Apartment, studio, or floor"
              value={formData.address2}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group third">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group third">
              <label htmlFor="province">Province</label>
              <select
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                {provinces.map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group third">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeTerms">Agree Terms &amp; Condition?</label>
          </div>

          <div className="button-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>

      {submittedData && (
        <div className="output-box">
          <p>
            <span className="output-label">Email:</span> {submittedData.email}
          </p>
          <p>
            <span className="output-label">Full Name:</span> {submittedData.fullName}
          </p>
          <p>
            <span className="output-label">Address:</span>{' '}
            {submittedData.address}
            {submittedData.address2 ? `, ${submittedData.address2}` : ''}
          </p>
          <p>
            <span className="output-label">City:</span> {submittedData.city}
          </p>
          <p>
            <span className="output-label">Province:</span> {submittedData.province}
          </p>
          <p>
            <span className="output-label">Postal Code:</span> {submittedData.postalCode}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;