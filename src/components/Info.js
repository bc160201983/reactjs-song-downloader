import React, { useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Info = ({ id, image, subtitle, title }) => {
  const [isHover, setIsHover] = useState(-1);
  return (
    <>
      <div className="infowrapper ">
        <div
          className="image-hover relative"
          onMouseEnter={() => setIsHover(id)}
          onMouseLeave={() => setIsHover(-1)}
        >
          <img
            src={image}
            alt={title}
            width="250"
            height="250"
            className="rounded-lg img-shadow"
          />
          <BsFillPlayCircleFill
            className={`${isHover === id && "icon-play"} hidden`}
          />
        </div>

        <div className="title text-sm whitespace-nowrap font-bold truncate mt-2">
          {title}
        </div>
        <div className="title text-sm whitespace-nowrap truncate">
          {subtitle}
        </div>
      </div>
    </>
  );
};

export default Info;
