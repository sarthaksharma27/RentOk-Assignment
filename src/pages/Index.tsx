import React, { useEffect, useState } from 'react';
import AppForm from './Form'; 
import './AppStyles.css';
import '../../public/main.webp';
import '../../public/client1.jpg';

export const AppHome: React.FC = () => {
  const [place, setPlace] = useState('Hostel');
  const arr = ["Co-Living", "flats", "Rk-Studio", "Living-space"];
  const [showForm, setShowForm] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = arr.indexOf(place);
      const nextIndex = (currentIndex + 1) % arr.length;
      const nextPlace = arr[nextIndex];
      setPlace(nextPlace);
    }, 3000);

    return () => clearInterval(interval);
  }, [place, arr]);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div className="app-container">
      <h1 className="main-heading">
        The easiest way to rent your <span style={{ color: 'lightgreen' }}>{place}</span>
      </h1>
      <p className="app-description">
        Join India’s largest network of Smart Properties. Save time. Work less. Earn more.
      </p>
      {showForm ? (
        <AppForm />
      ) : (
        <button className="main-button" onClick={handleShowForm}>
          Add Listing &#127881;
        </button>
      )}
      <img className="app-image" src="./main.webp" alt="App Image" />
    </div>
  );
};

export const Client1Home: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="main-heading">client1 listing</h1>
      <p className="app-description">This is the best budget Home</p>
      <p>Price: 5000</p>
      <img className="app-image" src="./client1.jpg" alt="App Image" />
    </div>
  );
};

export const Client2Home: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="main-heading">client2 listing</h1>
      <p className="app-description">This is the best budget Home</p>
      <p>Price: 4000</p>
      <img className="app-image" src="./client2.jpeg" alt="App Image" />
    </div>
  );
};

