import React from "react";
import {GrFormNextLink,GrFormPreviousLink} from 'react-icons/gr'


function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        <GrFormNextLink/>
      </span>
      <span className="next" onClick={nextSlide}>
        <GrFormPreviousLink/>
      </span>
    </div>
  );
}

export default Arrows;