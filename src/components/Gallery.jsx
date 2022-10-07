import React from "react";
import MobileGalleyOne from "../assets/Mgallery1.svg";
import MobileGalleyTwo from "../assets/Mgallery2.svg";
import MobileGalleyThree from "../assets/Mgallery3.svg";
import DesktopGalleyOne from "../assets/Dgallery1.svg";
import DesktopGalleyTwo from "../assets/Dgallery2.svg";
import DesktopGalleyThree from "../assets/Dgallery3.svg";
import DesktopGalleyFour from "../assets/Dgallery4.svg";
import {
  GalleryArea,
  GalleryCon,
  GalleryleftSide,
  GalleryrightSide,
  GalleryRightSideMobile,
} from "../styles/gallery.styled";
import { Container } from "../styles/container.styled";

const Gallery = () => {
  return (
    <GalleryCon>
      <Container>
        <GalleryArea>
          <GalleryleftSide></GalleryleftSide>
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
