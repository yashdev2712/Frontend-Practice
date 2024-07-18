import React, { useState } from "react";
import thumbnail from "../assets/gallery02.jpg";
import { IoPersonCircleOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
      <img
        src={thumbnail}
        alt="thumbnail"
        className="w-full h-48 object-cover"
      />
      <div className="flex p-4">
        <IoPersonCircleOutline size={55} className="mr-4" />
        <div>
          <h1 className="text-sm font-semibold mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <h2 className="text-xs text-white opacity-90">Ru2712</h2>
          <div className="flex text-xs text-gray-600">
            <span>55K views</span>
            <span className="mx-1">•</span>
            <span>1 year ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
