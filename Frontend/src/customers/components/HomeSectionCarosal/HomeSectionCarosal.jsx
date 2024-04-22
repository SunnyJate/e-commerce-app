import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const HomeSectionCarosal = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
        //   autoPlay
        //   autoPlayInterval={1000}
          infinite
          responsive={responsive}
        />
        <button variant="contained" className="z-50" sx={{position:'absolute', top:"8rem", right:"0rem", transform:""}}  aria-label="next">
            <KeyboardArrowLeftIcon/>
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarosal;
