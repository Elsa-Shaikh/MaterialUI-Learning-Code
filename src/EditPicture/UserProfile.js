import React, { useRef, useState } from "react";
import Koala from "./ProfileImage/Koala.jpg";

const UserProfile = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    //    const file = event;
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  return (
    <>
      <div>
        <label htmlFor="Image">
            {image ? image.name : 'Choose an image'}
        </label>
        <div onClick={handleImageClick} style={{cursor:'pointer'}}>
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="KoalaPicture"
              style={{ width: "500px", height: "500px", borderRadius: "50%" }}
            />
          ) : (
            <img
              src={Koala}
              alt="KoalaPicture"
              style={{ width: "500px", height: "500px", borderRadius: "50%" }}
            />
          )}
          <input
            type="file"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
