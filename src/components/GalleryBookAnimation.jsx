import React from "react";

const GalleryBookAnimation = () => {
  const pageMovement = [
    "Bank hotel Bank__hotel©",
    "Bank hotel Bank hotel",
    "Bank hotel  Bank hotel",
    "Bank  hotel Bank hote",
    "Bank hotel Bank__hotel©",
    "Bank hotel Bank hotel",
    "Bank hotel  Bank hotel",
    "Bank  hotel Bank hote",
    "Bank hotel Bank__hotel©",
    "Bank hotel Bank hotel",
  ];
  return (
    <div className="Movement">
      <div className="firstP">
        {pageMovement.map((page, index) => (
          <p key={index}>{page}</p>
        ))}
      </div>
      
      <div className="secondP">
        {pageMovement.map((page, index) => (
          <p key={index}>{page}</p>
        ))}
      </div>
    </div>
  );
};

export default GalleryBookAnimation;
