import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      setError('Please fill in both fields.');
      setFullName('');
    } else {
      setFullName(`${firstName.trim()} ${lastName.trim()}`);
      setError('');
    }
  };

  return (
    <div className="container">
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label><br />
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label><br />
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>


      {error && <p className="error">{error}</p>}

      {fullName && (
        <p className="result">Full Name: <strong>{fullName}</strong></p>
      )}
    </div>
  );
}

export default App;
