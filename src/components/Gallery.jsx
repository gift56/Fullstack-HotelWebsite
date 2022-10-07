import React from "react";
import MobileGalleyOne from "../assets/Mgallery1.svg";
import MobileGalleyTwo from "../assets/Mgallery2.svg";
import MobileGalleyThree from "../assets/Mgallery3.svg";
import MobileGalleyFour from "../assets/Mgallery4.svg";
import MobileGalleyFive from "../assets/Mgallery5.svg";
import DesktopGalleyOne from "../assets/Dgallery1.svg";
import DesktopGalleyTwo from "../assets/Dgallery2.svg";
import DesktopGalleyThree from "../assets/Dgallery3.svg";
import DesktopGalleyFour from "../assets/Dgallery4.svg";
import Label from "../assets/Alabel.svg";
import Polygon from "../assets/polygon.svg";
import {
  GalleryArea,
  GalleryCon,
  GalleryleftSide,
  GalleryrightSide,
  GalleryRightSideDesktop,
  GalleryRightSideMobile,
  GalleryTitle,
} from "../styles/gallery.styled";
import { Container } from "../styles/container.styled";

const Gallery = () => {
  const MobileImgs = [
    MobileGalleyOne,
    MobileGalleyTwo,
    MobileGalleyThree,
    MobileGalleyFour,
    MobileGalleyFive,
  ];

  const DesktopImgs = [
    DesktopGalleyOne,
    DesktopGalleyTwo,
    DesktopGalleyThree,
    DesktopGalleyFour,
  ];
  return (
    <GalleryCon>
      <Container>
        <GalleryArea>
          <GalleryleftSide>
            <p className="artC">
              Art &amp; Congress <br /> hall
            </p>
            <GalleryTitle>
              <div className="image">
                <img src={Label} alt="label" />
              </div>
              <h2>our Gallery</h2>
              <p>
                Explore our spacious rooms with the gorgeous view to the
                historical part of the city. Each room has an exclusive interior
                design decorated with modern art pieces that will make your stay
                unforgettable.
              </p>
            </GalleryTitle>
          </GalleryleftSide>
          <GalleryrightSide>
            <GalleryRightSideMobile>
              {MobileImgs.map((imgs, index) => (
                <div className="images" key={index}>
                  <img src={imgs} alt={`${index} gallery_img`} />
                </div>
              ))}
              <div className="details">
                <img src={Polygon} alt="polygon" />
                <h3>
                  It is our pleasure to meet your <br /> most unrealistic
                  expectations.
                </h3>
              </div>
            </GalleryRightSideMobile>
            <GalleryRightSideDesktop>
              {DesktopImgs.map((imgs, index) => (
                <div className="images" key={index}>
                  <img src={imgs} alt={`${index} gallery_img`} />
                </div>
              ))}
              <div className="details">
                <img src={Polygon} alt="polygon" />
                <h3>
                  It is our pleasure to meet your most unrealistic expectations.
                </h3>
              </div>
            </GalleryRightSideDesktop>
          </GalleryrightSide>
        </GalleryArea>
      </Container>
    </GalleryCon>
  );
};

export default Gallery;
