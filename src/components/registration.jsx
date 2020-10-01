import React, { useState } from "react";

const Registration = () => {
  const [name, setName] = useState();
  const [lastName, setLastname] = useState();
  const [username, setUsername] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();
  const [org, setOrg] = useState();

  return (
    <div className="registration">
      <div className="form-container">
        <img
          id="typography"
          src={require("../assets/img/registration.png")}
          alt=""
        />
        <span id="one">
          Embark on the code cooking journey off in the far lands of CodeChef's
          turf
        </span>
        <form action="">
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First Name"
          />
          <input
            id="lastname"
            type="text"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Last Name"
          />
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="CodeChef Username"
          />
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
          />
          <input
            id="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
          />
          <input
            id="uni"
            type="text"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            placeholder="College/Organisation"
          />
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
