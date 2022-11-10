import React, { useState } from "react";

const Aboutsection = () => {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="extra-content">
        several software technology companies. I have great leadership skills
        and have demostrated ability to inspire, motivate and manage a team.
      </p>
    </div>
  );
  const linkName = readMore ? "..See less" : "..See more";

  return (
    <div className="bg-white mt-6 rounded-md">
      <div className="lg:w-[830px] py-8 lg:pl-[2rem] pl-[1rem] lg:h-[190px]">
        <h1 className="font-semibold text-[17px]">About</h1>
        <div className="hidden md:block">
          <p className="lg:w-[740px]">
            I am an experienced Software Engineer with passion for building
            innovative softwares to drive business growth. I have track history
            of working with several software technology companies.
          </p>

          <p className="lg:mt-4 lg:w-[680px]">
            I have great leadership skills and have demostrated ability to
            inspire, motivate and manage a team.
          </p>
        </div>

        {/* for mobile */}
        <div className="md:hidden block">
          <p className="lg:w-[740px] text-[12px]">
            I am an experienced Software Engineer with passion for building
            innovative softwares to drive business growth. I have track history
            of working with {readMore && extraContent}
            <button
              className="text-[12px]"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              <h2>{linkName}</h2>
            </button>
            
          </p>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
