import React from "react";

const Profile = ({ data, setData, errors }) => {
  const { name, email, age } = data;
  const handleDataChange = (e, item) => {
    setData((prevData) => ({ ...prevData, [item]: e.target.value }));
  };
  return (
    <div>
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Name"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="input-container">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          placeholder="Name"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
    </div>
  );
};

export default Profile;
