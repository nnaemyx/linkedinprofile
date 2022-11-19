import React from 'react'
import { trendingpost } from '../../Data';

const Trendingpost = () => {
  return (
  <div className="px-[3rem] mt-8">
      <div className="space-y-7">
        <h1 className="font-semibold">Trending Post</h1>
        {trendingpost.map((items, index) => {
          return (
            <div key={index}>
              <div className="flex items-center">
                <img src={items.image.type} alt="" className="w-[37px]" />
                <p className="text-[12px] font-semibold">{items.name}</p>
              </div>
              <p className="text-[14px] font-bold">{items.paragraph}</p>
            </div>
          );
        })}
        <div className="mt-3 pl-3">
          <a href="google.com" className="text-[12px] text-[#27A261] pt-8">
            See the full list
          </a>
        </div>
        {/* <img src={Line} alt="" className="w-[80%]" /> */}
      </div>
    </div>
  )
}

export default Trendingpost