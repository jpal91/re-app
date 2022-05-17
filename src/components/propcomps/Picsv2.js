import React from "react";
import { Carousel } from "primereact/carousel";

const Picsv2 = (props) => {
  const pics = props.photos;

  const productTemplate = (product) => {
    return (
      <div sx={{ maxHeight: "300px", maxWidth: "200px" }}>
        <img src={pics.href} alt="pic" />
      </div>
    );
  };

  return (
    <Carousel
      value={pics}
      numVisible={3}
      numScroll={3}
      itemTemplate={productTemplate}
      header={<h5>Basic</h5>}
    />
  );
};

export default Picsv2;

//nuka
