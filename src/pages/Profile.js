// Profile page with editable user form

import React, { useState } from "react";
import "./Profile.css";

function Profile() {

  // State to store user details
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple alert to simulate saving data
    alert("Profile saved successfully!");
    console.log(user);
  };

  return (
    <div className="profile-container">

      <h1 className="profile-title">User Profile</h1>

      {/* User form */}
      <form className="profile-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={user.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={user.phone}
          onChange={handleChange}
          required
        />

        <button type="submit">Save Profile</button>

      </form>
    </div>
  );
}

export default Profile;
