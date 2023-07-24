import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ChatButton from './ChatButton'


const ConsoleProduct = () => {

  const location = useLocation();
  const game = location.state ? location.state.game : { name: '', img: '', price: '' };

  const media = [
    { type: 'image', src: game.img },
    { type: 'video', src: "https://www.youtube.com/embed/sPFII3ozSHI" }
  ];

  const [currentMedia, setCurrentMedia] = useState(0);

  const title = game.name;
  const description = "Embark on an epic adventure in a vast and immersive world, where you'll face challenges, conquer foes, and uncover mysteries. Utilize your unique abilities and skills to overcome obstacles and achieve your goals. Make impactful choices that shape the outcome of your journey, and forge alliances or rivalries with intriguing characters. Whether you're a lone hero or part of a team, your actions will determine the fate of this captivating universe. Are you ready to become a legend?";
  const price = game.price;

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const [showBanner, setShowBanner] = useState(true);  

  const handlePrevClick = () => {
    setCurrentMedia((prevMedia) => (prevMedia === 0 ? media.length - 1 : prevMedia - 1));
  };

  const handleNextClick = () => {
    setCurrentMedia((prevMedia) => (prevMedia === media.length - 1 ? 0 : prevMedia + 1));
  };

  const styles = `
  .product-page {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    min-height: 100vh;
  }
  
  .product-slider {
    width: 50%;
    padding-right: 20px;
  }
  
  .slider-media {
    display: none;
  }
  
  .slider-media.active {
    display: block;
  }
  
  .product-slider img, .product-slider iframe {
    width: 100%;
    max-height: 500px;
    object-fit: contain;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .slider-controls {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .slider-button {
    margin: 0 5px;
    padding: 8px 16px;
    background-color: #007BFF;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .product-details {
    width: 50%;
    text-align: center;
  }
  
  .product-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }
  
  .product-description {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
    color: #333;
  }
  
  .product-price {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
  }
  
  .purchase-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
  }
  
  .purchase-button:hover {
    background-color: #0056b3;
  }

  .banner {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00aaff;
    color: #fff;
    padding: 10px;
  }
  
  .close-button {
    border: none;
    background-color: transparent;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
  `;

  const handlePurchase = () => {
    sessionStorage.setItem('product', JSON.stringify({
      title: title,
      price: price,
      img: game.img
    }));
  };

  return (
    <div>
      <Navbar />
      {showBanner && (
        <div className="banner">
          <p>Free in-store pickup for all orders!</p>
          <button className="close-button" onClick={handleCloseBanner}>
            x
          </button>
        </div>
      )}
      <div className="product-page">
        <style>{styles}</style>
        <div className="product-slider">
          {media.map((mediaItem, index) => (
            <div
              key={index}
              className={`slider-media ${currentMedia === index ? 'active' : ''}`}
            >
              {mediaItem.type === 'image' && (
                <img src={mediaItem.src} alt={`Product Image ${index + 1}`} />
              )}
              {mediaItem.type === 'video' && (
                <iframe 
                  width="560" 
                  height="560" 
                  src={mediaItem.src} 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen>
                </iframe>
              )}
            </div>
          ))}
          <div className="slider-controls">
            <button className="slider-button" onClick={handlePrevClick}>
              Previous
            </button>
            <button className="slider-button" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </div>
        <div className="product-details">
          <h1 className="product-title">{title}</h1>
          <p className="product-price">${price}.00 CAD</p>
          <p className="product-description">{description}</p>
            <Link 
            to={{
              pathname: "/Purchase"
            }} 
            className="purchase-button"
            onClick={handlePurchase}
          >
            Purchase
          </Link>
          <ChatButton />

        </div>
      </div>
    </div>
  );
};

export default ConsoleProduct;
