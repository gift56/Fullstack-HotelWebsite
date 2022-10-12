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
    "Bank hotel Bank hotel",
  ];
  return (
    <div className="movement">
      <div className="repeat">
        <div className="firstP">
          {pageMovement.map((page, index) => (
            <p key={index}>{page}</p>
          ))}
        </div>
        <div className="firstP page4">
          {pageMovement.map((page, index) => (
            <p key={index}>{page}</p>
          ))}
        </div>
      </div>
      <div className="repeat">
        <div className="secondP">
          {pageMovement.map((page, index) => (
            <p key={index}>{page}</p>
          ))}
        </div>
        <div className="secondP page4">
          {pageMovement.map((page, index) => (
            <p key={index}>{page}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryBookAnimation;
