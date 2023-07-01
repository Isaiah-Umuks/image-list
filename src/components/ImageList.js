import React from "react";

const ImageList = (props) => {
  //console.log(props)
  // map over prop images
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.webformatURL} alt="images" height={250} width={250} style={{ margin: '.8rem' }} />;
  });
  return <div>
    {images}
        </div>
};

export default ImageList;
