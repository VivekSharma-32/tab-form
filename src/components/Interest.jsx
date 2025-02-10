import React from "react";

const Interest = ({ data, setData, errors }) => {
  const { interests } = data;

  const handleDataChange = (e, name) => {
    setData((prevData) => ({
      ...prevData,
      interests: e.target.checked
        ? [...prevData.interests, e.target.name]
        : prevData.interests.filter((interest) => interest !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          />
          Coding
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleDataChange}
          />
          Music
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="javascript"
            checked={interests.includes("javascript")}
            onChange={handleDataChange}
          />
          Javascript
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interest;
