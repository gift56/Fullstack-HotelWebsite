import React from "react";
import MobileGalleyOne from "../assets/Mgallery1.svg";
import MobileGalleyTwo from "../assets/Mgallery2.svg";
import MobileGalleyThree from "../assets/Mgallery3.svg";
import DesktopGalleyOne from "../assets/Dgallery1.svg";
import DesktopGalleyTwo from "../assets/Dgallery2.svg";
import DesktopGalleyThree from "../assets/Dgallery3.svg";
import DesktopGalleyFour from "../assets/Dgallery4.svg";
import Label from "../assets/Alabel.svg";
import {
  GalleryArea,
  GalleryCon,
  GalleryleftSide,
  GalleryrightSide,
  GalleryRightSideMobile,
  GalleryTitle,
} from "../styles/gallery.styled";
import { Container } from "../styles/container.styled";

const Gallery = () => {
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
            <GalleryRightSideMobile></GalleryRightSideMobile>
            <GalleryRightSideMobile></GalleryRightSideMobile>
          </GalleryrightSide>
        </GalleryArea>
      </Container>
    </GalleryCon>
  );
};

export default Gallery;
