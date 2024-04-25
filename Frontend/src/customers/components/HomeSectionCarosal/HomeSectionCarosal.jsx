import React, { useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";


const HomeSectionCarosal = ({data}) => {

  // const [activeIndex, setActiveIndex]=useState(0);
  const[activeIndex,setActiveIndex]=useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  
  const slideNext = () => setActiveIndex(activeIndex-1)
  const slidePrev = () => setActiveIndex(activeIndex+1)


  const syncActiveIndex = ({item}) => setActiveIndex(item)

  

  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>);
  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}

        />
        {activeIndex !== items.length-5 && <Button
        onClick={slideNext} 
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}

        {activeIndex!==0 &&<Button
        onClick={slidePrev}
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            lefy: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>} 
      </div>
    </div>
  );
};

export default HomeSectionCarosal;
