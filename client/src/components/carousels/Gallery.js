import React, {Component} from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import PanoramaIcon from "@material-ui/icons/Panorama";

const images = [
  "./pics/kb.png",
  "./pics/m1.jpg",
  "./pics/ad1.jpeg",
  "./pics/toyb.jpg",
  "./pics/toyb2.jpg",
  "./pics/ad.jpeg",
  "./pics/kb2.jpg",
  "./pics/dd1.jpg",
  "./pics/blife.png",
  "./pics/camb.jpg",
  "./pics/m2.jpg",
  "./pics/camb1.jpeg",
  "./pics/m4.jpg",
];

export default class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const {photoIndex, isOpen} = this.state;

    return (
      <div>
        <button type="button" onClick={() => this.setState({isOpen: true})}>
          Gallery <PanoramaIcon />
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({isOpen: false})}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
