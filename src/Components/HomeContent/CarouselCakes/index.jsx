import { useContext } from "react";
// Context
import GeneralContext from "../../../Context/GeneralContext";
// Style
import { Carousel } from "antd";
//App

const CarouselCakes = () => {
  const { data } = useContext(GeneralContext);
  const contentCaouselStyle = {
    height: "16rem",
    color: "#fff",
    textAlign: "center",
    background: "#364d79",
  };

  const handleImgs = () => {
    if (!data) {
      return;
    }
    const mapImgs = data.data.map((e) => {
      return (
        <div key={e.media_id}>
          <h3 style={contentCaouselStyle}>
            <img style={{ height: "16rem", width: "100%" }} src={e.thumbnail} />
          </h3>
        </div>
      );
    });
    return mapImgs;
  };

  return <Carousel autoplay>{handleImgs()}</Carousel>;
};

export default CarouselCakes;
