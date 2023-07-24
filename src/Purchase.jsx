import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { useLocation } from 'react-router-dom';
import ChatButton from './ChatButton'


const Purchase = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [aptSuiteNo, setAptSuiteNo] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [price, setPrice] = useState(0);

  const [product, setProduct] = useState({title: '', price: '', img: ''});
  const { state } = useLocation();

  useEffect(() => {
    const storedProduct = JSON.parse(sessionStorage.getItem('product'));
    if (storedProduct) {
      setProduct(storedProduct);
    }
  }, []);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission or API call with the collected data
    // You can access the collected data from the state variables (name, lastName, phoneNumber, email, address, postalCode, city, province, aptSuiteNo, shippingMethod, creditCard, expiryDate, cvv)
    // Perform any necessary validations and processing
    // Reset the form or navigate to the next page
  };

  const handleShippingMethodChange = (method, price) => {
    setShippingMethod(method);
    setPrice(price);
  };

  const styles = `
  .purchase-page {
    padding: 20px;
  }
  
  .progress-bar {
    position: relative;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #007bff;
    border-radius: 4px;
    transition: width 0.3s ease;
  }
  
  .step-indicator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;
  }
  
  .step {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .step.active {
    color: #333;
    font-weight: bold;
    
  }
  
  .step-text {
    padding: 5px;
    
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  
  .left {
    width: 50%;
  }
  
  .right {
    width: 50%;
    padding-left: 20px;
  }
  
  .product-info {
    margin-bottom: 20px;
  }
  
  .product-info h3 {
    color: #333;
    margin-bottom: 5px;
  }
  
  .product-info p, label {
    color: #333;
    margin-bottom: 0;
  }
  
  form {
    margin-bottom: 20px;
  }
  
  .form-row {
    margin-bottom: 10px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 4px;
    background-color: #f0f0f0;
    transition: background-color 0.3s ease;
  }
  
  input:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 2px #007bff;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .shipping-options {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }
  
  .shipping-options label {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  
  .shipping-options input {
    margin-right: 5px;
  }
  
  .button {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .button-row {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  
  .button:hover {
    background-color: #007bff;
    color: #fff;
  }
  
  .previous-button,
  .next-button {
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .submit-button {
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: #28a745;
  
    color: #fff;
  }
  `;

  const renderProgressBar = () => {
    const steps = ['Personal Information', 'Shipping Details', 'Credit Card Information'];
    const progressWidth = ((step - 1) / (steps.length - 1)) * 100;
  
    return (
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressWidth}%` }}></div>
        <div className="step-indicator">
          {steps.map((s, index) => (
            <div key={index} className={`step ${step === index + 1 ? 'active' : ''}`}>
              <span className="step-text">{s}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderProductInfo = () => {
    if (product.title) {
      return (
        <div className="product-info">
          <h3>{product.title}</h3>
          <img src={product.img} alt={product.title} />
          <p>Price: ${product.price}</p>
        </div>
      );
    }
    return (
      <div className="product-info">
        <h3>No product selected</h3>
      </div>
    );
  };

  const renderStep1 = () => {
    return (
      <div>
        <h2>Step 1: Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">First Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </form>
      </div>
    );
  };


  const renderStep2 = () => {
    return (
      <div>
        <h2>Step 2: Shipping Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="postalCode">Postal Code:</label>
            <input
              type="text"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="province">Province:</label>
            <input
              type="text"
              id="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="aptSuiteNo">Apt / Suite No.:</label>
            <input
              type="text"
              id="aptSuiteNo"
              value={aptSuiteNo}
              onChange={(e) => setAptSuiteNo(e.target.value)}
            />
          </div>
          <label>Shipping Method:</label>
          <div className="shipping-options">

            <div>
              <input
                type="radio"
                value="Standard"
                checked={shippingMethod === 'Pickup'}
                onChange={() => handleShippingMethodChange('Pickup', 0)}
              />
              <label htmlFor="standard">FREE In-Store Pickup ($0)</label>
            </div>

            <div>
              <input
                type="radio"
                value="Standard"
                checked={shippingMethod === 'Standard'}
                onChange={() => handleShippingMethodChange('Standard', 9.99)}
              />
              <label htmlFor="standard">Standard ($9.99)</label>
            </div>
            <div>
              <input
                type="radio"
                value="Express"
                checked={shippingMethod === 'Express'}
                onChange={() => handleShippingMethodChange('Express', 19.99)}
              />
              <label htmlFor="express">Express ($19.99)</label>
            </div>
            <div>
              <input
                type="radio"
                value="Overnight"
                checked={shippingMethod === 'Overnight'}
                onChange={() => handleShippingMethodChange('Overnight', 29.99)}
              />
              <label htmlFor="overnight">Overnight ($29.99)</label>
            </div>
          </div>
          <button className="previous-button" onClick={handlePrevious}>
            Previous
          </button>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </form>
      </div>
    );
  };

  const renderStep3 = () => {
    return (
      <div>
        <h2>Step 3: Credit Card Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="creditCard">Credit Card Number:</label>
            <input
              type="text"
              id="creditCard"
              value={creditCard}
              onChange={(e) => setCreditCard(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="cvv">CVV Number:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
          <button className="previous-button" onClick={handlePrevious}>
            Previous
          </button>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="purchase-page">
      <Navbar />
       <style>{styles}</style>
      {renderProgressBar()}
      <div className="container">
        <div className="left">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </div>
        <div className="right">
          {renderProductInfo()}
        </div>
        <ChatButton />
      </div>
    </div>
  );
};

export default Purchase;
