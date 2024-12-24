import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const UserCard = ({ user }) => {
  return (
    <div className="container">
      <input type="checkbox" id="switch" />
      <div className="outer">
        <div className="content">
          <label htmlFor="switch">
            <span className="toggle">
              <span className="circle"></span>
            </span>
          </label>
          <div className="image-box">
            <img src={user.picture.large} alt="profile" />
          </div>
          <div className="details">
            <div className="name">First Name: {user.name.first}</div>
            <div className="job">Last Name: {user.name.last}</div>
            <div className="job">Gender: {user.gender}</div>
            <div className="buttons">Age: {user.dob.age} years old</div>
            <div className="buttons">
              <p>Email: {user.email}</p>
              <p>Phone Number: {user.phone}</p>
              <p>Address: {user.location.city}, {user.location.state}, {user.location.country}</p>

            </div>
          </div>
          <div className="media-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => {
        setUser(response.data.results[0]);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="App">
      {user ? <UserCard user={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
