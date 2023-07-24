/* global google */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo2.png';

export const Navbar = () => {
  const consoles = ['Nintendo', 'PlayStation', 'Xbox'];
  const dropdownLinks = [
    { name: 'Games', path: '' },
    { name: 'Accessories', path: '/Console' },
    { name: 'Consoles', path: '/Console' }
  ];

  const [dropdownOpen, setDropdownOpen] = useState({
    Nintendo: false,
    PlayStation: false,
    Xbox: false
  });

  const handleDropdownHover = (console) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [console]: true
    }));
  };

  const handleDropdownLeave = (console) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [console]: false
    }));
  };


  const handleTranslateClick = (lang) => {
    let url = window.location.href.split('#')[0];
    url += lang === 'fr' ? '#googtrans(en|fr)' : '#googtrans(fr|en)';
    window.location.href = url;
    window.location.reload(true);
  };

  useEffect(() => {
    const jqueryScript = document.createElement('script');
    jqueryScript.src = "https://code.jquery.com/jquery-3.5.1.min.js";
    jqueryScript.async = true;
    jqueryScript.addEventListener('error', function(e) {
      console.error('Error loading jQuery script: ', e);
    });
    document.body.appendChild(jqueryScript);

    const translateScript = document.createElement('script');
    translateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    translateScript.async = true;
    translateScript.addEventListener('error', function(e) {
      console.error('Error loading Google Translate script: ', e);
    });
    document.body.appendChild(translateScript);

    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element');
    }
  }, []);

return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '15px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          {consoles.map((console) => (
        <div 
          className="dropdown" 
          onMouseEnter={() => handleDropdownHover(console)} 
          onMouseLeave={() => handleDropdownLeave(console)}
        >
          <button
            className="console-button"
            key={console}
          >
            {console} {dropdownOpen[console] ? '▲' : '▼'}
          </button>
          {dropdownOpen[console] &&
            <div className="dropdown-content">
              <Link to={`/${console}`} style={{ textDecoration: 'none' }}>
                <button className="dropdown-button">{dropdownLinks[0].name}</button>
              </Link>
              {dropdownLinks.slice(1).map((link) => (
                <Link to={link.path} style={{ textDecoration: 'none' }}>
                  <button className="dropdown-button">{link.name}</button>
                </Link>
              ))}
            </div>
          }
        </div>
      ))}
          <Link to="/LearnMore">
            <button className="nav-button">Learn More</button>
          </Link>
          <Link to="/Contact">
            <button className="nav-button">Contact</button>
          </Link>
          <Link to="/Stats">
            <button className="nav-button">Console Stats</button>
          </Link>
        </div>
        <div>
          <button
            className="lang-select nav-button"
            data-lang="en"
            onClick={() => handleTranslateClick('en')}
          >
            Eng
          </button>
          <button
            className="lang-select nav-button no-translate"
            data-lang="fr"
            onClick={() => handleTranslateClick('fr')}
          >
            Fr
          </button>
        </div>
      </div>
      <style>
        {`
        .logo {
          width: 200px;
          height: 50px;
          object-fit: cover;
        }

        .console-button, .nav-button {
          color: black;
          text-decoration: none;
          padding: 15px;
          font-size: 18px;
          border: none;
          background-color: transparent;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .console-button:hover, .nav-button:hover,
        .console-button:focus, .nav-button:focus {
          color: #ffcc00;
          outline: none;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
          display: flex;
          flexDirection: column;
          borderRadius: 0px 0px 5px 5px;
        }

        .dropdown-content button {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          text-align: left;
          transition: background-color 0.3s ease;
        }

        .dropdown-content button:hover {
          background-color: #f1f1f1
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        .dropdown-button {
          color: black;
          text-decoration: none;
          padding: 15px;
          font-size: 18px;
          border: none;
          background-color: transparent;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .dropdown-button:hover,
        .dropdown-button:focus {
          color: #ffcc00;
          outline: none;
        }

        body > .skiptranslate {
          display: none;
        }

        /* Remove Google top bar and margin */
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        } 
        body {
          top: 0px !important; 
        }
        
        /* Disable google translate original text tooltips */  
        #goog-gt-tt, .goog-te-balloon-frame{display: none !important;} 
        .goog-text-highlight { background: none !important; box-shadow: none !important;}
        `}
      </style>
    </>
  );
};
